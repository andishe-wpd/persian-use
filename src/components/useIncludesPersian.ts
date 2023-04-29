const useIncludesPersian = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 0x0600 && charCode <= 0x06ff) {
      // The character is in the Persian Unicode range
      return true;
    }
  }
  // No Persian characters were found
  return false;
};

export default useIncludesPersian;
