<template>
  <div class="pizza">
    <img
      src="@/assets/img/pizzas/peperoni.jpg"
      class="pizza__image"
      alt="Пеперони пицца"
    />
    <p class="pizza__name">Пеперони</p>
    <div class="pizza__options">
      <div class="pizza__options-row dough-options">
        <span class="selected-option">тонкое</span>
        <span>толстое</span>
      </div>
      <div class="pizza__options-row radius-options">
        <span class="selected-option">25см</span>
        <span>30см</span>
        <span>35см</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaCard'
};
</script>

<style lang="scss">
.pizza{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 0 1 25%;
  &__image{
    width: 250px;
  }
  &__name{
    font-size: 20px;
  }
  &__options{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 7px;
    background-color: #eee;
    border-radius: 7px;
    &-row{
      width: 100%;
      font-weight: 600;
      display: flex;
      flex-direction: row;

      height: 40px;
      &:not(:last-child){
        margin-bottom: 7px;
      }
      span {
        flex: 1 1 auto;
        border-radius: 7px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        &.selected-option {
          background-color: white;
        }
        &:not(:last-child){
          margin-right: 7px;
        }
      }
    }
  }
}
</style>
