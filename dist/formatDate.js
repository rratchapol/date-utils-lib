"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
/**
 * แปลงวันที่จาก format หนึ่งไปอีก format หนึ่ง
 */
function formatDate(dateStr, fromFormat, toFormat) {
    let year, month, day;
    if (fromFormat === "YYYY-MM-DD") {
        [year, month, day] = dateStr.split("-");
    }
    else if (fromFormat === "DD/MM/YYYY") {
        [day, month, year] = dateStr.split("/");
    }
    else {
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
