import { createStore } from 'vuex';
// import axios from 'axios';
// import { apiGetPhotoList } from '../api/index.js'
import { apiGetPhotoList } from '../api'
export default createStore({
  state: { 
    photoArr: [],
    idx:0,
    isLoad: false,
  },
  actions: {
    // s-1, 2
    // handInit({commit}){
    // s-3
    async handInit({commit}){
      console.log(1);
      // s-3 加 await 後 getApiData 等於 .then(res 
      // 拿回來的內容，就可以直接 commit 和 return 了
      // 用 async await 可省下 .then 和 callback 的動作
      try{
        const getApiData = await apiGetPhotoList();
        commit('init',getApiData.data);
        return getApiData.data;
      }catch(error){
        console.error(error);
        console.error(error.error);
        alert(error.error)
        console.error(error.response.data);
      }
      // s-2
      // const getApiData = apiGetPhotoList();
      // return getApiData.then(res => {
      //   commit('init',res.data);
      //   return res.data;
      // }).catch(function(error){
      //   console.log(error.response.data);
      // });
      // s-1
      // axios 本身是 Promis 的回傳，所以下面就 return axios
      // return axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
      //   .then(function(res){
      //     console.log(2); console.log(res.data);
      //     // 下面兩行是不同的事情(件)
      //     commit('init',res.data);
      //     return res.data;
      //   }).catch(function(error){
      //     console.log(error.response.data);
      //   });
    },
    handLoadState({commit},bool){
      commit('loadState',bool);
    },
    handNext({commit}){
      commit('next',);
    },
    handPrev({commit}){
      commit('prev',);
    },
  },
  mutations: {
    init(state,payload){
      state.photoArr = payload;
      console.log(state.photoArr);
    },
    loadState(state,bool){
      state.isLoad = bool
    },
    next(state){
      state.idx++;
      if(state.idx > state.photoArr.length - 1) state.idx = 0;
    },
    prev(state){
      state.idx--;
      if(state.idx < 0) state.idx = state.photoArr.length - 1;
    },
  },
  getters: {
    photoArr(state) { return state.photoArr; },
    idx(state) { return state.idx; },
    isLoad(state) { return state.isLoad; },
  },
});
