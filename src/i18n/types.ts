import { Messages, NamespaceKeys, NestedKeyOf } from 'next-intl';
import { routing } from './routing';

export type Pathname = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
export type Namespace = NamespaceKeys<Messages, NestedKeyOf<Messages>>;
