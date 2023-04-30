"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe("usePersianMobile", () => {
    it("should return true for valid Persian mobile numbers", () => {
        expect((0, __1.usePersianMobile)("09121234567")).toBe(true);
        expect((0, __1.usePersianMobile)("989121234567")).toBe(true);
        expect((0, __1.usePersianMobile)("+989121234567")).toBe(true);
    });
    it("should return true for valid English mobile numbers", () => {
        expect((0, __1.usePersianMobile)("09121234567")).toBe(true);
        expect((0, __1.usePersianMobile)("989121234567")).toBe(true);
        expect((0, __1.usePersianMobile)("+989121234567")).toBe(true);
    });
    it("should return false for invalid mobile numbers", () => {
        expect((0, __1.usePersianMobile)("12345")).toBe(false);
        expect((0, __1.usePersianMobile)("0912345678")).toBe(false);
        expect((0, __1.usePersianMobile)("+98912345678")).toBe(false);
        expect((0, __1.usePersianMobile)("+12")).toBe(false);
        expect((0, __1.usePersianMobile)("invalid")).toBe(false);
    });
    it("should convert Persian numbers to English numbers", () => {
        expect((0, __1.usePersianMobile)("۰۹۱۲۳۴۵۶۷۸۹")).toBe(true);
        expect((0, __1.usePersianMobile)("۹۸۹۱۲۳۴۵۶۷۸۹")).toBe(true);
        expect((0, __1.usePersianMobile)("+۹۸۹۱۲۳۴۵۶۷۸۹")).toBe(true);
    });
});
//# sourceMappingURL=usePersianMobile.test.js.map