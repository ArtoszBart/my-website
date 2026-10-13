import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

type RichFn = (
  key: string,
  tags: Record<string, (chunks: ReactNode) => ReactNode>,
) => ReactNode;

type Props = {
  t: ReturnType<typeof useTranslations>;
  text: string;
  className?: string;
};

export default function RichText({ t, text, className }: Props) {
  const rich = t.rich as unknown as RichFn;

  return (
    <p className={className}>
      {rich(text, {
        b: (chunks) => <b>{chunks}</b>,
      })}
    </p>
  );
}
