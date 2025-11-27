# date-utils-lib
https://www.npmjs.com/package/date-utils-lib

## English

**date-utils-lib** is a simple utility library for formatting, validating, and manipulating dates in JavaScript/TypeScript projects.

### Installation
```bash
npm install date-utils-lib
```

### Usage Example
```typescript
import { formatDate, isValidDate, addDays } from "date-utils-lib";

console.log(formatDate("2025-08-24", "YYYY-MM-DD", "DD/MM/YYYY"));
// "24/08/2025"

console.log(isValidDate("2025-02-29", "YYYY-MM-DD"));
// false

console.log(addDays("2025-08-24", 7));
// "2025-08-31"
```

### Features
- Format dates between different formats
- Validate date strings
- Add days to a date

---

### Developer
rratchapol

### git Repository
https://github.com/rratchapol/date-utils-lib.git

## ภาษาไทย

**date-utils-lib** คือไลบรารีสำหรับจัดการวันที่ใน JavaScript/TypeScript ใช้งานง่าย ครอบคลุมทั้งการแปลงรูปแบบวันที่ ตรวจสอบความถูกต้อง และบวกวัน

### วิธีติดตั้ง
```bash
npm install date-utils-lib
```

### ตัวอย่างการใช้งาน
```typescript
import { formatDate, isValidDate, addDays } from "date-utils-lib";

console.log(formatDate("2025-08-24", "YYYY-MM-DD", "DD/MM/YYYY"));
// "24/08/2025"

console.log(isValidDate("2025-02-29", "YYYY-MM-DD"));
// false (29 ก.พ. 2025 ไม่มีจริง)

console.log(addDays("2025-08-24", 7));
// "2025-08-31"
```

### คุณสมบัติ
- แปลงรูปแบบวันที่
- ตรวจสอบความถูกต้องของวันที่
- บวกจำนวนวันให้กับวันที่


### โครงสร้างของไลบรารี
```typescript
date-utils-lib/
 ├─ src/
 │   ├─ index.ts
 │   ├─ formatDate.ts
 │   ├─ validateDate.ts
 │   ├─ addDays.ts
 ├─ package.json
 ├─ tsconfig.json
 ├─ README.md
 ├─ .gitignore
 ```

 ### ผู้พัฒนา
rratchapol

### git Repository
https://github.com/rratchapol/date-utils-lib.git
