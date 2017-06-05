<template>
  <div class="box">
    <div>hello</div>
     this is box,{{name}}
  </div>
</template>

<script>
export default {
  created(){
    // console.log("ddd");
    console.log(this.props.position);
  },
  data(){
      return {
        name: 'box'
      }
  },
  props:{
    position:"object",
  }
}
</script>

<style lang="scss">
    .box{
        color: #00FF99;
        font-size:.40rem;
    }
</style>


