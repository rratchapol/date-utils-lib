"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = addDays;
/**
 * บวกหรือลบวันจากวันที่
 */
function addDays(dateStr, days) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + days);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}
