<template>
    <div class="page-body">
        <div class="product" v-if="products">
            <div class="flex-row flex-between flex-middle custom">
                <div v-if='monthRates.length>1' class='rate'>该组合{{monthRates[0]}}收益率:
                    <em>{{Math.round(parseFloat(monthRates[1] || 0) * 100) / 100}} %</em>
                </div>
                <div v-else class="rateErr">因部分产品收益数据缺失，无法计算组合收益</div>
                <router-link  to="/home">
                <div class="link">自定义配置</div>
                </router-link>
            </div>
            <div class="flex-row flex-middle buy">
                <div class="label">买入金额(元):</div>
                <div>100.00</div>
            </div>
            <div class="allProduct">
                <div class="box" v-for="item in products.original.prodPage">
                    <div v-if="item.suggestInvest && item.suggestInvest > 0 && item.products && item.products.length > 0" class="flex-row flex-between flex-middle title">
                        <div class="typename">{{item.assetName}}</div>
                        <div class="typemoney">
                            {{Number(item.suggestInvest).toLocaleString('zh-CN')}}元 (
                            <em>{{item.percentage}}</em>% )
                        </div>
                    </div>
                    <div v-for='p in item.products' class="flex-row flex-between flex-middle item">
                        <div class="flex-column flex-middle  info ">
                            <div class=name>
                                {{p.productName}}
                            </div>
                            <div class=lightspot>
                                {{p.lightspot}}
                            </div>
                        </div>
                        <div class=money>
                            {{Number(p.productInvest).toLocaleString('zh-CN')}}
                            <i class='pi-icon pi-icon-more'></i>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="total">
                <div class="flex-row flex-between flex-middle totalbox">
                    <div class="totalmoney">合计:
                        <em>{{Number(products.original.investAsset || 0).toLocaleString('zh-CN')}} 元</em>
                    </div>
                    <div class="next">一键下单</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        this.getCustomers();
           
        this.$root.Hub.$emit('setTitle',{title:'查看产品订单',showHome:true}); //Hub触发事件
    },
    data(){
        return {
            products:null,
            monthRates:[],
            test:'helloworld',
            apiUrl:'http://localhost:3031/products',
        }
    },
    methods: {
        getCustomers: function() {
            this.$http.get(this.apiUrl)
            .then((response) => {
                console.log(response.data);
                this.products = response.data.body;
                this.monthRates = this.products.monthReturnRate.split(',');
            })
            .catch(function(response) {
                console.log(response)
            })
        }
    }

}
</script>

<style lang="scss">
@import '../styles/app/mixins.scss';
.product {
    padding-bottom: .05rem;
    .custom,
    .buy,
    .title,
    .item {
        background: #ffffff;
        padding-left: .4rem;
        padding-right: .4rem;
    }
    .custom {
        height: .9rem;
        font-size: .26rem;
        border-bottom: 1px solid #e3e3e3;
        .rate {
            width: 4.6rem;
            color: #909090;
            em {
                margin: 0rem .05rem;
                color: #ff8000;
            }
        }
        .rateErr{
            color: #900000;
            width: 5rem;
        }
        .link {
            color: #2692ea;
        }
    }
    .buy {
        height: .9rem;
        font-size: .3rem;
        .label {
            margin-right: .30rem;
        }
        .mockinput {
            background: #ffffff;
            border: 0;
            outline: none;
            font-size: .3rem;
            margin-left: .1rem;
            color: #c8c8c8;
        }
    }
    .allProduct{
        margin-bottom: 1.75rem;
        .box {
            margin-top: .2rem;
            .title {
                height: .9rem;
                font-size: .26rem;
                .typename {
                    width: 3.6rem;
                    color: #909090;
                }
                .typemoney {
                    color: #ec4d4d;
                }
            }
            a{
                display: block;
            }
            .item {
                border-top: 1px solid #e3e3e3;
                
                .info {
                    width: 4rem;
                    .name {
                        font-size: .32rem;
                        margin: .18rem 0rem;
                        color: #1e1e1e;
                    }
                    .lightspot {
                        margin-bottom: .15rem;
                        font-size: .22rem;
                        color: #909090;
                    }
                }
                .infoName{
                    height: 1rem;
                    .lightspot {
                        margin-bottom: 0rem;
                    }
                }
                .money {
                    font-size: .3rem;
                    i {
                        margin-left: .15rem;
                    }
                }
            }
        }
        
    }
    .total {
        position: fixed;
        left: 0rem;
        right: 0rem;
        bottom: 0rem;
        height: .95rem;
        // border-top: 1px solid #e3e3e3;
        // margin-top: .8rem;
        font-size: .3rem;
        .totalbox {
            background: #ffffff;
            padding-left: .2rem;
            padding-right: .2rem;
            .totalmoney {
                width: 3.2rem;
                padding: .28rem 0rem;
                text-align: left;
                em {
                    color: #ec4d4d;
                }
            }
            .next {
                width: 3.48rem;
                height: .76rem;
                line-height: .76rem;
                background: #ec4d4d;
                color: #ffffff;
                text-align: center;
                border-radius: .05rem;
            }
        }
    }
}
</style>

