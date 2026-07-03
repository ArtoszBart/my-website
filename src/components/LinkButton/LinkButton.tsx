'use client';

import './linkButton.scss';

import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from 'react';
import useLinkButton from './useLinkButton';

interface IProps extends PropsWithChildren {
  label: string;
  icon: ReactNode;
  href: string;
}

export default function Button({ label, icon, href }: IProps) {
  const { handleClick, ripples, clearRipple } = useLinkButton();

  const iconWithClass = isValidElement<{ className?: string }>(icon)
    ? cloneElement(icon, { className: 'button__icon' })
    : icon;

  return (
    <a
      className='button'
      href={href}
      onClick={handleClick}
      target='_blank'
      rel='noreferrer'
    >
      <span className='button__label'>{label}</span>
      <span className='button__icon-bg'>{iconWithClass}</span>
      {ripples.map(({ id, x, y, size }) => (
        <span
          key={id}
          className='button__ripple'
          style={{ left: x, top: y, width: size, height: size }}
          onAnimationEnd={() => clearRipple(id)}
        />
      ))}
    </a>
  );
}
