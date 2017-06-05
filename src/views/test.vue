<template>
    <div class="page-body">
        {{test}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            test:'helloworld',
            apiUrl:'https://stocklc.stg.pingan.com/spss-aa/spss-aa-cust/asset/checkLoginStatus',
        }
    },
    created() {
        this.getCustomers()
    },
    methods: {
        getCustomers: function() {
                
            this.$root.Hub.$emit('setTitle',{title:'强智能配置',showHome:false}); //Hub触发事件
            
            this.$http.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data);
                    // this.$set('gridData', response.data)
                })
                .catch(function(response) {
                    console.log(response)
                })
        }
    }
}
</script>

<<style lang="scss">

</style>

