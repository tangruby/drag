<template>
  <div v-bind:class="boxPos.clsName" ref="box">
    <img class="bg" v-bind:src="boxPos.img"></img>
    
  </div>
</template>

<script>
export default {
  created(){
  },
  mounted(){

    let pos = this.boxPos.position;
    let img = this.boxPos.img;
    
    let style =  `left:${pos.x+ C.position.pos.spaceW}rem;
                  top:${pos.y+ C.position.pos.spaceH}rem;
                  width:${ C.position.pos.subW}rem;
                  height:${ C.position.pos.subH}rem;
                  position: absolute;`;
    
    this.$refs.box.style = style;

  },
  data(){
      return {
      }
  },
  props:{
    boxPos:"object",
  },
  methods:{

  },
  watch: {
    boxPos: {
      handler: function (newVal) {
        let pos = newVal.position;
        let style =  `left:${pos.x+ C.position.pos.spaceW}rem;
                      top:${pos.y+ C.position.pos.spaceH}rem;
                      width:${ C.position.pos.subW}rem;
                      height:${ C.position.pos.subH}rem;
                      position: absolute;`;
        
        this.$refs.box.style = style;
      },
      deep: true
    }
},
}
</script>

<style lang="scss">
    .box{
        color: #00FF99;
        font-size:.40rem;

        .name {
          color:#2266AA;
          float:left;
        }
    }
    .bg {
      width:100%;
      height: 100%;
      // max-width: 100%;
      // max-height: 100%;
    }
</style>


