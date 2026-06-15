'use client';

import { SOCIALS } from '@/consts/socials';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import HamburgerButton from '../HamburgerButton';
import LanguageSelector from '../LanguageSelector';
import './header.scss';
import useHeader from './useHeader';

export default function Header() {
  const hook = useHeader();
  const t = useTranslations('Nav');

  return (
    <header className={clsx({ scrolled: hook.isScrolled })}>
      <div className='header-wrapper'>
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
                {t('about')}
              </Link>
            </li>
            <li>
              <Link href='/projects' onClick={hook.handleMenuItemClick}>
                {t('projects')}
              </Link>
            </li>
            <li>
              <Link href='/' onClick={hook.handleMenuItemClick}>
                {t('offer')}
              </Link>
            </li>
            <li>
              <Link href='/' onClick={hook.handleMenuItemClick}>
                {t('contact')}
              </Link>
            </li>
          </ul>
          <ul className='socials-nav'>
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
          <div className='actions-nav'>
            <LanguageSelector />
            <Link href='/'>Login</Link>
          </div>
        </nav>
        <HamburgerButton
          isOpened={hook.isMenuOpened}
          onClick={hook.handleHamburgerClick}
        />
      </div>
    </header>
  );
}
