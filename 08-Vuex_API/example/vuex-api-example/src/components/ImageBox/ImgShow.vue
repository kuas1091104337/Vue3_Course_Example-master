<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const photoArr = computed(() => store.getters.photoArr);
    const idx = computed(() => store.getters.idx);
    return { photoArr, idx };
  },
};
</script>

<template>
  <div>
    <img
      class="img"
      v-for="(item, num) in photoArr"
      v-show="idx === num"
      :key="item.url"
      :src="item.url"
      :alt="num"
    />
  </div>
</template>

<style lang="scss" scoped>
.img {
  width: 100%;
  display: block;
  border: 8px solid #42b983;
}
</style>
