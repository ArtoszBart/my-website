import './logo.scss';

import clsx from 'clsx';
import Link from 'next/link';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href='/' className={clsx('logo', className)}>
      Bartosz Art
    </Link>
  );
}
