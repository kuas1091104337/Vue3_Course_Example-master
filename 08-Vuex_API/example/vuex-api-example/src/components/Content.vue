<script>
export default {
  props:{},
  setup(props, { emit }){
    // const = ;
    return { props };
  },
}
</script>

<template>
<div class="content">
  <h1 class="content_txt">count: {{ count }}</h1>
  <button class="content_btn">add</button>
  <button class="content_btn">remove</button>
</div>
</template>

<style lang="scss">
.content{
  text-align:center;
  width: 250px;
  margin:0 auto;
  &_txt{
    font-size: 36px;
  }
  &_btn{
    padding: 5px;
    + .content_btn{margin-left: 20px;}
  }
}
</style>