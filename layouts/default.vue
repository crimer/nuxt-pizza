<template>
  <div>
    <Header />
    <nuxt />
    <ToTopButton text="На верх"/>
  </div>
</template>

<script>
import Header from "~~/components/Header.vue";
import ToTopButton from "~~/components/ToTopButton.vue";

export default {
  name: "DefaultLayout",
  components: { Header, ToTopButton },
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

<style lang="scss"></style>
