import './navigation.scss';

import { useTranslations } from '@/i18n/translations';
import Link from 'next/link';

interface IProps {
  className?: string;
  handleMenuItemClick?: () => void;
}

export default function Navigation({ className, handleMenuItemClick }: IProps) {
  const t = useTranslations('Nav');

  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href='/about' onClick={handleMenuItemClick}>
            {t('about')}
          </Link>
        </li>
        <li>
          <Link href='/projects' onClick={handleMenuItemClick}>
            {t('projects')}
          </Link>
        </li>
        {/* <li>
          <Link href='/' onClick={handleMenuItemClick}>
            {t('offer')}
          </Link>
        </li> */}
        <li>
          <Link href='/contact' onClick={handleMenuItemClick}>
            {t('contact')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
