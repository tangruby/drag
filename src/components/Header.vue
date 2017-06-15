<template>
<div class='page-header' v-bind:style="{display:show}">
    <div class='box' >
        <div class='flex-row flex-middle left'>   
            <i class="pi-icon pi-icon-arrow-left"></i>
        </div>
        
        <h1 >{{ title || '资产配置' }}</h1>
        <div class='right'>
            <span v-show="showShare" class='pi-icon pi-icon-share'></span>
            <span v-show="showHome" class='pi-icon pi-icon-home'></span>
        </div>
    </div>
</div>
</template>
<script>

export default {
  created(){
    this.$root.Hub.$on('setTitle', (v) => { //Hub接收事件
        this.show = (v.show === false) ? "none": "block";
        this.title = v.title || '资产配置';
        this.showHome = v.showHome ? true : false;
    });
    
  },
  data(){
    return {
        show : "block",
        title: '智能资产配置',
        showShare: false,
        showHome: false,
    }
  },
  props: {
        inputValue: [ String , Number ]  //允许字符串 数字
  },
  mounted () {
    // console.log(this.inputValue);
      
  },
  methods:{
    //   cltit:function(event){
    //     //   console.log(p.inputValue);
    //       console.log(this.inputValue);
    //   },
    //   greet: function (event) {
    //     // `this` 在方法里指当前 Vue 实例
    //     alert('Hello ' + this.title + '!')
    //     // `event` 是原生 DOM 事件
    //     alert(event.target.tagName)
    //  }
  }
}
</script>


<style lang="scss" scoped>
/*
 * 头部样式文件
 */
@import '../styles/app/mixins.scss';
.box{
    color:#fff;
    height: .84rem;
    background-color: #b1272a;
    position: fixed;
    overflow: hidden;
    width:100%;
    top:0;
    left:0;
    z-index:999;

    .left,.right{
        position: absolute;
        top:0;
    }

    .left{
        left: .2rem;
        height: 100%;
        padding-right: .2rem;
        i {
            width: .24rem;
            height: .41rem;
            margin-right: .1rem;
        }
    }
    .right{
        right: .2rem;        
    }
    h1{
        font-size: .32rem;
        font-weight:normal;
        text-align:center;
        margin:0;
        line-height: .84rem;        
    }

    :global {
        .pi-icon-back,
        .pi-icon-home,
        .pi-icon-share{        
            width: .42rem;
            height: .84rem;
            // padding:0 0.3125rem;
            top:0;
            &:before{
                background-size: 86%;
            }
        }
        button.pi-icon{
            background:none;
            outline-style: none;
            border:none;
            color:#ffffff;
            font-size: .32rem;
        }
    }

}
</style>
