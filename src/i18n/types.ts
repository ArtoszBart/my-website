import {
  Messages,
  NamespaceKeys,
  NestedKeyOf,
  useTranslations,
} from 'next-intl';
import { routing } from './routing';

export type Locale = (typeof routing.locales)[number];

export type Namespace = NamespaceKeys<Messages, NestedKeyOf<Messages>>;

export type ValidationErrorsTranslator = ReturnType<
  typeof useTranslations<'ValidationErrors'>
>;

export type LocaleParams = {
  params: Promise<{ locale: Locale }>;
};
