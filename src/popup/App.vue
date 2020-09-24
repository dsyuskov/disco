<template>
  <div>
    <div v-if="isPartner">
      <div v-if="basket.entries.length > 0" class="container">
        <Product
          class="container__product"
          v-for="item in basket.entries"
          v-bind:product="item"
          v-bind:key="item.sku"
        />
      </div>
      <Message v-else v-bind:message="message" />
    </div>
    <Message v-else message="Этот сайт не является партнером приложения" />
    <div v-if="basket.entries.length > 0" class="total-sum">
      Total sum: {{ basket.totalSum }}
    </div>
  </div>
</template>

<script>
import stores from "../merchants/index";
import Product from "@/components/Product.vue";
import Message from "@/components/Message.vue";

export default {
  name: "App",
  components: { Product, Message },
  data: () => {
    return {
      basket: {
        totalSum: 0,
        entries: [],
      },
      isPartner: false,
      isLoading: false,
    };
  },
  computed: {
    message() {
      if (this.isLoading) {
        return "Минутку...";
      } else {
        return "Ваша корзина пуста";
      }
    },
  },
  created() {
    chrome.extension.sendMessage("getUrl", async (back) => {
      const url = back[0].url;
      for (let key in stores) {
        if (url.includes(stores[key].domain)) {
          this.isPartner = true;
          this.isLoading = true;
          this.basket = await stores[key].products();
          this.isLoading = false;
          break;
        }
      }
    });
  },
};
</script>

<style>
html {
  box-sizing: border-box;
  padding: 10px;
  width: 550px;
}

.container {
  box-sizing: border-box;
  max-height: 320px;
  overflow-y: scroll;
  padding-right: 10px;
  width: 100%;
}

.container__product {
  margin-bottom: 5px;
}

.total-sum {
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px;
}
</style>
