import { createStore } from "vuex";
import axios from 'axios';
export default createStore({
  state: { 
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    handInit({commit}){
      axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
      .then(function(res){
        console.log(res.data);
        commit('init',res.data);
      }).catch(function(error){
        console.log(error.response.data);
      });
    }
  },
  mutations: {
    init(state,payload){
      state.photoArr = payload;
      console.log(state.photoArr);
    }
  },
  getters: {
    isLoad(state) { return state.isLoad; },
    photoArr(state) { return state.photoArr; },
    idx(state) { return state.idx; },
  },
});
