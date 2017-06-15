<template>
  <div class="drag">
    <div>{{emptyNum}}</div>
     <div class="wraper" ref="wraper">
       
       <template  v-for="item in boxs" >
        <v-box
         :boxPos="item"
         v-on:click.native="boxClick(item)"
         ></v-box>
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

    //初始
    for(let i=0;i<12;i++){
      let clsName = 'block ';
      clsName += i%2==0 ? 'red ':'blue ';
      
      let pos = C.position.getPosition(i);
      
      this.points.push(pos);

      if(i < 11){

        this.boxs.push({
          index:i,
          id:i,
          name:`box${i}`,
          clsName: clsName,
          position: pos,
        });
      }

    }
  },
  updated(){
    // console.log(23333);
  },
  data(){
      return {
        boxs: new Array(),
        points: new Array(),
        emptyNum: 11,
      }
  },
  components: {
    VBox,
  },
  methods:{
    sayHi:function(v){
      console.log(v);
    },
    boxClick:function(box){
      //交换信息
      if(this.isNeighbor(box.id)){
        
        let num = box.id;
        box.position = this.points[this.emptyNum];
        box.id = this.emptyNum;

        this.emptyNum = num;
      }
    },
    isNeighbor:function(index){
      //同一列
      if(index % 3 === this.emptyNum % 3 ){
        //上下相邻
        if(Math.abs(Math.floor(index/3) - Math.floor(this.emptyNum/3)) === 1){
          return true;
        }else{
          return false;
        }
      
      }else if( Math.floor(index/3) === Math.floor(this.emptyNum/3)){ //同一行
        //左右相邻
        if(Math.abs( (index % 3) - (this.emptyNum%3)) === 1){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }
    
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


