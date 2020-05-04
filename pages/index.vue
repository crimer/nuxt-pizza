<template>
  <div>
    <main class="hero">
      <div class="container">
        <div class="hero_inner">
          <h1 class="hero__title">PERFECT PIZZA</h1>
          <p class="hero__text">
            Experience the taste of a perfect pizza at PizzaHouse, one of the
            best restaurants!
          </p>
          <a class="hero__btn-menu">view our menu</a>
        </div>
      </div>
    </main>
    <section class="products-section">
      <div class="container">
        <h1>Пицца</h1>
        <div class="pizza-list">
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import PizzaCard from '@/components/products/PizzaCard.vue'
export default {
  components: {
    PizzaCard
  }
};
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  max-width: 70%;
}
.hero {
  height: 70vh;
  background-image: url("~assets/img/hero.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  color: white;
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
    background-color: #fee645;
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
    transition: background-color .3s ease;
    &:hover {
      background-color: darken($color: #fee645, $amount: 20);
    }
  }
}

.pizza-list{
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  // grid-auto-rows: ;
}
</style>
