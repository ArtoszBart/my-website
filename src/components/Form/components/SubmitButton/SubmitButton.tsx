'use client';

import './submitButton.scss';

import clsx from 'clsx';
import { type IconType } from 'react-icons';

interface IProps {
  label: string;
  Icon: IconType;
  disabled: boolean;
}

export default function SubmitButton({ label, Icon, disabled }: IProps) {
  return (
    <button
      className={clsx('form__submit-button', {
        'form__submit-button--disabled': disabled,
      })}
      type='submit'
      disabled={disabled}
    >
      <span>{label}</span> {Icon && <Icon />}
    </button>
  );
}
