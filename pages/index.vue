<template>
  <div>
    <main class="hero">
      <div class="container">
        <div class="hero_inner">
          <h1 class="hero__title">Лучшая пицца</h1>
          <p class="hero__text">
            Испытайте вкус идеальной пиццы в Nuxt-pizza, одном из лучших ресторанов!
          </p>
          <a class="hero__btn-menu" @click="scrollTo('menu')">посмотреть меню</a>
        </div>
      </div>
    </main>
    <section class="products-section">
      <div class="container">
        <h1 ref="menu">Пицца</h1>
        <div class="pizza-list">
          <PizzaCard v-for="(pizza,i) in pizzas" :key="i" :pizza="pizza"
          :pizzaSizes="pizzaSizes" :pizzaDoughs="pizzaDoughs"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PizzaCard from "~~/components/products/PizzaCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    PizzaCard
  },
  async asyncData({ error, store }) {
    try {
      await store.dispatch("getAllPizzas");
      await store.dispatch("getPizzaSizes");
      await store.dispatch("getPizzasDough");
    } catch (err) {
      console.log(err);
      return error({
        statusCode: 404,
        message: "Пиццы не найдены или сервер не доступен"
      });
    }
  },
  computed: {
    ...mapState(["pizzas","pizzaSizes","pizzaDoughs"])
  },
  methods: {
    scrollTo(anchor){
      const el = this.$refs[anchor];
      const top = el.offsetTop;
      window.scrollTo(0,top);
    }
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 70%;
}
.products-section{
  padding: 20px 0;
}
.hero {
  height: 70vh;
  background-image: url("~assets/img/hero.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  color: $white-color;
  .container {
    margin: 0 auto;
    min-width: 70%;
  }
  &__inner {
    min-width: 70%;
  }
  &__title {
    text-transform: uppercase;
    font-size: 70px;
    margin: 0 0 30px 0;
  }
  &__text {
    width: 380px;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 1.3;
  }
  &__btn-menu {
    color: black;
    background-color: $yellow-color;
    user-select: none;
    width: 240px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: darken($color: $yellow-color, $amount: 20);
    }
  }
}

.pizza-list {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
