var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body":[
        {"1*1":1.0000,"1*2":-0.0883,"1*3":0.5874,"1*4":0.0398,"2*1":-0.0883,"2*2":1.0000,"2*3":-0.1375,"2*4":-0.0495,"3*1":0.5874,"3*2":-0.1375,"3*3":1.0000,"3*4":0.1779,"4*1":0.0398,"4*2":-0.0495,"4*3":0.1779,"4*4":1.0000},
        {"1":"权益管理","2":"类固收","3":"另类","4":"黄金"}
    ],
    "responseCode":"200","responseMsg":"operate successfully"
}

router.post('/spss-aa-cust/report/showCorrs', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
