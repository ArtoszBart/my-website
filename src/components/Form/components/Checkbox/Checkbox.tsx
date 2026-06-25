'use client';

import './checkbox.scss';

import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa6';
import useInput, { type IuseInput } from '../Input/useInput';

interface IProps extends IuseInput {
  label: string;
  required?: boolean;
}

export default function Checkbox({ name, label, required }: IProps) {
  const { inputProps, errorMessage } = useInput({ name });
  const errorId = `${name}-error`;

  return (
    <div
      className={clsx('form-input', {
        'form-input--error': errorMessage,
      })}
    >
      <input
        id={name}
        type='checkbox'
        aria-invalid={!!errorMessage}
        aria-describedby={errorMessage ? errorId : undefined}
        aria-required={required}
        {...inputProps}
      />
      <label className='form-input__checkbox' htmlFor={name}>
        <div className='form-input__checkbox-indicator'>
          <FaCheck aria-hidden='true' />
        </div>
        <p className='form-input__checkbox-label'>{label}</p>
      </label>
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
