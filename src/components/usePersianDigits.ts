const usePersianDigits = (num: number | string): string => {
  let persianNum = num
    .toString()
    .replace(/[0-9]/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1728));

  return persianNum;
};

export default usePersianDigits;
