'use client';

import './toaster.scss';

import { Toaster as DefaultToaster } from 'react-hot-toast';

export default function Toaster() {
  return (
    <DefaultToaster
      containerClassName='toaster'
      toastOptions={{ className: 'toaster__container' }}
    />
  );
}
