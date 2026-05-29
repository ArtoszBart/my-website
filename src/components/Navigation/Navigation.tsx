import './navigation.scss';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface IProps {
  className?: string;
  handleMenuItemClick?: () => void;
}

export default function Navigation({ className, handleMenuItemClick }: IProps) {
  const t = useTranslations('Nav');

  return (
    <nav>
      <ul className={className}>
        <li>
          <Link href='/' onClick={handleMenuItemClick}>
            {t('about')}
          </Link>
        </li>
        <li>
          <Link href='/projects' onClick={handleMenuItemClick}>
            {t('projects')}
          </Link>
        </li>
        <li>
          <Link href='/' onClick={handleMenuItemClick}>
            {t('offer')}
          </Link>
        </li>
        <li>
          <Link href='/contact' onClick={handleMenuItemClick}>
            {t('contact')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
