import { Text as DefaultText } from '@react-email/components';
import { type PropsWithChildren } from 'react';

export default function Text({ children }: PropsWithChildren) {
  return (
    <DefaultText
      style={{
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      {children}
    </DefaultText>
  );
}
