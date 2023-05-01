"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usePersianDate = (date) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };
    return date.toLocaleDateString("fa-IR", options);
};
exports.default = usePersianDate;
//# sourceMappingURL=usePersianDate.js.map