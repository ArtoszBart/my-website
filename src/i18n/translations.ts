import { Locale, useTranslations as defaultUseT } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Namespace } from './types';

export function useTranslations(namespace: Namespace, locale?: Locale) {
  if (locale) setRequestLocale(locale);

  return defaultUseT(namespace);
}
