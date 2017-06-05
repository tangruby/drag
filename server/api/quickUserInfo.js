var express = require('express');
var router = express.Router();
var casual = require('casual');

var payload = {
    "body": {
        "arank": "10",
        "cash": "100.0",
        "custCode": "189630173",
        "fixed": "0.0",
        "gold": "0.0",
        "healthValue": "14.0",
        "interests": "0.0",
        "maxHealthValue": "19",
        "minHealthValue": "9",
        "other": "0.0"
    }, "responseCode": "200", "responseMsg": "operate successfully"
}

// 完成详细问卷提交获取资产配置方案
router.post('/spss-aa-cust/asset/quickUserInfo', function (req, res) {
    var body = req.body;
    res.status(200).json(payload);
})

module.exports = router;
