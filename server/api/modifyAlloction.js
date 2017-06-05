var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
	"body":{
		"userPlan":{
			"allcateType":"6","allocation":[
				{"assetId":"16","assetName":"现金管理","color":"f8bbef","indexname":"wind货币基金指数","indexprofit":2.77,"percentage":"9.21","products":[{"productCode":"PA3012"}],"rate":"2.8","shortName":"现金"},
				{"assetId":"11","assetName":"权益","color":"acd9eb","indexname":"沪深300全收益","indexprofit":8.32,"percentage":"9.57","products":[{"productCode":"163412"},{"productCode":"000390"}],"rate":"10.41","shortName":"权益"},
				{"assetId":"17","assetName":"(类)固定收益","color":"ffc6b6","indexname":"中债总财富","indexprofit":3.58,"percentage":"62.63","products":[{"productCode":"000128"},{"productCode":"200013"}],"rate":"5.14","shortName":"类固收"},
				{"assetId":"13","assetName":"另类(非黄金)","color":"fffab6","indexname":"好买对冲基金","indexprofit":7.3,"percentage":"8.61","products":[{"productCode":"000753"},{"productCode":"001335"}],"rate":"8.43","shortName":"另类"},
				{"assetId":"14","assetName":"黄金","color":"c3e3a7","indexname":"SGE黄金","indexprofit":5,"percentage":"9.98","products":[{"productCode":"000216"}],"rate":"6.07","shortName":"黄金"}],
			"date":"1477983955680","flux":84,"investAsset":"10000","label":"成长消费型","purchas":17,"risk":17,"userproperty":"11","valueAtRisk":"7.73046","volatility":"6.03","yield":"5.81"}},"responseCode":"200","responseMsg":"operate successfully"};

router.get('/spss-aa-cust/asset/modifyAlloction', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
