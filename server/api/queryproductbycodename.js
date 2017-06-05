var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":[
        {"lowestBuy":1000,"productCode":"400005","productId":"3568637","productName":"东方金账簿货币A类","productType":"3","productTypename":"货币型","returnRate":"2.33","risklevel":"低风险"},
        {"lowestBuy":1,"productCode":"400006","productId":"4042103","productName":"东方金账簿货币B类","productType":"3","productTypename":"货币型","returnRate":"2.57","risklevel":"低风险"},
        {"lowestBuy":5000000,"productCode":"583101","productId":"3566437","productName":"东吴货币B","productType":"3","productTypename":"货币型","returnRate":"2.95","risklevel":"低风险"},
        {"lowestBuy":1,"productCode":"583001","productId":"3566436","productName":"东吴货币A","productType":"3","productTypename":"货币型","returnRate":"2.70","risklevel":"低风险"}
    ],
    "responseCode":"200","responseMsg":"operate successfully"
};

// assetId:16
// pageSize:100
// productName:东
// _:1476422217092
// callback:jsonp2
router.post('/spss-aa-cust/product/queryproductbycodename', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
