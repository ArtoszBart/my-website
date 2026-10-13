import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      pl: '/o-mnie',
    },
    '/projects': {
      en: '/projects',
      pl: '/projekty',
    },
    '/contact': {
      en: '/contact',
      pl: '/kontakt',
    },
    '/services': {
      en: '/services',
      pl: '/oferta',
    },
  },
  localeCookie: {
    name: 'USER_LOCALE',
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
