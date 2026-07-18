'use client';

import './checkbox.scss';

import clsx from 'clsx';
import { type PropsWithChildren } from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa6';

interface IProps extends PropsWithChildren {
  label: string;
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  tabIndex?: number;
  ariaInvalid?: boolean;
  ariaDescribedby?: string | undefined;
  ariaRequired?: boolean;
  formProps?: UseFormRegisterReturn;
}

export default function Checkbox(props: IProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e.target.checked);
  };

  return (
    <div className={clsx('checkbox', props.className)}>
      <input
        id={props.label}
        type='checkbox'
        checked={props.checked}
        onChange={handleChange}
        tabIndex={props.tabIndex}
        aria-invalid={props.ariaInvalid}
        aria-describedby={props.ariaDescribedby}
        aria-required={props.ariaRequired}
        {...props.formProps}
      />
      <label className='checkbox__container' htmlFor={props.label}>
        <div className='checkbox__indicator'>
          <FaCheck aria-hidden='true' />
        </div>
        <p className='checkbox__label'>{props.label}</p>
      </label>
      {props.children}
    </div>
  );
}
