'use client';

import clsx from 'clsx';
import { memo } from 'react';
import './hamburger.scss';

interface IProps {
  isOpened: boolean;
  onClick: () => void;
}

function HamburgerButton({ isOpened, onClick }: IProps) {
  return (
    <button
      className='menu-btn'
      onClick={() => onClick()}
      aria-label={isOpened ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpened}
    >
      <span
        className={clsx('menu-btn__icon', {
          'menu-btn__icon--opened': isOpened,
        })}
        aria-hidden='true'
      ></span>
    </button>
  );
}

export default memo(HamburgerButton);
