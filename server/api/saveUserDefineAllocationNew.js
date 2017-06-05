var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":{
        "bondRisk":6.15,
        "maxRisk":32.17,
        "monthReturnRate":"近半年,12",
        "original":{
            "investAsset":"20000",
            "prodPage":[
                {"assetId":"16","assetName":"现金管理","color":"cc0099","percentage":"34.39","products":[{"lightspot":"没有配置产品亮点","appendMinBuy":10,"lowestBuy":"1000","productCode":"164705","productId":"2684380","productInvest":"3439.00","productName":"汇添富恒生","productRisk":"高风险","productType":"1","productTypename":"股票型","returnRate":"-19.71"},{"lightspot":"53653","appendMinBuy":10,"lowestBuy":"1000","productCode":"PA3012","productId":"2686170","productInvest":"3439.00","productName":"灵活宝1号","productRisk":"中低风险","productType":"3","returnRate":"5.15"}],"shortName":"现金管理","suggestInvest":"6878.00"},
                {"assetId":"11","assetName":"权益管理","color":"7093cb","percentage":"22.07","products":[{"lightspot":"热卖产品","appendMinBuy":10,"lowestBuy":"1000","productCode":"257040","productId":"2684992","productInvest":"4414.00","productName":"德盛红前","productRisk":"中高风险","productType":"15","productTypename":"偏股型","returnRate":"-2.89"}],"shortName":"另类","suggestInvest":"4414.00"},
                {"assetId":"17","assetName":"(类)固定收益","color":"f5be76","percentage":"5.65","products":[{"appendMinBuy":10,"lowestBuy":"1000","productCode":"200013","productId":"2685362","productInvest":"565.00","productName":"长城增利A","productRisk":"中低风险","productType":"2","productTypename":"债券型","returnRate":"13.89"},{"appendMinBuy":10,"lowestBuy":"10","productCode":"485111","productId":"2685298","productInvest":"565.00","productName":"工银双利债券A","productRisk":"中低风险","productType":"2","productTypename":"债券型","returnRate":"11.70"}],"shortName":"类固收","suggestInvest":"1130.00"},
                {"assetId":"13","assetName":"另类(非黄金)","color":"BFE3FE","percentage":"22.07","products":[{"lightspot":"热卖产品","appendMinBuy":10,"lowestBuy":"1000","productCode":"257040","productId":"2684992","productInvest":"4414.00","productName":"德盛红前","productRisk":"中高风险","productType":"15","productTypename":"偏股型","returnRate":"-2.89"}],"shortName":"另类","suggestInvest":"4414.00"},
                {"assetId":"14","assetName":"黄金管理","color":"009999","percentage":"15.82","products":[{"lightspot":"赌东道","appendMinBuy":10,"lowestBuy":"10","productCode":"164819","productId":"2684458","productInvest":"3164.00","productName":"工银中证环保产业","productRisk":"高风险","productType":"1","productTypename":"股票型","returnRate":"0.00"}],"shortName":"黄金","suggestInvest":"3164.00"}
            ]
        },
        "stockRisk":26.81,
        "sysDate":"1476409043623",
        "sysVolatility":"18.12",
        "userDate":"1476412079425",
        "userVolatility":"18.12",
        "valueAtRisk":"23.22984",
        "yield":"8.54"
    },
    "responseCode":"200","responseMsg":"operate successfully"
};

router.post('/spss-aa-cust/asset/saveUserDefineAllocationNew', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
