var express = require('express');
var router = express.Router();

router.get('/spss-aa-cust', function (req, res) {
    res.send('资产配置API');
});

module.exports = router;
