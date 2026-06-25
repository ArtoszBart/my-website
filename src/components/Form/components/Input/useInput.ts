import { useFormContext, useFormState } from 'react-hook-form';

export interface IuseInput {
  name: string;
}

const useInput = ({ name }: IuseInput) => {
  const { register, control } = useFormContext();
  const { errors } = useFormState({
    control,
    name,
  });

  const inputProps = register(name);
  const errorMessage = errors[name]?.message as string;

  return { inputProps, errorMessage };
};

export default useInput;
