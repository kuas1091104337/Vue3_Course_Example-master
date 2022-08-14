import { ref, reactive, toRefs, onMounted, onUnmounted } from 'vue';
// export function MousePosition(){
export const MousePosition = () => {
  const x = ref(0), 
        y = ref(0),
        pos = reactive({x:0,y:0}),
        name = ref('mike'),
        mpBox = ref(null),
        posUpdata = (e) => {
          // s-1
          // x.value = e.pageX;
          // y.value = e.pageY;
          // s-2, s-3
          // pos.x = e.pageX;
          // pos.y = e.pageY;
          pos.x = e.offsetX;
          pos.y = e.offsetY;
        };
  onMounted(() => {
    // s-1
    // console.log(x, y); // RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: 0, _value: 0}
    // s-2
    // console.log(pos); // Proxy {x: 0, y: 0}
    // s-3
    console.log(toRefs(pos)); // {x: ObjectRefImpl, y: ObjectRefImpl}
    // window.addEventListener('mousemove',posUpdata);
    mpBox.value.addEventListener('mousemove',posUpdata);
  });
  onUnmounted(() => {
    // window.removeEventListener('mousemove',posUpdata);
    mpBox.value.removeEventListener('mousemove',posUpdata);
  });
  // s-3
  return { ...toRefs(pos), name, mpBox };
  // s-2
  // return { pos };
  // s-1
  // return {x, y};
}