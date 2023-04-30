# Persian-Use

A collection of useful utilities for Persian users written in JavaScript. This npm package includes the following utils:

### `useIncludesPersian`

This hook checks if a given string includes any Persian characters.

```typescript
import { useIncludesPersian } from "persian-use";
const hasPersianCharacters = useIncludesPersian("Hello سلام");
console.log(hasPersianCharacters); // true
```

### `usePersianDate`

This hook converts a Gregorian date into a Jalali (Persian) date with full support of weekday and month names.

```typescript
import { usePersianDate } from "persian-use";
const gregorianDate = new Date();
const persianDate = usePersianDate(gregorianDate);
console.log(persianDate); // e.g. "یکشنبه، ۱۷ اردیبهشت ۱۴۰۲"
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

### `usePersianMobile`

This hook validates whether a given string is a valid Persian mobile phone number.

typescriptCopy code

```typescript
import { usePersianMobile } from "persian-use";
const isValidMobileNumber = usePersianMobile("09123456789");
console.log(isValidMobileNumber);
// true  const
isInvalidMobileNumber = usePersianMobile("1234567890");
console.log(isInvalidMobileNumber); // false
```

### `useSpokenNumber`

This hook converts a given number to its written and spoken form in Persian.

```typescript
import { useSpokenNumber } from "persian-use";
const spokenNumber = useSpokenNumber(1234.56);
console.log(spokenNumber); // "یک هزار و دویست و سی و چهار ممیز پنجاه و شش صدم"
```

### `useSliceNumber`

A function that converts large Persian numbers to a more readable format by adding commas as separators. For example, it converts 123456789 to 123,456,789.

```typescript
import { useSliceNumber } from "persian-use";
const moreReadable = useSliceNumber(123123);
console.log(moreReadable); // "123,123";
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
