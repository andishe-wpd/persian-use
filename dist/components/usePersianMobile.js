"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usePersianNumber_1 = require("./usePersianNumber");
function usePersianMobile(phoneNumber) {
    // recive english and persian number but convert and validate it in english
    let number = (0, usePersianNumber_1.convertPeToEn)(phoneNumber);
    // Check if the input is a string
    if (typeof number !== "string") {
        console.error("Phone number must be a string");
        return false;
    }
    // Remove any leading or trailing white space
    number = number.trim();
    // Check if the number starts with an optional '+' sign followed by '98' or '0'
    if (!/^(\+?98|0)?/.test(number)) {
        console.error("Phone number must start with +98 or 0");
        return false;
    }
    // Check if the number has the required number of digits after the optional prefix
    if (!/^(\+?98|0)?9\d{9}$/.test(number)) {
        console.error("Phone number must have 11 digits after the prefix");
        return false;
    }
    // The number is valid
    return true;
}
exports.default = usePersianMobile;
//# sourceMappingURL=usePersianMobile.js.map