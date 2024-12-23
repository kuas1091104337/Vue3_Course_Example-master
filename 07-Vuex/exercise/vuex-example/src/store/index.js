import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen:false
  },
  actions: {
    menuHandleAction(context){
      console.log(context);
      context.commit('menuHandleMutation', !context.state.isOpen)
    }
  },
  mutations: {
    menuHandleMutation(state, bool){
      state.isOpen = bool;
    }
  },
  getters: {//資料流同一由getters取得
    isOpen(state){
      return state.isOpen;
    }
  },
  // modules: {},
});
