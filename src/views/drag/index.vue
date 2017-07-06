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
import VBox from "./box"
import Point from "./Point"
import img01 from "../../images/drag/leader_1_01.png"
import img02 from "../../images/drag/leader_1_02.png"
import img03 from "../../images/drag/leader_1_03.png"
import img04 from "../../images/drag/leader_1_04.png"
import img05 from "../../images/drag/leader_1_05.png"
import img06 from "../../images/drag/leader_1_06.png"
import img07 from "../../images/drag/leader_1_07.png"
import img08 from "../../images/drag/leader_1_08.png"
import img09 from "../../images/drag/leader_1_09.png"
import img10 from "../../images/drag/leader_1_10.png"
import img11 from "../../images/drag/leader_1_11.png"

export default {
  created(){

    this.$root.Hub.$emit('setTitle',{show:false,title:'强智能配置',showHome:false}); //Hub触发事件

    let arr = new Array();
      arr.push(img01);
      arr.push(img02);
      arr.push(img03);
      arr.push(img04);
      arr.push(img05);
      arr.push(img06);
      arr.push(img07);
      arr.push(img08);
      arr.push(img09);
      arr.push(img10);
      arr.push(img11);
    //初始
    for(let i=0;i<12;i++){
      let clsName = '';
      clsName += i%2==0 ? 'red ':'blue ';
      
      // this.randomImg();

      let pos = C.position.getPosition(i);
      
      this.points.push(pos);

      if(i < 11){

        this.boxs.push({
          index:i,
          id:i,
          name:`box${i}`,
          clsName: clsName,
          position: pos,
          img:arr[i],
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
        imgs:new Array(),
        img01:img01
      }
  },
  components: {
    VBox,
  },
  methods:{
    boxClick:function(box){
      //交换信息
      if(this.isNeighbor(box.id)){
        
        let num = box.id;
        box.position = this.points[this.emptyNum];
        box.id = this.emptyNum;

        this.emptyNum = num;
      }
    },
    //判断是否相邻
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
    },
    //随机图片名数组
    randomImg:function(){
      
      // for(let i=1;i<12;i++){
      //   arr.push("leader_1_"+("0"+i).substr(-2)+".png");
      // }
      // this.randomSort(arr,this.imgs);
    },
    randomSort:function(arr, newArr) {
        // 如果原数组arr的length值等于1时，原数组只有一个值，其键值为0
        // 同时将这个值push到新数组newArr中
        if(arr.length == 1) {
          newArr.push(arr[0]);
          return newArr; // 相当于递归退出
        }
        // 在原数组length基础上取出一个随机数
        var random = Math.ceil(Math.random() * arr.length) - 1;
        // 将原数组中的随机一个值push到新数组newArr中
        newArr.push(arr[random]);
        // 对应删除原数组arr的对应数组项
        arr.splice(random,1);
        return this.randomSort(arr, newArr);
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

    // .block {
    //     /*float: left;*/
    //     margin: .1rem;
    //     /*width: 2rem;
    //     height: 2rem;*/
    //     font-size: .6rem;
    // }

    .blue {
        background: #3bafda;
        /*background: #FFFFF6;*/
    }

    .red {
        /*background: #FFFFFB;*/
        background: #da4453;
    }

</style>


