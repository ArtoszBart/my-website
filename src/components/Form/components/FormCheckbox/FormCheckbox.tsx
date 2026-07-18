'use client';

import './formCheckbox.scss';

import clsx from 'clsx';
import Checkbox from '../../../Checkbox';
import useInput, { type IuseInput } from '../Input/useInput';

interface IProps extends IuseInput {
  label: string;
  tabIndex: number;
  required?: boolean;
}

export default function FormCheckbox({
  name,
  label,
  tabIndex,
  required,
}: IProps) {
  const { inputProps, errorMessage } = useInput({ name });
  const errorId = `${name}-error`;

  return (
    <Checkbox
      className={clsx('form-input', {
        'form-input--error': errorMessage,
      })}
      label={label}
      tabIndex={tabIndex}
      aria-invalid={!!errorMessage}
      aria-describedby={errorMessage ? errorId : undefined}
      aria-required={required}
      formProps={inputProps}
    >
      <span
        id={errorId}
        className='form-input__error-message'
        aria-live='polite'
      >
        {errorMessage}
      </span>
    </Checkbox>
  );
}
