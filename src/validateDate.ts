/**
 * ตรวจสอบความถูกต้องของวันที่
 */
export function isValidDate(
  dateStr: string,
  format: "YYYY-MM-DD" | "DD/MM/YYYY"
): boolean {
  let year: number, month: number, day: number;

  try {
    if (format === "YYYY-MM-DD") {
      [year, month, day] = dateStr.split("-").map(Number);
    } else {
      [day, month, year] = dateStr.split("/").map(Number);
    }
  } catch {
    return false;
  }

  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}
