<template>
  <div>
    <section class="slider-section">
      <client-only>
        <swiper
          class="swiper"
          ref="mySwiper"
          :options="swiperOption"
          auto-update
          auto-destroy
          delete-instance-on-destroy
          cleanup-styles-on-destroy
        >
          <swiper-slide class="swiper__slide slide_1">
            <div class="container slide-content">
              <h1 class="swiper__title">Лучшая пицца</h1>
              <p class="swiper__text">
                Испытайте вкус идеальной пиццы в Nuxt-pizza, одном из лучших
                ресторанов!
              </p>
              <a class="swiper__btn-menu" @click="scrollTo('menu')">
                посмотреть меню
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper__slide slide_2">
            <div class="container slide-content">
              <h1 class="swiper__title">Лучшая пицца</h1>
              <p class="swiper__text">
                Испытайте вкус идеальной пиццы в Nuxt-pizza, одном из лучших
                ресторанов!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper__slide slide_3">
            <div class="container slide-content">
              <h1 class="swiper__title">Акции, скидки и бонусы</h1>
              <p class="swiper__text">
                Испытайте вкус идеальной пиццы в Nuxt-pizza, одном из лучших
                ресторанов!
              </p>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </client-only>
    </section>

    <section class="products-section">
      <div class="container">
        <CategoriesList />
        <h1 ref="menu">🍕 Пицца</h1>
        <div class="pizza-list">
          <PizzaCard
            v-for="(pizza, i) in pizzas"
            :key="i"
            :pizza="pizza"
            :pizzaSizes="pizzaSizes"
            :pizzaDoughs="pizzaDoughs"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import PizzaCard from "~~/components/products/PizzaCard.vue";
import CategoriesList from "~~/components/CategoriesList.vue";
import { mapState } from "vuex";

export default {
  components: {
    PizzaCard,
    CategoriesList
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
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    ...mapState(["pizzas", "pizzaSizes", "pizzaDoughs"]),
  },
  methods: {
    scrollTo(anchor) {
      const el = this.$refs[anchor];
      const top = el.offsetTop;
      window.scrollTo(0, top);
    }
  },

};
</script>

<style lang="scss">
.products-section {
  padding: 20px 0;
}
.swiper {
  height: 80vh;
  &__slide {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $white-color;
    .slide-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &.slide_1 {
      background-image: url("~assets/img/slider/slide_1.jpg");
    }
    &.slide_2 {
      background-image: url("~assets/img/slider/slide_2.jpg");
    }
    &.slide_3 {
      background-image: url("~assets/img/slider/slide_3.jpg");
    }
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
