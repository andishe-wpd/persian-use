"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usePurePersian = (str) => {
    if (/^[\u0600-\u06FF\s]+$/.test(str)) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = usePurePersian;
//# sourceMappingURL=UsePurePersian.js.map