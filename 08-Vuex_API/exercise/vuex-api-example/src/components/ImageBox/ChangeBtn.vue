<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() { // 抓資料 和 打dispatch
    const store = useStore(),
          nextImg = () => store.dispatch('handNext'),
          prevImg = () => store.dispatch('handPrev');
    return { nextImg, prevImg };
  },
};
</script>
<template>
  <div class="btnbox">
    <a @click="prevImg" href="javascript:;">上一張</a>
    <a @click="nextImg" href="javascript:;">下一張</a>
  </div>
</template>

<style lang="scss" scoped>
.btnbox {
  width: 100%;
  display: flex;
  justify-content: center;
  > a {
    padding: 10px 10px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
