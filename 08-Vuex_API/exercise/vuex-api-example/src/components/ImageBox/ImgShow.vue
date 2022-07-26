<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore(),
          photoArr = computed(() => store.getters.photoArr);
          imgIdx = computed(() => store.getters.idx);

    return { photoArr, imgIdx };
  },
};
</script>

<template>
  <div>
    <img
      class="img"
      v-for="(item, idx) in photoArr"
      v-show="imgIdx === idx"
      :key="item.url"
      :src="item.url"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.img {border: 8px solid #42b983;}
</style>
