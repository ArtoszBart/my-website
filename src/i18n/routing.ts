import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/projects': {
      en: '/projects',
      pl: '/projekty',
    },
  },
  localeCookie: {
    name: 'USER_LOCALE',
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
