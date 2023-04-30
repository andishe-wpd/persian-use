import { useSpokenNumber } from "..";

describe("useSpokenNumber", () => {
  it("should useSpokenNumber single digits to words", () => {
    expect(useSpokenNumber("0")).toBe("صفر");
    expect(useSpokenNumber("1")).toBe("یک");
    expect(useSpokenNumber("9")).toBe("نه");
  });

  it("should useSpokenNumber two digits to words", () => {
    expect(useSpokenNumber("10")).toBe("ده");
    expect(useSpokenNumber("12")).toBe("دوازده");
    expect(useSpokenNumber("29")).toBe("بیست و نه");
  });

  it("should useSpokenNumber three digits to words", () => {
    expect(useSpokenNumber("100")).toBe("صد");
    expect(useSpokenNumber("210")).toBe("دویست و ده");
    expect(useSpokenNumber("999")).toBe("نه صد و نود و نه");
  });

  it("should useSpokenNumber decimal numbers to words", () => {
    expect(useSpokenNumber("123.456")).toBe(
      "صد و بیست و سه ممیز چهارصد و پنجاه و شش هزارم"
    );
    expect(useSpokenNumber("0.123")).toBe("صد و بیست و سه هزارم");
    expect(useSpokenNumber("123456789.3025")).toBe(
      "صد و بیست و سه  میلیون و چهارصد و پنجاه و شش  هزار و هفت صد و هشتاد و نه ممیز سه  هزار و بیست و پنج ده هزارم"
    );
  });

  it("should handle negative numbers", () => {
    expect(useSpokenNumber("-123")).toBe("منفی صد و بیست و سه");
    expect(useSpokenNumber("-0.123")).toBe("منفی صد و بیست و سه هزارم");
  });

  it("should handle percentages", () => {
    expect(useSpokenNumber("25%")).toBe("بیست و پنج درصد");
    expect(useSpokenNumber("0.5%")).toBe("پنج دهم درصد");
  });

  it("should handle large numbers", () => {
    expect(useSpokenNumber("123456789012345678901234567890")).toBe(
      "صد و بیست و سه  کادریلیارد و چهارصد و پنجاه و شش  کوآدریلیون و هفت صد و هشتاد و نه  تریلیارد و دوازده  تریلیون و سیصد و چهل و پنج  بیلیارد و شش صد و هفتاد و هشت  بیلیون و نه صد و یک  میلیارد و دویست و سی و چهار  میلیون و پانصد و شصت و هفت  هزار و هشت صد و نود"
    );
  });
});
