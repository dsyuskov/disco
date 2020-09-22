import axios from "axios";

export default () => {
  const products = [];
  axios.post("https://api.currys.co.uk/store/api/token").then((response) => {
    const bid = response.data.bid;
    console.log(bid);
    axios
      .get(`https://api.currys.co.uk/store/api/baskets/${bid}`)
      .then((response) => {
        response.data.payload.products.forEach((item) => {
          products.push({
            name: item.name,
            price: new Intl.NumberFormat("en", {
              style: "currency",
              currency: item.price.currency,
              currencyDisplay: "symbol",
            }).format(item.price.amountWithVat),
            totalPrice: item.price.amountWithVat * item.quantity,
            sku: item.sku,
            quantity: item.quantity,
            photo: item.image,
          });
        });
      });
  });

  return products;
};
