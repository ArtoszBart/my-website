export function toCssIdent(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/^(\d)/, '_$1');
}
