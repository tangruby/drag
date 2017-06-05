var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":{
        "1":["6.24%","10.41%"],
        "2":["7.38%","26.81%"],
        "3":["0.85","0.39"],
        "4":["0.85%","0.39%"]
    },
    "responseCode":"200","responseMsg":"operate successfully"
}

router.post('/spss-aa-cust/report/showKeyFacts', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
