const usePersianDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return date.toLocaleDateString("fa-IR", options);
};

// Example usage
// const gregorianDate = new Date();
// const persianDate = getPersianDate(gregorianDate);
// console.log(persianDate); // outputs e.g. "یکشنبه، ۱۷ اردیبهشت ۱۴۰۲"
export default usePersianDate