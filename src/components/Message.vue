<template>
  <div class="message">{{message}}</div>
</template>

<script>
export default {
  name: "Message",
  props: ["message"]
};
</script>

<style scoped>
.message {
  border: 1px solid grey;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
}
</style>
