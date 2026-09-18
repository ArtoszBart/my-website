import MouseTooltipProvider from '@/components/MouseTooltip/MouseTooltipProvider';
import ExtensionsProvider from '@/extensions/ExtensionsProvider';
import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NextIntlClientProvider>
      <MouseTooltipProvider>
        <ExtensionsProvider />
        {children}
      </MouseTooltipProvider>
    </NextIntlClientProvider>
  );
}
