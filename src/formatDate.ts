export type DateFormat = "YYYY-MM-DD" | "DD/MM/YYYY";

/**
 * แปลงวันที่จาก format หนึ่งไปอีก format หนึ่ง
 */
export function formatDate(
  dateStr: string,
  fromFormat: DateFormat,
  toFormat: DateFormat
): string {
  let year: string, month: string, day: string;

  if (fromFormat === "YYYY-MM-DD") {
    [year, month, day] = dateStr.split("-");
  } else if (fromFormat === "DD/MM/YYYY") {
    [day, month, year] = dateStr.split("/");
  } else {
    throw new Error("Unsupported fromFormat");
  }

  if (toFormat === "YYYY-MM-DD") {
    return `${year}-${month}-${day}`;
  }
  if (toFormat === "DD/MM/YYYY") {
    return `${day}/${month}/${year}`;
  }

  throw new Error("Unsupported toFormat");
}
