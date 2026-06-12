import MouseTooltipProvider from '@/components/MouseTooltip/MouseTooltipProvider';
import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NextIntlClientProvider>
      <MouseTooltipProvider>{children}</MouseTooltipProvider>
    </NextIntlClientProvider>
  );
}
