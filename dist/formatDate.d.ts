export type DateFormat = "YYYY-MM-DD" | "DD/MM/YYYY";
/**
 * แปลงวันที่จาก format หนึ่งไปอีก format หนึ่ง
 */
export declare function formatDate(dateStr: string, fromFormat: DateFormat, toFormat: DateFormat): string;
