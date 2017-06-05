var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":{
        "majorrecommend":[
            {"createDate":1470367115000,"createUser":"test","lowestBuy":1,"productCode":"400006","productId":"2688285","productName":"东方金账簿货币B类","productType":"3","productTypename":"货币型","returnRate":"2.57","risklevel":"低风险","state":"1","userproperty":"0"},
            {"createDate":1472086288000,"createUser":"test001","lowestBuy":1000,"productCode":"420005","productId":"2684852","productName":"天弘周期策略混合","productType":"15","productTypename":"偏股型","returnRate":"-1.05","risklevel":"高风险","state":"1","userproperty":"0"},
            {"createDate":1472086275000,"createUser":"test001","lowestBuy":1000,"productCode":"257040","productId":"2684992","productName":"德盛红前","productType":"15","productTypename":"偏股型","returnRate":"-2.89","risklevel":"中高风险","state":"1","userproperty":"0"},
            {"createDate":1472086281000,"createUser":"test001","lowestBuy":1000,"productCode":"395001","productId":"2684922","productName":"中海收益","productType":"2","productTypename":"债券型","returnRate":"7.16","risklevel":"中低风险","state":"1","userproperty":"0"}
        ],
        "recommend":[
            {"assetId":"16","createDate":1472181370000,"createUser":"test001","lightspot":"没有配置产品亮点","lowestBuy":1000,"productCode":"164705","productId":"2684380","productName":"汇添富恒生","productType":"1","productTypename":"股票型","returnRate":"-19.71","risklevel":"高风险","state":"1","userproperty":"1"},
            {"assetId":"16","createDate":1473123933000,"createUser":"test001","lightspot":"53653","lowestBuy":1000,"productCode":"PA3012","productId":"2686170","productName":"灵活宝1号","productType":"3","returnRate":"5.15","risklevel":"中低风险","state":"1","userproperty":"1"}
        ]
    },
    "responseCode":"200","responseMsg":"operate successfully"
};

// assetId:16
// userproperty:1
// _:1476421923199
// callback:jsonp1
router.post('/spss-aa-cust/product/queryrecommendproduct', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
