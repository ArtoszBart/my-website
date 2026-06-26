'use client';

import './input.scss';

import clsx from 'clsx';
import useInput, { type IuseInput } from './useInput';

interface IProps extends IuseInput {
  placeholder?: string;
  tabIndex: number;
  multiline?: boolean;
  required?: boolean;
}

export default function Input({
  name,
  tabIndex,
  multiline,
  placeholder,
  required,
}: IProps) {
  const { inputProps, errorMessage } = useInput({ name });
  const errorId = `${name}-error`;

  return (
    <div
      className={clsx('form-input', {
        'form-input--error': errorMessage,
      })}
    >
      <label htmlFor={name} className='form-input__label'>
        {placeholder}
      </label>

      {multiline ? (
        <textarea
          id={name}
          placeholder={placeholder}
          tabIndex={tabIndex}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? errorId : undefined}
          aria-required={required}
          {...inputProps}
        ></textarea>
      ) : (
        <input
          id={name}
          type='text'
          placeholder={placeholder}
          tabIndex={tabIndex}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? errorId : undefined}
          aria-required={required}
          {...inputProps}
        />
      )}

      <span
        id={errorId}
        className='form-input__error-message'
        aria-live='polite'
      >
        {errorMessage}
      </span>
    </div>
  );
}
