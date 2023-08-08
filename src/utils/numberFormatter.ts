export default function ThousandSeparator(number: string): string {
  const parts = number.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
