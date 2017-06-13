<template>
  <div class="drag">
     <div class="wraper" ref="wraper" >
       
       <template  v-for="item in boxs">
        <v-box
         v-bind:class="item.clsName"
         v-bind:style="item.stlName"
         :name="item.name"
         :position="item.point"></v-box>
       </template>  
    </div>
  </div>
</template>

<script>
import VBox from "./box";
import Point from "./Point";

export default {
  created(){

    this.$root.Hub.$emit('setTitle',{show:false,title:'强智能配置',showHome:false}); //Hub触发事件

    this.initWindows();

    // console.log(Box);

    //初始
    for(let i=0;i<12;i++){
      let clsName = 'block ';
      clsName += i%2==0 ? 'red ':'blue ';
      
      let poi = this.initPoint(i);

      let stlName = `left:${poi.x+this.winPos.spaceW}rem;
                      top:${poi.y+this.winPos.spaceH}rem;
                      width:${this.winPos.subW}rem;
                      height:${this.winPos.subH}rem;
                      float: left;`;
                      // position: abslution;`;

      this.boxs.push({
        id:i,
        name:`box${i}`,
        stlName: stlName,
        clsName: clsName,
        point: poi,
      });
    }

  },
  data(){
      return {
        boxs: [],
        winPos:null,
      }
  },
  components: {
    VBox,
  },
  methods:{
    initWindows: function(){
      // console.log(this.$refs.wraper.offsetWidth);
      let hf = lib.flexible.px2rem(document.body.offsetHeight);
      let wf = lib.flexible.px2rem(document.body.offsetWidth);

      let pos = {width:wf,height:hf};
      pos.subWFull = pos.width / 3;
      pos.subW = pos.width * 0.92 / 3;
      pos.spaceW = pos.width * 0.04 / 3; //有左右
      pos.subHFull = pos.height / 4;
      pos.subH = pos.height * 0.92 / 4;
      pos.spaceH = pos.height * 0.04 /4; //有上下

      this.winPos = pos;
    },
    initPoint: function(index){
      //3*4规格
      let pos = {w: this.winPos.subW, h: this.winPos.subH};
      pos.x = (index % 3) * this.winPos.subWFull;
      pos.y = Math.trunc(index / 3) * this.winPos.subHFull;
      
      return pos;
    },
  }

}
</script>

<style lang="scss">
    .drag{
        color: #770099;
        font-size:.32rem;
    }

    .wraper {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background: #FF33FF;
    }

    .block {
        /*float: left;*/
        margin: .1rem;
        /*width: 2rem;
        height: 2rem;*/
        font-size: .6rem;
    }

    .blue {
        background: #3bafda;
        /*background: #FFFFF6;*/
    }

    .red {
        /*background: #FFFFFB;*/
        background: #da4453;
    }

</style>


