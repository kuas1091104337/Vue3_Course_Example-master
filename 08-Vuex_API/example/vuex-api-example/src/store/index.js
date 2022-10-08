// import axios from 'axios';
import { createStore } from "vuex";
import { apiGetPhotoRequest } from '@/api';
export default createStore({ 
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
    isLogin:false,
    isOpen:false,
    isMenuOpen: false
  },
  actions: {
    async initHandleActions(context){
      try{
        // 使用 api/index 的方式載入api
        const res = await apiGetPhotoRequest();
        context.commit('initHandleMutations',res.data)
        return res.data;
      }catch(error){
        console.log(error);
      }
    },
    // return axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
    //   .then((res) => {
    //     context.commit('initHandleMutations',res.data)
    //     return res.data;
    //   }).catch((error) => { console.log(error.response.data) });
    loadHandleActions(context,bool){context.commit('loadHandleMutations',bool)},
    addHandleActions({commit}){commit('addHandleMutations')},
    removeHandleActions({commit}){commit('removeHandleMutations')},
    loginHandleActions({commit},bool){commit("loginHandleMutations",bool)},
    menuHandleActions({commit},bool){commit("menuHandleMutations",bool)},
    menuOpenHandActions({ commit }, bool) {commit("menuOpenHandMutations",bool)},
  },
  mutations: {
    initHandleMutations(state,dataLoad){
      state.photoArr = dataLoad; 
      console.log(state.photoArr)
    },
    loadHandleMutations(state,bool){state.isLoad = bool},
    addHandleMutations(state){
      state.idx++;
      if(state.idx > state.photoArr.length - 1) state.idx = 0;
    },
    removeHandleMutations(state){
      state.idx--;
      if(state.idx < 0) state.idx = state.photoArr.length - 1;
    },
    // loginHandleMutations(state,bool){state.isLogin = bool},
    // menuHandleMutations(state,bool){state.isOpen = bool},
    loginHandleMutations(state,bool){state.isLogin = !state.isLogin},
    menuHandleMutations(state,bool){state.isOpen = !state.isOpen},
    menuOpenHandMutations(state,bool) {state.isMenuOpen = bool},
  },
  getters: {
    photoArr(state){ return state.photoArr },
    idx(state){ return state.idx },
    isLoad(state){ return state.isLoad },
    isLogin: (state) => state.isLogin,
    isOpen: (state) => state.isOpen,
    isMenuOpen: (state) => state.isMenuOpen,
  },
});
