import { Container, Heading } from '@react-email/components';
import MailDecorLine from './MailDecorLine';

export default function MailDecor({ title }: { title: string }) {
  return (
    <Container style={styles.container}>
      <table cellPadding='0' cellSpacing='0' border={0}>
        <tbody>
          <tr>
            <td>
              <MailDecorLine size='xl' color='purple' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='m' color='gray' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='xs' color='gray' />
            </td>
          </tr>
        </tbody>
      </table>

      <table cellPadding='0' cellSpacing='0' border={0} style={styles.line}>
        <tbody>
          <tr>
            <td>
              <MailDecorLine size='xxl' color='orange' />
            </td>
          </tr>
        </tbody>
      </table>

      <table cellPadding='0' cellSpacing='0' border={0} style={styles.line}>
        <tbody>
          <tr>
            <td>
              <MailDecorLine size='m' color='green' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='xs' color='gray' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='s' color='gray' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='l' color='green' />
            </td>
          </tr>
        </tbody>
      </table>

      <table cellPadding='0' cellSpacing='0' border={0} style={styles.line}>
        <tbody>
          <tr>
            <td>
              <MailDecorLine size='xl' color='purple' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='l' color='gray' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='xs' color='gray' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='xxl' color='purple' />
            </td>
          </tr>
        </tbody>
      </table>

      <Heading style={styles.title}>{title}</Heading>

      <table cellPadding='0' cellSpacing='0' border={0}>
        <tbody>
          <tr>
            <td>
              <MailDecorLine size='xl' color='green' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='xs' color='gray' />
            </td>
          </tr>
        </tbody>
      </table>

      <table cellPadding='0' cellSpacing='0' border={0} style={styles.line}>
        <tbody>
          <tr>
            <td>
              <MailDecorLine size='l' color='green' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='s' color='orange' />
            </td>
            <td width='8' />
            <td>
              <MailDecorLine size='xxl' color='purple' />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

const styles = {
  container: {
    marginBottom: '2rem',
  },
  line: { marginTop: '6px' },
  title: { marginTop: '0.7rem', marginBottom: '0.7rem' },
};
