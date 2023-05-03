# Persian-Use

A collection of useful utilities for Persian users written in JavaScript. This npm package includes the following utils:

### `useSpokenNumber`

This hook converts a given number to its written and spoken form in Persian.

```typescript
import { useSpokenNumber } from "persian-use";
const spokenNumber = useSpokenNumber(1234.56);
console.log(spokenNumber); // "یک هزار و دویست و سی و چهار ممیز پنجاه و شش صدم"
```

### `usePersianDate`

This hook converts a Gregorian date into a Jalali (Persian) date with full support of weekday and month names.

```typescript
import { usePersianDate } from "persian-use";
const gregorianDate = new Date();
const persianDate = usePersianDate(gregorianDate);
console.log(persianDate); // e.g. "یکشنبه، ۱۷ اردیبهشت ۱۴۰۲"
```

### `usePersianMobile`

This hook validates whether a given string is a valid Persian mobile phone number.

```typescript
import { usePersianMobile } from "persian-use";
const isValidMobileNumber = usePersianMobile("09123456789");
console.log(isValidMobileNumber);
// true  const
isInvalidMobileNumber = usePersianMobile("1234567890");
console.log(isInvalidMobileNumber); // false
```

### `usePersianCurrency`

The usePersianCurrency function is a custom hook that fetches the exchange rate of USD to IRR (Iranian Rial) from the xe.com website. The function uses a regular expression to extract the exchange rate from the HTML response and returns it.

```typescript
import usePersianCurrency from "persian-use/usePersianCurrency";

const exchangeRate = usePersianCurrency();
console.log(`1 USD = ${exchangeRate} IRR`);
```

### `UsePersianSlang (fohsh detector)`

UsePersianSlang is a simple utility function that takes in a string and checks if it contains any Persian slang words or not.

```typescript
import usePersianSlang from "use-persian-slang";

const string1 = "این یک جمله است";
const string2 = "این جمله حاوی کلمه بد است";

console.log(usePersianSlang(string1)); // false
console.log(usePersianSlang(string2)); // true
```

### `UsePersianToFinglish and UseFinglishToPersian`

UsePersianToFinglish and UseFinglishToPersian are two utility functions that allow you to convert Persian text to Finglish (Romanized Persian) and Finglish text to Persian, respectively.

```typescript
import {
  usePersianToFinglish,
  useFinglishToPersian,
} from "use-persian-finglish";

const persianText = "این یک متن فارسی است";
const finglishText = "in yek matn farsi ast";

console.log(usePersianToFinglish(persianText)); // "in yek matn farsi ast"
console.log(useFinglishToPersian(finglishText)); // "این یک متن فارسی است"
```

### `useConvertEnToPe`

This hook converts English digits in a string to Persian digits.

```typescript
import { useConvertEnToPe } from "persian-use";
const persianDigits = useConvertEnToPe("1234567890");
console.log(persianDigits); // "۱۲۳۴۵۶۷۸۹۰"
```

### `useconvertPeToEn`

This hook converts Persian digits in a string to English digits.

```typesctipt
import { useconvertPeToEn } from "persian-use";
const englishDigits = useconvertPeToEn("۱۲۳۴۵۶۷۸۹۰");
console.log(englishDigits);
```

### `usePurePersian`

This hook checks if a given string only includes Persian characters.

```typescript
import { usePurePersian } from "persian-use";
const hasOnlyPersianCharacters = usePurePersian("سلام");
console.log(hasOnlyPersianCharacters); // true
const hasEnglishCharacters = usePurePersian("Hello سلام");
console.log(hasEnglishCharacters); // false
```

### `useIncludesPersian`

This hook checks if a given string includes any Persian characters.

```typescript
import { useIncludesPersian } from "persian-use";
const hasPersianCharacters = useIncludesPersian("Hello سلام");
console.log(hasPersianCharacters); // true
```

## Installation

You can install the package using NPM:

bashCopy code

`npm install persian-use`

## Usage

To use any of the included utilities in your project, simply import the corresponding function from the package

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request or open an issue.

## Author

"Persian-Use" was created by Andishe Abbasian.

## License

This package is released under the [Unlicense](https://unlicense.org/), which is a public domain license. You are free to use, modify, and distribute this package however you like, with or without attribution.
