<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
  name: "DefaultLayout",
  components:{Header},
  head() {
    const canonical = `https://nuxtPizza.com${this.$route.path
      .toLowerCase()
      .replace(/\/$/, "")}`;
    return {
      meta: [...this.meta],
      script: [],
      link: [{ rel: "canonical", href: canonical }]
    };
  },
  computed: {
    meta() {
      return [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no"
        },
        { hid: "description", name: "description", content: "Главная" }
      ];
    }
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
