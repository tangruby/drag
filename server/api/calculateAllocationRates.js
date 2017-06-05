var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {"body":{"valueAtRisk":9.5400,"volatility":7.4400,"yield":5.7600},"responseCode":"200","responseMsg":"operate successfully"};

router.post('/spss-aa-cust/asset/calculateAllocationRates', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
