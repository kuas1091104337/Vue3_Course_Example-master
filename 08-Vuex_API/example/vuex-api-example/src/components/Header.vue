<script>
// vuex 操作
// import { computed } from "vue";
// import { useStore } from "vuex";
// vuex + composition-api 操作
import { useMenuHandle } from '@/composition-api/useMenuHandle.js';
export default {
  setup(){
    // vuex 操作 2
    // const store = useStore(),
    //               isOpen = computed(() => store.getters.isOpen),
    //               isLogin = computed(() => store.getters.isLogin),
    //               menuHandle = () => {
    //                 store.dispatch('menuHandleActions');
    //                 isOpen.value && isLogin.value && (store.dispatch('loginHandleActions'))
    //               },
    //               loginHandle = () => {
    //                 store.dispatch('loginHandleActions');
    //                 isOpen.value && isLogin.value && (store.dispatch('menuHandleActions'))
    //               };
                  // vuex 操作 1
                  // menuHandle = () => store.dispatch('menuHandleActions',!isOpen.value),
                  // loginHandle = () => store.dispatch('loginHandleActions', !isLogin.value);
    // return { menuHandle, loginHandle };
    // vuex + composition-api 操作
    const { isOpen, isLogin, stateHandle } = useMenuHandle();
    return { isOpen, isLogin, stateHandle };
  },
}
</script>

<template>
  <header class="head">
    <nav class="head_nav">
      <!-- vuex 操作 -->
      <!-- <a class="head_nav_a" @click="stateHandle('menuHandleActions',!isOpen)">Menu</a>
        <a class="head_nav_a" @click="stateHandle('loginHandleActions',!isLogin)">Login</a> -->
      <!-- <a class="head_nav_a" @click="menuHandle">Menu</a>
      <a class="head_nav_a" @click="loginHandle">Login</a> -->
      <!-- vuex + composition-api 操作 -->
      <a class="head_nav_a" @click="stateHandle('menuHandleActions')">Menu</a>
      <a class="head_nav_a" @click="stateHandle('loginHandleActions')">Login</a>
      <!-- <a class="head_nav_a" @click="stateHandle('menuHandleActions',!isOpen && isLogin && true)">Menu</a>
      <a class="head_nav_a" @click="stateHandle('loginHandleActions',!isLogin && isOpen && true)">Login</a> -->
    </nav>
  </header>
</template>

<style lang="scss">
.head{
  color: #fff;
  line-height: 44px;
  width: 100%;
  background-color:#42b983;
  position:fixed;
  top:0;
  left:0;
  z-index:1;
  &_nav{
    padding: 0 30px;
    display: flex;
    &_a{
      padding: 0 15px;
      &:hover{
        background-color:#787878;
      }
    }
  }
}
</style>