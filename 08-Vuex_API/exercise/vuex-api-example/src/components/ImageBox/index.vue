<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ImgShow from "./ImgShow.vue";
import ChangeBtn from "./ChangeBtn.vue";
export default {
  components: { ImgShow, ChangeBtn },
  setup() { // 抓資料 和 打dispatch
    const store = useStore(),
          isLoad = computed(() => store.getters.isLoad);
    return { isLoad };
  },
};
</script>

<template>
  <div class="box" v-show="isLoad">
    <ImgShow />
    <ChangeBtn />
  </div>
</template>

<style lang="scss" scoped>
.box {width: 500px;}
</style>
