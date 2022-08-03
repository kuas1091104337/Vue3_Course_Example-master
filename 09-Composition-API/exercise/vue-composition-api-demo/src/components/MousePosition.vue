<script>
// import { MousePosition } from '../composition-api/useMousePosition.js'
import { useMousePosition } from '../composition-api'
export default {
  setup() {
    // s-1, s-3
    const { x,y,name } = useMousePosition();
    return { x,y,name };
    // s-2
    // const { pos } = useMousePosition();
    // return { pos };
  },
};
</script>

<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <!-- s-1, s-3 -->
    <h2>x:{{x}} , y:{{y}}</h2>
    <h3>{{name}}</h3>
    <!-- s-2 -->
    <!-- <h2>x:{{pos.x}} , y:{{pos.y}}</h2> -->
  </div>
</template>

<style lang="scss"></style>
