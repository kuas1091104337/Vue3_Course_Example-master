import axios from 'axios';

const photoRequest = axios.create({
  baseURL:'https://vue-lessons-api.herokuapp.com/',
});

// 添加請求"攔截器" (送api以前)
photoRequest.interceptors.request.use(
  config => { // 在發送請求之前做一些事情，這裡可以拿到 post 傳出去的資料
    // if(true) throw {response:{data:'資料不得為空'}}
    console.log(111, config, config.data);
    return config;
  },
  error => { // 處理請求錯誤
    return Promise.reject(error);
  }
);
// 添加響應"攔截器" (打完api，server給你res的資料，拿到資料以前)
photoRequest.interceptors.response.use(
  response => { // 任何在 2xx 範圍內的狀態碼都會觸發這個函數 (對響應數據做一些事情)
    console.log(222, response, response.data);
    return response;
  },
  error => { // 任何超出 2xx 範圍的狀態碼都會觸發該函數 (做一些響應錯誤的事情)
    return Promise.reject(error);
  }
);

// get
export const getPhotoList = () => photoRequest.get('photo/list')
// post
// export const getPhotoList = () => photoRequest.post('photo/list',{data:'ABC123'})
// put
// export const putPhotoRequest = () => photoRequest.put('photo/list')

// https://vue-lessons-api.herokuapp.com/photo/list

// axios.get('api的網址')
// .then(function(res){
//   // 2XX系列進來then
// }).catch(function(error){
//   // 不是2XX系列進來catch
// });