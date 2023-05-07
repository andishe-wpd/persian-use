const useHalfSpace = (str: string): string => {
  if (typeof str !== "string") {
    throw new TypeError("the input must be string");
  }

  const patterns = [
    [/\u00ad/g, "‌"],
    [/\u200C{2,}/g, "‌"],
    [/([۰-۹0-9إأةؤورزژاآدذ،؛,:«»\\/@#$٪×*()ـ\-=|])\u200c/g, "$1"],
    [/\u200c([\u064e\u0650\u064f\u064b\u064d\u064C\u0651\u06C0])/g, "$1"],
    [/\u200c([\w])/g, "$1"],
    [/([\w])\u200c/g, "$1"],
    [/\u200c([\n\s[].،«»:()؛؟?;$!@-=+\\])/g, "$1"],
    [/([\n\s[.،«»:()؛؟?;$!@\-=+\\])\u200c/g, "$1"],
    [/\s+\u200C|\u200C\s+/g, " "],
    [/((\s|^)ن?می)\u0020/g, "$1‌"],
    [/((\s|^)بی)\u0020/g, "$1‌"],
    [/\u0020((ام|ات|اش|ای|اید|ایم|اند)\s)/g, "‌$1"],
    [/\u0020(ها(ی)?\s)/g, "‌$1"],
    [/\u0020(تر((ی)|(ین))?\s)/g, "‌$1"],
    [/\u0020((هایی|هایم|هایت|هایش|هایمان|هایتان|هایشان)\s)/g, "‌$1"],
  ];

  let result = str;
  for (const [pattern, replacement] of patterns as [RegExp, string][]) {
    result = result.replace(pattern, replacement);
  }

  return result;
};

export default useHalfSpace;
