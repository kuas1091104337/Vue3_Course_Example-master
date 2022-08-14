<script>
import { useStateAdd } from '../composition-api';
export default {
  setup() {
    const { idx, addState, removeState } = useStateAdd();
    return { idx, addState, removeState };
  },
};
</script>
<template>
  <div class="block">
    <h1>number:{{idx}}</h1>
    <button @click="addState">add</button>
    <button @click="removeState">remove</button>
  </div>
</template>

<style lang="scss" scoped>
.block {
  width: 300px;
  padding: 15px 15px;
  margin: 0 auto;
  border: 1px solid #000;
  margin-bottom: 5px;
}
</style>
