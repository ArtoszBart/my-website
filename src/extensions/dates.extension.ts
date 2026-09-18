declare global {
  interface Date {
    toMonthYear(): string;
  }
}

Date.prototype.toMonthYear = function (): string {
  const month = String(this.getMonth() + 1).padStart(2, '0');
  const year = this.getFullYear();

  return `${month}/${year}`;
};

export {};
