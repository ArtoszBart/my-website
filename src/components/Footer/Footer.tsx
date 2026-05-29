import './footer.scss';

import Link from 'next/link';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Socials from '../Socials';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <Logo className='footer__logo' />
        <Navigation className='footer__navigation' />
        <Socials />
        <p className='footer__copyright'>
          <span className='no-wrap'>Copyright &copy; {year}</span>{' '}
          <span className='no-wrap'>
            Developed by <Link href='/'>Bartosz Art</Link>
          </span>{' '}
          <span className='no-wrap'>| All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
