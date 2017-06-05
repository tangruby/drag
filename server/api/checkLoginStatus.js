var express = require('express');
var router = express.Router();

var payload = {
    "body": {
        "status": "1"
    }, "responseCode": "200", "responseMsg": "operate successfully"
}

// 完成详细问卷提交获取资产配置方案
router.post('/spss-aa-cust/asset/checkLoginStatus', function (req, res) {
    var body = req.body;
    res.status(200).json(payload);
})

module.exports = router;
