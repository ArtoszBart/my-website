'use client';

import { SOCIALS } from '@/consts/socials';
import clsx from 'clsx';
import Link from 'next/link';
import HamburgerButton from '../HamburgerButton';
import LanguageSelector from '../LanguageSelector';
import './header.scss';
import useHeader from './useHeader';

export default function Header() {
  const hook = useHeader();

  return (
    <header className={clsx({ scrolled: hook.isScrolled })}>
      <Link href='/' className='header__logo header__logo--mobile'>
        Bartosz Art
      </Link>

      <nav className={clsx({ opened: hook.isMenuOpened })}>
        <Link href='/' className='header__logo'>
          Bartosz Art
        </Link>

        <ul className='main-nav'>
          <li>
            <Link href='/' onClick={hook.handleMenuItemClick}>
              O mnie
            </Link>
          </li>
          <li>
            <Link href='/' onClick={hook.handleMenuItemClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href='/' onClick={hook.handleMenuItemClick}>
              Oferta
            </Link>
          </li>
          <li>
            <Link href='/' onClick={hook.handleMenuItemClick}>
              Kontakt
            </Link>
          </li>
        </ul>

        <ul className='socials-nav'>
          {SOCIALS.map((social) => (
            <li key={social.url}>
              <Link href={social.url} target='_blank' rel='noopener noreferrer'>
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>

        <div className='actions-nav'>
          <LanguageSelector />
          <Link href='/'>Login</Link>
        </div>
      </nav>

      <HamburgerButton
        isOpened={hook.isMenuOpened}
        onClick={hook.handleHamburgerClick}
      />
    </header>
  );
}
