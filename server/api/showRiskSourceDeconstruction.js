var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":[
        {"assetName":"权益管理","percentage":"49.81%"},
        {"assetName":"类固收","percentage":"18.55%"},
        {"assetName":"另类","percentage":"22.36%"},
        {"assetName":"黄金","percentage":"9.16%"}
    ],"responseCode":"200","responseMsg":"operate successfully"}

router.post('/spss-aa-cust/report/showRiskSourceDeconstruction', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
