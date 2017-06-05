var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":{
        "Flux":67,"InvestAsset":31456,"Risk":38,"username":"占二六女士"
    },
    "responseCode":"200","responseMsg":"operate successfully"
};

router.post('/spss-aa-cust/report/showUser', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
