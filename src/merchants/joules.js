import axios from "axios";

export default async () => {
  const result = {
    totalSum: 0,
    entries: [],
  };
  await axios(`https://www.joules.com/cart`).then((response) => {
    const parser = new DOMParser();
    const document = parser.parseFromString(response.data, "text/html");
    (result.totalSum = document
      .querySelector(".subtotal-summary h3")
      .textContent.trim()),
      document.querySelectorAll(".sku-value").forEach((item) => {
        result.entries.push({
          name: item.nextElementSibling
            .querySelector(".basket-details h5 a")
            .textContent.trim(),
          quantity: item.nextElementSibling.querySelector(".qty").value,
          price: item.nextElementSibling
            .querySelector(".item-price")
            .textContent.trim(),

          totalPrice: item.nextElementSibling
            .querySelector(".subtotal-value")
            .textContent.trim(),
          sku: item.textContent.trim(),
          photo: `https:${
            JSON.parse(
              item.nextElementSibling
                .querySelector(".product-image")
                .getAttribute("data-media")
            )["71"]
          }`,
        });
      });
  });
  return result;
};
