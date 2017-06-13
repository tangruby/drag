<template>
  <div class="box">
    <div class="name flex-center">{{name}}</div>
  </div>
</template>

<script>
export default {
  created(){
    
    // console.log(position);
  },
  data(){
      return {
      }
  },
  props:{
    position:"object",
    name:"string",
  }
}
</script>

<style lang="scss">
    .box{
        color: #00FF99;
        font-size:.40rem;

        .name {
          color:#2266AA;
        }
    }
</style>


