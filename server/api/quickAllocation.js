var express = require('express');
var router = express.Router();

var payload={
    "body":{
        "sysPlan":{
            "allcateType":"2",
            "allcateType":"6","allocation":[
            	{"assetId":"16","assetName":"现金管理","color":"cc0099","indexname":"上证综合","indexprofit":3.5,"percentage":"20.40","products":[{"productCode":"PA3012"}],"rate":"2.77","shortName":"现金管理"},
            	{"assetId":"11","assetName":"权益管理","color":"7093cb","indexname":"深圳指数","indexprofit":2.6,"percentage":"6.65","products":[{"productCode":"590008"},{"productCode":"519983"}],"rate":"11.43","shortName":"权益管理"},
            	{"assetId":"17","assetName":"(类)固定收益","color":"f5be76","indexname":"北京指数","indexprofit":2.7,"percentage":"48.25","products":[{"productCode":"200013"},{"productCode":"485111"}],"rate":"3.59","shortName":"类固收"},
            	{"assetId":"13","assetName":"另类(非黄金)","color":"BFE3FE","indexname":"深证100指数","indexprofit":5.6,"percentage":"17.29","products":[{"productCode":"001229"},{"productCode":"001335"}],"rate":"8.33","shortName":"另类"},
            	{"assetId":"14","assetName":"黄金管理","color":"009999","indexname":"巨潮100指数","indexprofit":6.3,"percentage":"7.41","products":[{"productCode":"161116"}],"rate":"5.01","shortName":"黄金"}],
            "date":"1462955974840","flux":100,"investAsset":"900000","label":"成长风险型","userproperty":"10","purchas":98,"recommend":"0","risk":99,"valueAtRisk":"26.25420","volatility":"15.96","yield":"8.09"
        }
    },
    "responseCode":"200","responseMsg":"operate successfully"
}

// 快速资产配置
router.post('/spss-aa-cust/asset/quickAlloction', function (req, res) {
    // {"income":1,
    // "expenditure":2,
    // "risk":2,
    // "investAsset":50000}
    var body = req.body;
    res.status(200).json(payload);
})

module.exports = router;
