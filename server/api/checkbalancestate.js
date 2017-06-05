var express = require('express');
var router = express.Router();


var payload = {
    "body":true,"responseCode":"200","responseMsg":"operate successfully"
};

router.post('/spss-aa-cust/asset/checkbalancestate', function (req, res) {
    var body = req.body;
    res.status(200).json(payload);
})


module.exports = router;
