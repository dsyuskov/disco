<template>
  <div>
    <Product v-for="product in products" v-bind:product="product" v-bind:key="product.sku" />
  </div>
</template>

<script>
import axios from "axios";
// import newlook from "../newlook.json";
import Product from "@/components/product.vue";

export default {
  name: "App",
  components: { Product },
  data: () => {
    return {
      products: [],
      result: null
    };
  },
  created() {
    axios("https://www.newlook.com/uk/json/cart/currentCart.json").then(
      response => {
        console.log(response);
        response.data.data.entries.forEach(item => {
          console.log("item", item);
          this.products.push({
            name: item.product.name,
            price: item.basePrice.formattedValue,
            totalPrice: item.totalPrice.formattedValue,
            sku: item.product.sku,
            quantity: item.quantity,
            photo: "https:" + item.product.imageUrl
          });
        });
      }
    );
  }
};
</script>

<style>
html {
  box-sizing: border-box;
  padding: 10px;
  width: 500px;
  height: 400px;
}
</style>
