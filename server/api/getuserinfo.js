var express = require('express');
var router = express.Router();
var casual = require('casual');

var codes = [
    {responseCode:200,responseMsg:'操作成功'},
    {responseCode:601,responseMsg:'操作失败'},
    {responseCode:602,responseMsg:'参数不合法或不正确'},
    {responseCode:611,responseMsg:'拿不到cookies'},
    {responseCode:612,responseMsg:'拿不到指定ticket那个cookie'},
    {responseCode:613,responseMsg:'用户未登录、或登录超时'},
    {responseCode:700,responseMsg:'没有用户信息，需要进行快速问卷'},
    {responseCode:701,responseMsg:'配置模型计算参数不足'},
    {responseCode:702,responseMsg:'matlab模型错误，工具异常'},
    {responseCode:703,responseMsg:'模型计算失败'},
    {responseCode:704,responseMsg:'用户定位信息不存在'},
    {responseCode:705,responseMsg:'用户投资金额不存在'},
    {responseCode:706,responseMsg:'获取投顾推荐失败，可能是时间太长过期了'},
    {responseCode:707,responseMsg:'保存配置方案失败'}
];
var userInfo = [
    {"body":{"name":"占二六","sex":"1","threshold":"1"},"responseCode":"200","responseMsg":"operate successfully"},
    {"body":{"name":"占二六","sex":"1","threshold":"0"},"responseCode":"200","responseMsg":"operate successfully"},
    {body:"",responseCode:601,responseMsg:'操作失败'},
    {body:"",responseCode:602,responseMsg:'参数不合法或不正确'},
    {body:"",responseCode:611,responseMsg:'拿不到cookies'},
    {body:"",responseCode:612,responseMsg:'拿不到指定ticket那个cookie'},
    {body:"",responseCode:613,responseMsg:'用户未登录、或登录超时'},
    {body:"",responseCode:700,responseMsg:'没有用户信息，需要进行快速问卷'},
    {body:"",responseCode:701,responseMsg:'配置模型计算参数不足'},
    {body:"",responseCode:702,responseMsg:'matlab模型错误，工具异常'},
    {body:"",responseCode:703,responseMsg:'模型计算失败'},
    {body:"",responseCode:704,responseMsg:'用户定位信息不存在'},
    {body:"",responseCode:705,responseMsg:'用户投资金额不存在'},
    {body:"",responseCode:706,responseMsg:'获取投顾推荐失败，可能是时间太长过期了'},
    {body:"",responseCode:707,responseMsg:'保存配置方案失败'}
];

var payload = casual.random_element(userInfo)

var payload1 = {
    "body":{
        "name":"PAZQ1601221506549817",
        "sex":"1",
        "threshold":"1",
        "userCode":"189630032"
    },
    "responseCode":"200",
    "responseMsg":"operate successfully"
}
// 根据ticket查询用户信息
// router.post('/spss-aa-cust/custlogin/getuserinfo', function (req, res) {
//     res.json(payload);
// });

// 根据ticket查询用户信息
router.post('/spss-aa-cust/custlogin/getuserinfo', function (req, res) {
    var body = req.body;
    res.json(payload1);
});

module.exports = router;
