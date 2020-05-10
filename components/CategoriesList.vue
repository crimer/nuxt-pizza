<template>
  <div class="categories">
    <ul class="categories__list">
      <li class="categories__item">🍕 Пицца</li>
      <li class="categories__item">🍟 Закуски</li>
      <li class="categories__item">🍹 Напитки</li>
      <li class="categories__item">🍶 Соусы</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoriesList',
};
</script>

<style lang="scss">
.categories{
  width: 100%;
  // padding: 20px 0;
  height: 40px;
  &__list{
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    height: inherit;
  }
  &__item{
    font-size: 20px;
    cursor: pointer;
    transition: all .3 ease;
    &:not(:last-child){
      margin-right: 25px;
    }
    // &:hover{
      // font-size: 22px;
      // zoom: 1.3;
    // }
  }
}
</style>
