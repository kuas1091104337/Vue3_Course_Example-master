<script>
// import { computed } from "vue";
// import { useStore } from "vuex";
import { useMenuHandle } from '@/composition-api/useMenuHandle.js';
export default {
  setup(){
    // const store = useStore(),
    //       isOpen = computed(() => store.getters.isOpen),
    //       menuHandle = () => store.dispatch('menuHandleActions'),
    //       menuClose = () => store.dispatch('menuHandleActions',false);
    // return { isOpen, menuClose, menuHandle };
    const { isOpen, isLogin, stateHandle } = useMenuHandle();
    return { isOpen, isLogin, stateHandle };
  },
}
</script>

<template>
<!-- <div :class="['slidMenu',{active:isOpen}]">
  <a class="slidMenu_close" @click="menuHandle"></a> -->
  <!-- <a class="slidMenu_close" @click="menuClose"></a> -->
<div :class="['slidMenu',{active:isOpen}]">
  <a class="slidMenu_close" @click="stateHandle('menuHandleActions')"></a>
  <!-- <a class="slidMenu_close" @click="stateHandle('menuHandleActions',false)"></a> -->
  <nav class="slidMenu_nav">
    <a class="slidMenu_nav_a">ABOTU</a>
    <a class="slidMenu_nav_a">ADDRESS</a>
    <a class="slidMenu_nav_a">USER</a>
    <a class="slidMenu_nav_a">STRENGTH</a>
  </nav>
</div>
</template>

<style lang="scss">
.slidMenu{
  width: 350px;
  height: 100%;
  display: flex;
  background-color:#fff;
  position:fixed;
  top:0;
  right:0;
  z-index:1;
  transform:translate3d(100%,0,0);
  transition:transform .4s;
  &.active{transform:translate3d(0,0,0);}
  &_close{
    width: 44px;
    height: 44px;
    background-color:#42b983;
    border-radius: 50%;
    position:absolute;
    top:10px;
    right:10px;
    &:before, &:after{
      content:"";
      width: 70%;
      height: 4px;
      background-color:#fff;
      margin:auto;
      position:absolute;
      top:0;
      right:0;
      left:0;
      bottom:0;
    }
    &:before{transform:rotate(45deg);}
    &:after{transform:rotate(-45deg);}
  }
  &_nav{
    width: 100%;
    margin:auto;
    &_a{
      color: #666;
      line-height: 44px;
      display: block;
      padding: 0 20px;
      + .slidMenu_nav_a{ margin-bottom: 10px; }
    }
  }
}
</style>