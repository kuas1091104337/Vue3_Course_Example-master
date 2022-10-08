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
  getters: {
    isOpen(state){
      return state.isOpen;
    }
  },
  // modules: {},
});
