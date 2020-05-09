<template>
  <div class="pizza">
    <!-- v-lazy="pizzaImage" -->
    <!-- :src="pizzaImage" -->
    <img class="pizza__image" :src="pizzaImage" :alt="`${pizza.name} пицца`" />
    <p class="pizza__name">{{ pizza.name }}</p>
    <p class="pizza__price">{{ totalPrice }} &#8381;</p>
    <div class="pizza__options">
      <div class="pizza__options-row dough-options">
        <label :for="`${dough.type}-${pizza.id}`" :class="{'selected-option': doughIndex===selectedDoughId}"
                v-for="(dough,doughIndex) in pizzaDoughs"
                :key="doughIndex"
                @click="selectDough(doughIndex)">
          <span>{{ dough.name }} </span>

          <input type="radio" :id="`${dough.type}-${pizza.id}`" :value="dough.type" v-model="selectedDough"/>
        </label>
      </div>
      <div class="pizza__options-row radius-options">
        <label :for="`${size.type}-${pizza.id}`" :class="{'selected-option':sizeIndex===selectedSizeId}"
                v-for="(size,sizeIndex) in pizzaSizes"
                :key="sizeIndex"
                @click="selectSize(sizeIndex)">
          <span>{{ size.name }}</span>
          <input type="radio" :id="`${size.type}-${pizza.id}`" :value="size.type" v-model="selectedSize"/>
        </label>
      </div>
      <div class="pizza__options-row buttons-options">
        <button class="btn-addToCart">В корзину</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PizzaCard",
  props: {
    pizza: {
      type: Object,
      required: true
    },
    pizzaSizes:{
      type: Array,
    },
    pizzaDoughs:{
      type: Array,
    }
  },
  data() {
    return {
      selectedDoughId: 0,
      selectedSizeId: 0,
      selectedDough: '',
      selectedSize: '',
    };
  },
  computed: {
    pizzaImage() {
      if (!this.pizza.imgUrl) {
        return;
      }
      return require(`~~/assets/img/pizzas/${this.pizza.imgUrl}`);
    },
    totalPrice(){
      return this.pizza.price + this.pizzaSizes[this.selectedSizeId].price + this.pizzaDoughs[this.selectedDoughId].price;
    }
  },
  methods:{
    selectDough(doughIndex) {
      this.selectedDoughId = doughIndex
    },
    selectSize(sizeIndex) {
      this.selectedSizeId = sizeIndex
    }
  }
};
</script>

<style lang="scss">
.pizza {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 0 1 25%;
  &__price{
    font-size: 20px;
  }
  &__image {
    width: 250px;
    height: 250px;
  }
  &__name {
    font-size: 20px;
  }
  &__options {
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 7px;
    background-color: #eee;
    border-radius: 7px;
    &-row {
      width: 100%;
      font-weight: 600;
      display: flex;
      flex-direction: row;

      height: 40px;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
      .btn-addToCart {
        width: 100%;
        border-radius: 7px;
        outline: none;
        background-color: $main-orange-color;
        border: 0px;
        color: $white-color;
        font-size: 18px;
        cursor: pointer;
        &:active {
          background-color: darken($main-orange-color, 10);
        }
      }
      label {
        flex: 1 1 auto;
        border-radius: 7px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        cursor: pointer;

        input[type="radio"] {
          -webkit-appearance: none;
        }
        span{
          user-select: none;
        }
        &.selected-option {
          background-color: $white-color;
        }
        &:not(:last-child) {
          margin-right: 7px;
        }
      }
    }
  }
}
</style>
