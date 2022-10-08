<script>
// import { computed } from "vue";
// import { useStore } from "vuex";
import { useMenuHandle } from '@/composition-api/useMenuHandle.js';
export default {
  setup(){
    // const store = useStore(),
    //       isLogin = computed(() => store.getters.isLogin);
    // return { isLogin };
    const { isLogin } = useMenuHandle();
    return { isLogin };
  },
}
</script>

<template>
<div :class="['login',{active:isLogin}]">
  <h1>Login Page</h1>
</div>
</template>

<style lang="scss">
.login{
  width: 100%;
  height: 100%;
  display: flex;
  background-color:rgba(#000,.5);
  position:fixed;
  top:0;
  left:0;
  backdrop-filter:blur(5px);
  transform:translate3d(0,-100%,0);
  transition:transform .4s;
  &.active{transform:translate3d(0,0,0);}
  > h1{
    color: #666;
    font-size: 50px;
    text-align:center;
    line-height: 350px;
    width: 350px;
    height: 350px;
    background-color:#fff;
    box-shadow: 0 5px 20px 5px rgba(#000,.75);
    margin:auto;
  }
}
</style>