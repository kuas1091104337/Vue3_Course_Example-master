<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() { // 抓資料 和 打dispatch
    const store = useStore(),
          isLoad = computed(() => store.getters.isLoad);
    return { isLoad };
  },
};
</script>

<template>
  <img v-show="!isLoad" class="load" src="../assets/load.gif" alt="" />
</template>

<style lang="scss" scoped>
.load {
  width: 40px;
}
</style>
