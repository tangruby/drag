var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":{
        "bigList":[
            {"assetPercent":"8.37%","color":"cc0099","prodClass":"现金管理"},
            {"assetPercent":"15.89%","color":"7093cb","prodClass":"权益管理"},
            {"assetPercent":"54.06%","color":"f5be76","prodClass":"(类)固定收益"},
            {"assetPercent":"10.72%","color":"BFE3FE","prodClass":"另类(非黄金)"},
            {"assetPercent":"10.96%","color":"009999","prodClass":"黄金管理"}
        ],
        "prodList":[
            {"assetId":"16","lowBuy":2633,"percent":"8.37%","prodClass":"现金管理","prodCode":"PA3012","prodName":"灵活宝1号"},
            {"assetId":"11","lowBuy":2499,"percent":"7.95%","prodClass":"权益管理","prodCode":"590008","prodName":"中邮战略"},
            {"assetId":"11","lowBuy":2499,"percent":"7.95%","prodClass":"权益管理","prodCode":"519983","prodName":"长信量化先锋混合"},
            {"assetId":"17","lowBuy":8503,"percent":"27.03%","prodClass":"(类)固定收益","prodCode":"200013","prodName":"长城增利A"},
            {"assetId":"17","lowBuy":8503,"percent":"27.03%","prodClass":"(类)固定收益","prodCode":"485111","prodName":"工银双利债券A"},
            {"assetId":"13","lowBuy":1686,"percent":"5.36%","prodClass":"另类(非黄金)","prodCode":"001229","prodName":"德邦福鑫"},
            {"assetId":"13","lowBuy":1686,"percent":"5.36%","prodClass":"另类(非黄金)","prodCode":"001335","prodName":"南方利众"},
            {"assetId":"14","lowBuy":3447,"percent":"10.96%","prodClass":"黄金管理","prodCode":"420005","prodName":"天弘周期策略混合"}
        ]
    },
    "responseCode":"200","responseMsg":"operate successfully"
}

router.post('/spss-aa-cust/report/showRecommendConfig', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
