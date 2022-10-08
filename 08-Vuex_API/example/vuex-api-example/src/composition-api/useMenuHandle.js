import { computed } from "vue";
import { useStore } from "vuex";
export function useMenuHandle() {
  const store = useStore(),
        isLogin = computed(() => store.getters.isLogin),
        isOpen = computed(() => store.getters.isOpen),
        stateHandle = (type) => {
          store.dispatch(type);
          isLogin.value && isOpen.value && type === 'menuHandleActions' && (store.dispatch('loginHandleActions'))
          isLogin.value && isOpen.value && type === 'loginHandleActions' && (store.dispatch('menuHandleActions'))
        };
        // stateHandle = (type,bool) => {store.dispatch(type,bool)};
  return { isLogin, isOpen, stateHandle };
}