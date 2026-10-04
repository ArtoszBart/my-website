'use client';

import './button.scss';

import clsx from 'clsx';
import { cloneElement, isValidElement, ReactNode } from 'react';
import useButton, { IuseButton } from './useButton';

export interface IProps extends IuseButton {
  className?: string;
  label: string;
  icon: ReactNode;
  href?: string;
  sameTab?: boolean;
}

export default function Button(props: IProps) {
  const { handleClick, ripples, clearRipple } = useButton({
    onClick: props.onClick,
  });

  const iconWithClass = isValidElement<{ className?: string }>(props.icon)
    ? cloneElement(props.icon, { className: 'button__icon' })
    : props.icon;

  const content = (
    <>
      <span className='button__label'>{props.label}</span>
      <span className='button__icon-bg'>{iconWithClass}</span>
      {ripples.map(({ id, x, y, size }) => (
        <span
          key={id}
          className='button__ripple'
          style={{ left: x, top: y, width: size, height: size }}
          onAnimationEnd={() => clearRipple(id)}
        />
      ))}
    </>
  );

  if (props.href) {
    return (
      <a
        className={clsx('button', props.className)}
        href={props.href}
        onClick={handleClick}
        target={props.sameTab ? undefined : '_blank'}
        rel={props.sameTab ? undefined : 'noopener noreferrer'}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={clsx('button', props.className)} onClick={handleClick}>
      {content}
    </button>
  );
}
