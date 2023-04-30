import {usePersianDate} from '..';

describe('usePersianDate', () => {
  it('returns a valid Persian date string', () => {
    // Define a test date
    const testDate = new Date("2023-05-01T15:30:00Z");
    // Define the expected Persian date string
    const expectedString = "۱۴۰۲ اردیبهشت ۱۱, دوشنبه، ساعت ۱۹:۰۰";
    // Call the `usePersianDate` function with the test date
    const persianDateString = usePersianDate(testDate);
    // Test that the result matches the expected Persian date string
    expect(persianDateString).toEqual(expectedString);
  });
});