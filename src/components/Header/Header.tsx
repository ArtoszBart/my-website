'use client';

import './header.scss';

import { SOCIALS } from '@/consts/socials';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import HamburgerButton from '../HamburgerButton';
import LanguageSelector from '../LanguageSelector';
import Logo from '../Logo';
import Navigation from '../Navigation';
import useHeader from './useHeader';

export default function Header() {
  const hook = useHeader();

  return (
    <header className={clsx('header', { scrolled: hook.isScrolled })}>
      <div className='header-wrapper'>
        <Logo className='header__logo header__logo--mobile' />
        <div
          className={clsx('header__navigation', { opened: hook.isMenuOpened })}
        >
          <Logo className='header__logo' />
          <Navigation className='main-nav' />
          <nav className='socials-nav'>
            <ul>
              {SOCIALS.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    aria-label={social.label}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='actions-nav'>
            <LanguageSelector />
            <nav>
              <Link href='/'>Login</Link>
            </nav>
          </div>
        </div>
        <HamburgerButton
          isOpened={hook.isMenuOpened}
          onClick={hook.handleHamburgerClick}
        />
      </div>
    </header>
  );
}
