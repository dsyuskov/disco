import axios from "axios";

export default () => {
  const products = [];
  axios("https://www.joules.com/cart").then((response) => {
    const parser = new DOMParser();
    const document = parser.parseFromString(response.data, "text/html");
    document.querySelectorAll(".sku-value").forEach((item) => {
      products.push({
        name: item.nextElementSibling
          .querySelector(".basket-details h5 a")
          .textContent.trim(),
        quantity: item.nextElementSibling.querySelector(".qty").value,
        price: item.nextElementSibling.querySelector(".item-price").textContent,
        totalPrice: item.nextElementSibling
          .querySelector(".subtotal-value")
          .textContent.trim(),
        sku: item.textContent.trim(),
        photo:
          "https:" +
          JSON.parse(
            item.nextElementSibling
              .querySelector(".product-image")
              .getAttribute("data-media")
          )["71"],
      });
    });
  });
  return products;
};
