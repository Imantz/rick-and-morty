export function formatDateToYYYYDDMM(date: string | Date): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${day}-${month}`;
}
