import { getPhotoList } from './photoRequest.js'
// api/index.js 可能會接很多個不同的api
// import { getPhotoRequest1 } from './photoRequest1.js'
// import { getPhotoRequest2 } from './photoRequest2.js'
// import { getPhotoRequest3 } from './photoRequest3.js'
// import { getPhotoRequest4 } from './photoRequest4.js'
// import { getPhotoRequest5 } from './photoRequest5.js'

export const apiGetPhotoList = getPhotoList;
// 可以統一當成記錄點，丟出去就好
// export const apiGetPhotoRequest1 = getPhotoRequest1;
// export const apiGetPhotoRequest2 = getPhotoRequest2;
// export const apiGetPhotoRequest3 = getPhotoRequest3;
// export const apiGetPhotoRequest4 = getPhotoRequest4;
// export const apiGetPhotoRequest5 = getPhotoRequest5;