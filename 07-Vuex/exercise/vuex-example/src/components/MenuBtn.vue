<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore(),
          clickMenuHandle = () => store.dispatch('menuHandleAction');
    return { clickMenuHandle };
  }
};
</script>
<template>
  <a class="menuBtn" @click="clickMenuHandle">
    <i class="fas fa-bars fa-3x"></i>
  </a>
</template>
<style lang="scss" scoped>
a.menuBtn {
  cursor: pointer;
  position: absolute;
  color: #fff;
  z-index: 10;
  top: 50px;
  right: 50px;
}
</style>
