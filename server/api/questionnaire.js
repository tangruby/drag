var express = require('express');
var router = express.Router();

var payload = {
    "body": {
        "sysPlan": {
            "allcateType": "5",
            "allocation": [
                {"assetId": "16","assetName": "现金管理","color": "cc0099","indexname": "上证综合","indexprofit": 3.5,"percentage": "7.21",
                    "products": [{"productCode": "164705"},{"productCode": "PA3012"}],"rate": "2.8","shortName": "现金管理"},
                {"assetId": "11","assetName": "权益管理","color": "7093cb","indexname": "深圳指数","indexprofit": 2.6,"percentage": "29.96",
                    "products": [],"rate": "10.41","shortName": "权益管理"},
                {"assetId": "17","assetName": "(类)固定收益","color": "f5be76","indexname": "北京指数","indexprofit": 2.7,"percentage": "34.39",
                    "products": [{"productCode": "200013"},{"productCode": "485111"}],"rate": "5.14","shortName": "类固收"},
                {"assetId": "13","assetName": "另类(非黄金)","color": "BFE3FE","indexname": "深证100指数","indexprofit": 5.6,"percentage": "15.37",
                    "products": [{"productCode": "257040"}],"rate": "8.43","shortName": "另类"},
                {"assetId": "14","assetName": "黄金管理","color": "009999","indexname": "巨潮100指数","indexprofit": 6.3,"percentage": "13.07",
                    "products": [{"productCode": "164819"}],"rate": "6.07","shortName": "黄金"}
            ],
            "date": "1477653418104","flux": 79,"investAsset": "1228","label": "职业理财型","purchas": 75,"risk": 67,"userproperty": "1","valueAtRisk": "14.66608","volatility": "11.44","yield": "7.18"
        }
    },
    "responseCode": "200",
    "responseMsg": "operate successfully"
}
// 完成详细问卷提交获取资产配置方案
router.post('/spss-aa-cust/xiaoan/questionnaire', function (req, res) {
    var body = req.body;
    res.status(200).json(payload);
})

module.exports = router;
