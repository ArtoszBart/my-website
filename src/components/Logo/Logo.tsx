import './logo.scss';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href='/' className={clsx('logo', className)}>
      <Image
        className='logo__image'
        src='/logo.svg'
        alt='Bartosz Art logo'
        width={300}
        height={41}
      />
    </Link>
  );
}
