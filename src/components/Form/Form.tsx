'use client';

import './form.scss';

import { type PropsWithChildren } from 'react';
import { type FieldValues, FormProvider } from 'react-hook-form';
import { type IconType } from 'react-icons';
import Honeypots from './components/Honeypots';
import SubmitButton from './components/SubmitButton';
import useForm, { type IuseForm } from './useForm';

interface IProps<T extends FieldValues> extends PropsWithChildren, IuseForm<T> {
  submitLabel: string;
  SubmitIcon: IconType;
}

export default function Form<T extends FieldValues>({
  children,
  submitLabel,
  SubmitIcon,
  ...hookProps
}: IProps<T>) {
  const { formProps, handleSubmit } = useForm(hookProps);

  return (
    <FormProvider {...formProps}>
      <form className='form' noValidate onSubmit={handleSubmit}>
        {children}

        <Honeypots />

        <SubmitButton
          label={submitLabel}
          Icon={SubmitIcon}
          disabled={formProps.formState.isSubmitting}
        />
      </form>
    </FormProvider>
  );
}
