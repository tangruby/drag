var express = require('express');
var router = express.Router();

/*有重新平衡的情况下*/
var payload = {
    "body":{
                "new":{"allcateType":"6","allocation":[{"assetId":"14","assetName":"现金管理类","color":"cc0099","percentage":"22.60","shortName":"现金类","suggestInvest":"11300"},{"assetId":"2","assetName":"权益类","color":"f8hg89","percentage":"14.64","shortName":"权益类","suggestInvest":"7320"},{"assetId":"3","assetName":"(类)固定收益类","color":"f5be76","percentage":"41.30","shortName":"固收类","suggestInvest":"20650"},{"assetId":"15","assetName":"另类(非黄金)","color":"BFE3FE","percentage":"16.81","shortName":"另投类","suggestInvest":"8405"},{"assetId":"16","assetName":"黄金投资类","color":"009999","percentage":"4.64","shortName":"黄金类","suggestInvest":"2320"}],"flux":52,"investAsset":"50000","label":"成长消费型","purchas":31,"recommend":"0","remark":"本期重点：英国退欧激发避险情绪，美国加息不确定性增加，人民币兑美元汇率承压，但同时对某种形式的货币宽松的预期也有所加强。","risk":32,"userproperty":"11","valueAtRisk":"15.92360","volatility":"9.68","yield":"5.51","timeQuantum":"2016.10.13-2016.10.14"},
                "old":{"allcateType":"6","allocation":[{"assetId":"14","assetName":"现金管理类","color":"cc0099","percentage":"6.60","suggestInvest":"3300"},{"assetId":"2","assetName":"权益类","color":"7093cb","percentage":"17.67","suggestInvest":"8835"},{"assetId":"3","assetName":"(类)固收类","color":"f5be76","percentage":"49.84","suggestInvest":"24920"},{"assetId":"15","assetName":"另类投资类","color":"BFE3FE","percentage":"20.28","suggestInvest":"10140"},{"assetId":"16","assetName":"黄金投资类","color":"009999","percentage":"5.60","suggestInvest":"2800"}],"flux":52,"investAsset":"50000","label":"成长消费型","purchas":31,"recommend":"0","risk":32,"userproperty":"11","valueAtRisk":"15.92360","volatility":"9.68","yield":"7.09","timeQuantum":"2016.10.13-2016.10.14"}
            },"responseCode":"200","responseMsg":"operate successfully"
};

/*无重新平衡的情况下*/
// var payload = {
//     "body":{
//             "oldPlan":{"allcateType":"6","allocation":[{"assetId":"14","assetName":"现金管理类","color":"cc0099","percentage":"6.60","suggestInvest":"3300"},{"assetId":"2","assetName":"权益类","color":"7093cb","percentage":"17.67","suggestInvest":"8835"},{"assetId":"3","assetName":"(类)固收类","color":"f5be76","percentage":"49.84","suggestInvest":"24920"},{"assetId":"15","assetName":"另类投资类","color":"BFE3FE","percentage":"20.28","suggestInvest":"10140"},{"assetId":"16","assetName":"黄金投资类","color":"009999","percentage":"5.60","suggestInvest":"2800"}],"flux":52,"investAsset":"50000","label":"成长消费型","purchas":31,"recommend":"0","risk":32,"userproperty":"11","valueAtRisk":"15.92360","volatility":"9.68","yield":"7.09","timeQuantum":"2016.10.13-2016.10.14"}
//             },"responseCode":"200","responseMsg":"operate successfully"
// };

router.post('/spss-aa-cust/asset/balancecalculate', function (req, res) {
    var body = req.body;
    res.status(200).json(payload);
})

// router.post('/spss-aa-cust/asset/confirmbalance', function (req, res) {
//     res.json({
//         "body":"",
//         "responseCode":"200",
//         "responseMsg":"operate successfully"
//     });
// })

module.exports = router;
