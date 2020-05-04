<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <img src="@/assets/svg/logo.svg" alt="Logo" />
        </div>
        <div class="header__nav">
          <ul class="header__links">
            <li class="header__nav-item">
              <a class="header__nav-link" href="">Home</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="">About</a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>
<style lang="scss">
.header {
  width: 100%;
  &__logo img {
    width: 300px;
    height: 76px;
  }
  &__inner {
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
  &__links {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  &__nav-item {
    display: inline-block;
    height: 100%;
    &:not(:first-child) {
      margin-left: 50px;
    }
  }
  &__nav-link {
    padding: 30px 0;
    text-decoration: none;
    font-size: 22px;
    font-weight: 600;
    transition: color 0.3s ease;
    &:hover {
      color: #e43f5a;
    }
  }
}
.container {
  margin: 0 auto;
  max-width: 70%;
}
</style>
