import { type ChangeEvent } from 'react';
import { useFormContext, useFormState, useWatch } from 'react-hook-form';

export interface IuseFiles {
  name: string;
}

const useFiles = ({ name }: IuseFiles) => {
  const { setValue, control } = useFormContext();
  const files: File[] = useWatch({ control, name }) ?? [];
  const { errors } = useFormState({
    control,
    name,
  });

  const errorMessage = errors[name]?.message as string;

  const addFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files ?? []);
    const updated = [...files, ...newFiles];

    setValue(name, updated, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });

    e.target.value = '';
  };

  const removeFile = (indexToRemove: number) => {
    const updated = files.filter((_, index) => index !== indexToRemove);

    setValue(name, updated, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return { errorMessage, addFiles, removeFile, files };
};

export default useFiles;
