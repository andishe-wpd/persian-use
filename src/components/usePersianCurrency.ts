const usePersianCurrency = () => {
  fetch(
    "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=IRR"
  )
    .then((response) => response.text())
    .then((html) => {
      const regex = /\d+\.\d{2}/; // regular expression to extract exchange rate
      const match = html.match(regex);
      if (match) {
        const rate = match[0];
        // console.log(`1 USD = ${rate} IRR`);
        return rate;
      } else {
        console.log("Unable to extract exchange rate from response HTML");
      }
    })
    .catch((error) => {
      console.error("Error fetching exchange rate:", error);
    });
};

export default usePersianCurrency;
