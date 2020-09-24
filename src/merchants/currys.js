import axios from "axios";

export default async () => {
  const result = {
    totalSum: 0,
    entries: [],
  };
  await axios
    .post(`https://api.currys.co.uk/store/api/token`)
    .then(async (response) => {
      const bid = response.data.bid;
      await axios
        .get(`https://api.currys.co.uk/store/api/baskets/${bid}`)
        .then((response) => {
          (result.totalSum = new Intl.NumberFormat("en", {
            style: "currency",
            currency: response.data.payload.subtotalPrice.currency,
            currencyDisplay: "symbol",
          }).format(response.data.payload.subtotalPrice.amountWithVat / 100)),
            response.data.payload.products.forEach((item) => {
              result.entries.push({
                name: item.name,
                price: new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: item.price.currency,
                  currencyDisplay: "symbol",
                }).format(item.price.amountWithVat / 100),
                totalPrice: new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: item.price.currency,
                  currencyDisplay: "symbol",
                }).format(item.totalPrice.amountWithVat / 100),
                sku: item.sku,
                quantity: item.quantity,
                photo: item.image,
              });
            });
        });
    });

  return result;
};
