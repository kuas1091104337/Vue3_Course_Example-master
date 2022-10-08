<script>
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";
  import ImageBox from "@/components/ImageBox/index.vue";
  import LoadingBar from "@/components/LoadingBar.vue";
  import Header from "@/components/Header.vue";
  import SlidMenu from "@/components/SlidMenu.vue";
  import Login from "@/components/Login.vue";
  import Content from "@/components/Content.vue";
  import MenuBar from "@/components/MenuBar.vue";
  export default {
    components: { LoadingBar, ImageBox, Header, SlidMenu, Login, Content, MenuBar },
    setup() {
      const store = useStore(),
            imgLoadHandle = (imgArr) => {
              let i = 0;
              imgArr.forEach((img) => {
                const imgs = new Image();
                imgs.src = img.url;
                imgs.onload = () => {
                  i++;
                  store.dispatch('loadHandleActions',i === imgArr.length);
                }
              });
            },
            // isMenuOpen = computed(() => store.getters.isMenuOpen),
            isMenuOpen = computed({
              set:(val) => store.dispatch('menuOpenHandActions',val),
              get:() => store.getters.isMenuOpen
            }),
            menuOpenHand = () => {
              // store.dispatch('menuOpenHandActions',!isMenuOpen.value);
              isMenuOpen.value = !isMenuOpen.value
            };
      onMounted(() => {
        store.dispatch('initHandleActions').then(res => {
          imgLoadHandle(res); // res = photoArr
        });
      });
      return { menuOpenHand, isMenuOpen };
    },
  };
  </script>
  
  <template>
    <Header />
    <SlidMenu />
    <Login />
    <div class="menuBtn" @click="menuOpenHand">
      {{ !isMenuOpen ? "開啟選單" : "關閉選單" }}
    </div>
    <MenuBar />
    <LoadingBar />
    <ImageBox />
    <!-- <Content /> -->
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
.menuBtn{
  color: #fff;
  display: inline-block;
  background-color: #fa0;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
  