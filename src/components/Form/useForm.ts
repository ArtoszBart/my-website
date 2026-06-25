import { type ValidationErrorsTranslator } from '@/i18n/types';
import { type ActionResult } from '@/types/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo } from 'react';
import {
  type DefaultValues,
  type FieldValues,
  type Path,
  useForm as rhfUseForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import { type ZodType } from 'zod';

export interface IuseForm<T extends FieldValues> {
  schemaFactory: (t: ValidationErrorsTranslator) => ZodType<T, T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<ActionResult>;
}

const useForm = <T extends FieldValues>({
  schemaFactory,
  defaultValues,
  onSubmit,
}: IuseForm<T>) => {
  const t = useTranslations('FormStatuses');
  const tValidation = useTranslations('ValidationErrors');
  const schema = useMemo(
    () => schemaFactory(tValidation),
    [schemaFactory, tValidation],
  );
  const formProps = rhfUseForm({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const onFormValid = async (data: T) => {
    const toastId = toast.loading(t('loadingToast'));
    const result = await onSubmit(data);

    if (!result.success && result.errors) {
      Object.entries(result.errors).forEach(([field, message]) => {
        formProps.setError(field as Path<T>, { message });
      });
      return toast.error(t('validationErrorToast'), { id: toastId });
    }

    if (!result.success) {
      return toast.error(t('generalErrorToast'), { id: toastId });
    }

    toast.success(t('successToast'), { id: toastId });
  };

  const onFormInvalid = () => {
    toast.error(t('validationErrorToast'));
  };

  const handleSubmit = formProps.handleSubmit(onFormValid, onFormInvalid);

  useEffect(() => {
    if (formProps.formState.isSubmitSuccessful) {
      formProps.reset(defaultValues, {
        keepFieldsRef: true,
      });
    }
  }, [formProps.formState.isSubmitSuccessful, formProps.reset]);

  return { formProps, handleSubmit };
};

export default useForm;
