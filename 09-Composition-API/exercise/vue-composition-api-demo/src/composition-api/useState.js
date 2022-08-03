import { ref } from 'vue';
export const stateAdd = () => {
  const idx = ref(0),
        addState = () => {
          idx.value++;
        };
  return { idx, addState }
}