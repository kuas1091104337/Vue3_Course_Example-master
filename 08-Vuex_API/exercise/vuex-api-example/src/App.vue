<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: { LoadingBar, ImageBox },
  setup() {
    const store = useStore(),
          handImgLoad = imgArr => {
            let i = 0;
            imgArr.forEach(img => {
              const imgLoad = new Image(); // 讓瀏覽器知道要載入圖片
              imgLoad.src = img.url;
              // console.log('imgLoad.src : '+imgLoad.src);
              imgLoad.onload = () => { // onload 知道圖片甚麼時候載入完成
                i++;
                store.dispatch('handLoadState',i === imgArr.length);
              }
            })
          },
          init = () => {
            // handInit function 是非同步的處理，所以要回傳 Promis 或 Async 給 dispatch
            // 因為 handInit 改 return 和 return api data 後，就可以在 dispatch 後面接.then
            store.dispatch('handInit').then(res => {
              console.log(3);
              // res = photoArr
              handImgLoad(res);
            });
          };
    onMounted(() => init());
    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
