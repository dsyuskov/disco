import axios from "axios";

export default async () => {
  const result = {
    totalSum: 0,
    entries: [],
  };
  await axios(`https://www.newlook.com/uk/json/cart/currentCart.json`).then(
    (response) => {
      result.totalSum = response.data.data.totalPrice.formattedValue;
      response.data.data.entries.forEach((item) => {
        result.entries.push({
          name: item.product.name,
          price: item.basePrice.formattedValue,
          totalPrice: item.totalPrice.formattedValue,
          sku: item.product.sku,
          quantity: item.quantity,
          photo: `https:${item.product.imageUrl}`,
        });
      });
    }
  );
  return result;
};
