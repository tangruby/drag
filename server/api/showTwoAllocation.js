var express = require('express');
var router = express.Router();
var casual = require('casual');

casual.define('towAllocation', function() {
    return {
        "body":{
            "sysPlan":{
                "allcateType":"6","allocation":[{"assetId":"16","assetName":"现金管理","color":"cc0099","indexname":"上证综合","indexprofit":3.5,"percentage":"20.40","products":[{"productCode":"PA3012"}],"rate":"2.77","shortName":"现金管理"},{"assetId":"11","assetName":"权益管理","color":"7093cb","indexname":"深圳指数","indexprofit":2.6,"percentage":"6.65","products":[{"productCode":"590008"},{"productCode":"519983"}],"rate":"11.43","shortName":"权益管理"},{"assetId":"17","assetName":"(类)固定收益","color":"f5be76","indexname":"北京指数","indexprofit":2.7,"percentage":"48.25","products":[{"productCode":"200013"},{"productCode":"485111"}],"rate":"3.59","shortName":"类固收"},{"assetId":"13","assetName":"另类(非黄金)","color":"BFE3FE","indexname":"深证100指数","indexprofit":5.6,"percentage":"17.29","products":[{"productCode":"001229"},{"productCode":"001335"}],"rate":"8.33","shortName":"另类"},{"assetId":"14","assetName":"黄金管理","color":"009999","indexname":"巨潮100指数","indexprofit":6.3,"percentage":"7.41","products":[{"productCode":"161116"}],"rate":"5.01","shortName":"黄金"}],
                "date":"1474250464173","flux":84,"investAsset":"50000","label":"成长消费型","purchas":17,"recommend":"0","risk":17,"userproperty":"11","valueAtRisk":"9.66628","volatility":"7.54","yield":"4.87"
            },
            "userPlan":{
                "allcateType":"3","allocation":[{"assetId":"16","assetName":"现金管理","color":"cc0099","indexname":"上证综合","indexprofit":3.5,"percentage":"20","products":[{"productCode":"PA3012"}],"rate":"2.77","shortName":"现金管理"},{"assetId":"11","assetName":"权益管理","color":"7093cb","indexname":"深圳指数","indexprofit":2.6,"percentage":"7","products":[{"productCode":"590008"},{"productCode":"519983"}],"rate":"11.43","shortName":"权益管理"},{"assetId":"17","assetName":"(类)固定收益","color":"f5be76","indexname":"北京指数","indexprofit":2.7,"percentage":"46","products":[{"productCode":"200013"},{"productCode":"485111"}],"rate":"3.59","shortName":"类固收"},{"assetId":"13","assetName":"另类(非黄金)","color":"BFE3FE","indexname":"深证100指数","indexprofit":5.6,"percentage":"19","products":[{"productCode":"001229"},{"productCode":"001335"}],"rate":"8.33","shortName":"另类"},{"assetId":"14","assetName":"黄金管理","color":"009999","indexname":"巨潮100指数","indexprofit":6.3,"percentage":"8","products":[{"productCode":"161116"}],"rate":"5.01","shortName":"黄金"}],"date":"1474250464173","flux":84,"investAsset":"50000","label":"成长消费型","purchas":17,"recommend":"0","risk":17,"userproperty":"11","valueAtRisk":"10.3585600","volatility":"8.0800","yield":"4.9900"
            }
        },
        "responseCode":"200",
        "responseMsg":"operate successfully"
    }
});

var payload = casual.towAllocation;

router.post('/spss-aa-cust/asset/showTwoAlloction', function (req, res) {
    // setTimeout(function () {
        res.status(200).json(payload);
        // res.status(200).json({'body':null,'responseCode':'611','responseMsg':'error'});
    // },3000);
})
// var paylod = {"body":false,"responseCode":"200","responseMsg":"operate successfully"};

module.exports = router;
