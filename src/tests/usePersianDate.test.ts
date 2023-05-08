import { usePersianDate } from "..";

describe("usePersianDate", () => {
  it("returns a valid Persian date string", () => {
    // Define a test date for Tehran timezone (UTC+4:30)
    const testDateTehran = new Date("2023-05-01T15:30:00+04:30");
    // Define the expected Persian date string for Tehran timezone
    const expectedStringTehran = "۱۴۰۲ اردیبهشت ۱۱, دوشنبه، ساعت ۱۴:۳۰";
    // Call the `usePersianDate` function with the test date in Tehran timezone
    const persianDateStringTehran = usePersianDate(testDateTehran);
    // Test that the result matches the expected Persian date string for Tehran timezone
    expect(persianDateStringTehran).toEqual(expectedStringTehran);
  });
});
