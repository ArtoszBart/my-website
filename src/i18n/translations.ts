import { Locale, useTranslations as defaultUseT } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Namespace } from './types';

export function useTranslations(locale: Locale, namespace: Namespace) {
  setRequestLocale(locale);
  return defaultUseT(namespace);
}
