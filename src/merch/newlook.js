import axios from "axios";

export default () => {
  const products = [];
  axios("https://www.newlook.com/uk/json/cart/currentCart.json").then(
    (response) => {
      response.data.data.entries.forEach((item) => {
        products.push({
          name: item.product.name,
          price: item.basePrice.formattedValue,
          totalPrice: item.totalPrice.formattedValue,
          sku: item.product.sku,
          quantity: item.quantity,
          photo: "https:" + item.product.imageUrl,
        });
      });
    }
  );
  return products;
};
