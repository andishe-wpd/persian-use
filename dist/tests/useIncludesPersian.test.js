"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe("useIncludesPersian", () => {
    test("should return true for a string containing Persian characters", () => {
        expect((0, __1.useIncludesPersian)("سلام دنیا")).toBe(true);
    });
    test("should return false for a string not containing Persian characters", () => {
        expect((0, __1.useIncludesPersian)("Hello world")).toBe(false);
    });
});
//# sourceMappingURL=useIncludesPersian.test.js.map