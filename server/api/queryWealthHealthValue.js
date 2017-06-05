var express = require('express');
var router = express.Router();

var payload = {
    "body": {
        "allocation": {"cash": 30, "fixed": 0, "gold": 0, "interests": 70, "other": 0},
        "arank": "15",
        "healthValue": 29,
        "maxHealthValue": "34",
        "minHealthValue": "24"
    }, "responseCode": "200", "responseMsg": "operate successfully"
}

// 完成详细问卷提交获取资产配置方案
router.post('/spss-aa-cust/asset/queryWealthHealthValue', function (req, res) {
    var body = req.body;
    res.status(200).json(payload);
})

module.exports = router;
