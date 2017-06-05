var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
  	"body":"",                                                                                                                                                                                                                                                              
  	"responseCode":"200",       
  	"responseMsg":"操作成功"
};

router.post('/spss-aa-cust/asset/updateInvest', function (req, res) {
    var body = req.body; // query | params
    // setTimeout(function () {
        res.status(200).json(payload)
    // },3000);
})

module.exports = router;
