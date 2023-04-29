const isPersian = (str: string) => {
  if (/^[\u0600-\u06FF\s]+$/.test(str)) {
    // The string consists only of Persian characters
    return true;
  } else {
    // The string contains non-Persian characters
    return false;
  }
};
