<template>
  <div class="product">
    <img class="product__photo" :src="product.photo" :alt="product.name" />
    <div class="product__name">{{product.name}}({{product.sku}})</div>
    <div class="product__quantity">{{product.quantity}}</div>
    <div class="product__price">{{product.price}}</div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"]
};
</script>

<style scoped>
.product {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  border: 1px solid green;
}

.product__photo {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
</style>
