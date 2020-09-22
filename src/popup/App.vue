<template>
  <div>
    {{url}}
    <Product v-for="product in products" v-bind:product="product" v-bind:key="product.sku" />
  </div>
</template>

<script>
import newlook from "../merch/newlook";
import joules from "../merch/joules";
import currys from "../merch/currys";
import Product from "@/components/product.vue";

export default {
  name: "App",
  components: { Product },
  data: () => {
    return {
      products: [],
      url: null
    };
  },
  created() {
    chrome.extension.sendMessage("getUrl", back => {
      const url = back[0].url;
      this.url = url;
      if (url.includes("newlook.com")) {
        this.products = newlook();
      }
      if (url.includes("joules.com")) {
        this.products = joules();
      }
      if (url.includes("currys.co.uk")) {
        this.products = currys();
      }
    });
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
