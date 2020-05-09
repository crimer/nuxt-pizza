<template>
  <transition name="toTopFade">
    <div
      class="toTopButton"
      :style="`bottom: ${bottom}; right: ${right};`"
      v-show="visible"
      @click="backToTop"
    >
      <slot name="default">
        <span>{{ text }}</span>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ToTopButton",
  props: {
    text: {
      type: String,
      default: "To Top"
    },
    bottom: {
      type: String,
      default: "40px"
    },
    right: {
      type: String,
      default: "60px"
    },
  },
  data() {
    return {
      visible: false
    };
  },

  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener("scroll", this.isVisible);
  },
  destroyed() {
    window.removeEventListener("scroll", this.isVisible);
  },
  methods: {
    isVisible(){
      return window.scrollY >= 200 ? this.visible = true : this.visible = false
    },
    backToTop() {
      window.smoothscroll();
    }
  }
};
</script>

<style lang="scss">
.toTopButton {
  position: fixed;
  width: 80px;
  height: 45px;
  font-size: 17px;
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.4);
  border-radius: 100px;
  cursor: pointer;
  z-index: 9999;
  background-color: $main-orange-color;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: $white-color;
  }
}
.toTopFade-enter-active,
.toTopFade-leave-active {
  transition: opacity 0.4s;
}
.toTopFade-enter,
.toTopFade-leave-to {
  opacity: 0;
}
</style>
