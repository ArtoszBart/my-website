'use client';

import './honeypots.scss';

import { useFormContext } from 'react-hook-form';
import { HONEYPOT_FIELD_NAMES } from './config';

export default function Honeypots() {
  const { register } = useFormContext();

  return (
    <>
      {HONEYPOT_FIELD_NAMES.map((name) => (
        <div className={'form-input'} key={name}>
          <input
            type='text'
            id={name}
            tabIndex={-1}
            aria-hidden='true'
            autoComplete='off'
            {...register(name)}
          />
          <span className='form-input__error-message'></span>
        </div>
      ))}
    </>
  );
}
