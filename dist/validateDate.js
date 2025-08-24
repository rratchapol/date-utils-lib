"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = isValidDate;
/**
 * ตรวจสอบความถูกต้องของวันที่
 */
function isValidDate(dateStr, format) {
    let year, month, day;
    try {
        if (format === "YYYY-MM-DD") {
            [year, month, day] = dateStr.split("-").map(Number);
        }
        else {
            [day, month, year] = dateStr.split("/").map(Number);
        }
    }
    catch {
        return false;
    }
    const date = new Date(year, month - 1, day);
    return (date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day);
}
