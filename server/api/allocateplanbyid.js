var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":{"allcateType":"6","allocation":[{"assetId":"16","assetName":"现金管理","color":"cc0099","percentage":"8.37","products":[{"lowestBuy":"1000","productCode":"PA3012","productId":"2686170","productInvest":"2632.87","productName":"灵活宝1号","productRisk":"中低风险","productType":"3","returnRate":"5.15"}],"shortName":"现金管理","suggestInvest":"2632.87"},{"assetId":"11","assetName":"权益管理","color":"7093cb","percentage":"15.89","products":[{"lowestBuy":"0","productCode":"590008","productId":"2685795","productInvest":"2499.18","productName":"中邮战略","productRisk":"高风险","productType":"15","productTypename":"偏股型","returnRate":"19.19"},{"lowestBuy":"1","productCode":"519983","productId":"2685430","productInvest":"2499.18","productName":"长信量化先锋混合","productRisk":"高风险","productType":"15","productTypename":"偏股型","returnRate":"32.68"}],"shortName":"权益管理","suggestInvest":"4998.36"},{"assetId":"17","assetName":"(类)固定收益","color":"f5be76","percentage":"54.06","products":[{"lowestBuy":"1000","productCode":"200013","productId":"2685362","productInvest":"8502.56","productName":"长城增利A","productRisk":"中低风险","productType":"2","productTypename":"债券型","returnRate":"13.89"},{"lowestBuy":"10","productCode":"485111","productId":"2685298","productInvest":"8502.56","productName":"工银双利债券A","productRisk":"中低风险","productType":"2","productTypename":"债券型","returnRate":"11.70"}],"shortName":"类固收","suggestInvest":"17005.11"},{"assetId":"13","assetName":"另类(非黄金)","color":"BFE3FE","percentage":"10.72","products":[{"lowestBuy":"100","productCode":"001229","productId":"2684495","productInvest":"1686.04","productName":"德邦福鑫","productRisk":"中风险","productType":"8","productTypename":"混合型","returnRate":"0.00"},{"lowestBuy":"1000","productCode":"001335","productId":"2684721","productInvest":"5136","productName":"南方利众","productRisk":"中风险","productType":"8","productTypename":"混合型","returnRate":"0.00"}],"shortName":"另类","suggestInvest":"3372.08"},{"assetId":"14","assetName":"黄金管理","color":"009999","percentage":"10.96","products":[{"lowestBuy":"1000","productCode":"420005","productId":"2684852","productInvest":"3447.58","productName":"天弘周期策略混合","productRisk":"高风险","productType":"15","productTypename":"偏股型","returnRate":"-1.05"}],"shortName":"黄金","suggestInvest":"3447.58"}],"flux":67,"investAsset":"31456","label":"潜力短线型","purchas":50,"recommend":"0","remark":"英国退欧激发避险情绪，美国加息不确定性增加，人民币兑美元汇率承压，但同时对某种形式的货币宽松的预期也有所加强。","risk":38,"timeQuantum":"2016.10.12-2016.10.12","userproperty":"7","valueAtRisk":"9.46116","volatility":"7.38","yield":"6.24"},
"responseCode":"200","responseMsg":"operate successfully"};

router.post('/spss-aa-cust/asset/allocateplanbyid', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
