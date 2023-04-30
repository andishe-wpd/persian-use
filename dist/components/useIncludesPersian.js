"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useIncludesPersian = (str) => {
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 0x0600 && charCode <= 0x06ff) {
            // The character is in the Persian Unicode range
            return true;
        }
    }
    // No Persian characters were found
    return false;
};
exports.default = useIncludesPersian;
//# sourceMappingURL=useIncludesPersian.js.map