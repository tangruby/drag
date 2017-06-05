var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
	"body":{"id":"1000","timestamp":"1464660161531"},
	"responseCode":"200",
	"responseMsg":"operate successfully"
	}

router.post('/spss-aa-cust/asset/saveOrderAllocation', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
