<template>
  <div>
    <p>{{ company }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data: () => {
    return {
      company: "Disco!"
    };
  },
  mounted() {
    browser.runtime.sendMessage({});
  },
  created() {
    // this.company = "Hello Disco";
    console.log("app started");
    axios("https://www.newlook.com/uk/json/cart/currentCart.json").then(
      response => {
        this.company = response.data.data.entries.length;
        console.log("this.company", this.company);
      }
    );
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    }
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
