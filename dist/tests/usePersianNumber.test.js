"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe("useSpokenNumber", () => {
    it("should useSpokenNumber single digits to words", () => {
        expect((0, __1.useSpokenNumber)("0")).toBe("صفر");
        expect((0, __1.useSpokenNumber)("1")).toBe("یک");
        expect((0, __1.useSpokenNumber)("9")).toBe("نه");
    });
    it("should useSpokenNumber two digits to words", () => {
        expect((0, __1.useSpokenNumber)("10")).toBe("ده");
        expect((0, __1.useSpokenNumber)("12")).toBe("دوازده");
        expect((0, __1.useSpokenNumber)("29")).toBe("بیست و نه");
    });
    it("should useSpokenNumber three digits to words", () => {
        expect((0, __1.useSpokenNumber)("100")).toBe("صد");
        expect((0, __1.useSpokenNumber)("210")).toBe("دویست و ده");
        expect((0, __1.useSpokenNumber)("999")).toBe("نه صد و نود و نه");
    });
    it("should useSpokenNumber decimal numbers to words", () => {
        expect((0, __1.useSpokenNumber)("123.456")).toBe("صد و بیست و سه ممیز چهارصد و پنجاه و شش هزارم");
        expect((0, __1.useSpokenNumber)("0.123")).toBe("صد و بیست و سه هزارم");
        expect((0, __1.useSpokenNumber)("123456789.3025")).toBe("صد و بیست و سه  میلیون و چهارصد و پنجاه و شش  هزار و هفت صد و هشتاد و نه ممیز سه  هزار و بیست و پنج ده هزارم");
    });
    it("should handle negative numbers", () => {
        expect((0, __1.useSpokenNumber)("-123")).toBe("منفی صد و بیست و سه");
        expect((0, __1.useSpokenNumber)("-0.123")).toBe("منفی صد و بیست و سه هزارم");
    });
    it("should handle percentages", () => {
        expect((0, __1.useSpokenNumber)("25%")).toBe("بیست و پنج درصد");
        expect((0, __1.useSpokenNumber)("0.5%")).toBe("پنج دهم درصد");
    });
    it("should handle large numbers", () => {
        expect((0, __1.useSpokenNumber)("123456789012345678901234567890")).toBe("صد و بیست و سه  کادریلیارد و چهارصد و پنجاه و شش  کوآدریلیون و هفت صد و هشتاد و نه  تریلیارد و دوازده  تریلیون و سیصد و چهل و پنج  بیلیارد و شش صد و هفتاد و هشت  بیلیون و نه صد و یک  میلیارد و دویست و سی و چهار  میلیون و پانصد و شصت و هفت  هزار و هشت صد و نود");
    });
});
//# sourceMappingURL=usePersianNumber.test.js.map