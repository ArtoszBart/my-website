'use client';

import './submitButton.scss';

import Button from '@/components/Button';
import clsx from 'clsx';
import { type IconType } from 'react-icons';

interface IProps {
  label: string;
  Icon: IconType;
  disabled: boolean;
}

export default function SubmitButton({ label, Icon, disabled }: IProps) {
  return (
    <Button
      className={clsx('form__submit-button', {
        'form__submit-button--disabled': disabled,
      })}
      label={label}
      icon={<Icon />}
    />
  );
}
