// merge class names with conditional rendering
export function clsx(...args: string[]): string {
  return args.filter(Boolean).join(" ");
}

// Utility function to format year and month
export function formatYearMonth(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  return `${year}-${month.toString().padStart(2, "0")}`; // Format as "YYYY-MM"
}
