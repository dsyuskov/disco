<template>
  <div class="product">
    <img class="product__photo" :src="product.photo" :alt="product.name" />
    <div class="product__details">
      <div class="product__name">{{product.name}}</div>
      <div class="product__details-inner">
        <div class="product__quantity-container">
          <div class="product__sku">sku: {{product.sku}}</div>
          <div class="product__quantity">Quantity: {{product.quantity}}</div>
        </div>
        <div class="product__price-container">
          <div class="product__price">Price: {{product.price}}</div>
          <div class="product__total-price">Total price: {{product.totalPrice}}</div>
        </div>
      </div>
    </div>
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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;

  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
}

.product__photo {
  box-sizing: border-box;
  width: auto;
  height: 90px;
  border-radius: 5px;
}

.product__details {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

.product__name {
  box-sizing: border-box;
  font-weight: bold;
  font-size: 14px;
}

.product__details-inner {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  height: 40px;
  margin-top: 10px;
}
.product__quantity-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product__price-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
</style>
