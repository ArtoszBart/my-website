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
    <button className='menu-btn' onClick={() => onClick()}>
      <span
        className={clsx('menu-btn__icon', {
          'menu-btn__icon--opened': isOpened,
        })}
      ></span>
    </button>
  );
}

export default memo(HamburgerButton);
