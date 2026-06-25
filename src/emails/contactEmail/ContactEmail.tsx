import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Link,
  Preview,
  Section,
} from '@react-email/components';
import { type ContactEmailPayload } from '.';
import { MailDecor, Text } from '../components';

ContactEmail.PreviewProps = {
  fullName: 'Bartosz Art',
  email: 'bartosz.art@gmail.com',
  phone: '791-971-029',
  message:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dolorem, deleniti aut voluptatibus, quo labore corrupti aperiam architecto magnam fugiat porro in esse debitis rem iste laborum totam eligendi? Est iste velit repellat ab magni reprehenderit! Nemo reiciendis qui natus consectetur aliquid distinctio excepturi ea rem earum fuga quas voluptatibus, exercitationem veritatis aspernatur consequuntur at, iure dolores. Consectetur distinctio aperiam omnis temporibus. Iusto quia quos odio autem optio accusamus perspiciatis corporis vero, itaque soluta tempora modi nihil possimus. Consequuntur laborum voluptate sunt doloremque mollitia tempora veniam, corporis ut iste quos quam, suscipit saepe quaerat magni ea distinctio explicabo beatae tempore!',
};

export default function ContactEmail(payload: ContactEmailPayload) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily='Plus Jakarta Sans'
          fallbackFontFamily='Arial'
          webFont={{
            url: 'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yyghfvaZ-K5.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle='normal'
        />
      </Head>
      <Preview>Nowa wiadomość z formularza kontaktowego</Preview>

      <Body style={styles.body}>
        <Container>
          <MailDecor title='Formularz kontaktowy' />

          <Section style={styles.basicInfo}>
            <Text>
              <strong>Imię i nazwisko:</strong> {payload.fullName}
            </Text>

            <Text>
              <strong>Email:</strong>{' '}
              <Link href={`mailto:${payload.email}`} style={styles.link}>
                {payload.email}
              </Link>
            </Text>

            <Text>
              <strong>Telefon:</strong>{' '}
              {payload.phone ? (
                <Link href={`tel:${payload.phone}`} style={styles.link}>
                  {payload.phone}
                </Link>
              ) : (
                '-'
              )}
            </Text>
          </Section>

          <Section>
            <Text>
              <strong>Wiadomość:</strong>
            </Text>

            <Text>{payload.message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    fontFamily: '"Plus Jakarta Sans", Arial, sans-serif',
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  basicInfo: { marginBottom: '1rem' },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
};
