var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":"",
    "responseCode":"200",
    "responseMsg":"operate successfully"
};
router.post('/spss-aa-cust/asset/confirmbalance', function (req, res) {
    var body = req.body;
    res.status(200).json(payload);
})

module.exports = router;
