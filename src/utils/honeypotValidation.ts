import { HONEYPOT_FIELD_NAMES } from '@/components/Form/components/Honeypots';

export function isHoneypotTriggered(data: Record<string, unknown>): boolean {
  const triggeredField = HONEYPOT_FIELD_NAMES.find((fieldName) => {
    const value = data[fieldName];
    return typeof value === 'string' && value.trim() !== '';
  });

  if (triggeredField) {
    console.warn('BOT DETECTED:', triggeredField, data[triggeredField]);
    return true;
  }

  return false;
}
