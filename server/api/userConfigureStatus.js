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
var checkbalancestate = [
    {body:true,responseCode:200,responseMsg:'操作成功'},
    {body:false,responseCode:200,responseMsg:'操作成功'},
    {body:false,responseCode:601,responseMsg:'操作失败'},
    {body:false,responseCode:602,responseMsg:'参数不合法或不正确'},
    {body:false,responseCode:611,responseMsg:'拿不到cookies'},
    {body:false,responseCode:612,responseMsg:'拿不到指定ticket那个cookie'},
    {body:false,responseCode:613,responseMsg:'用户未登录、或登录超时'},
    {body:false,responseCode:700,responseMsg:'没有用户信息，需要进行快速问卷'},
    {body:false,responseCode:701,responseMsg:'配置模型计算参数不足'},
    {body:false,responseCode:702,responseMsg:'matlab模型错误，工具异常'},
    {body:false,responseCode:703,responseMsg:'模型计算失败'},
    {body:false,responseCode:704,responseMsg:'用户定位信息不存在'},
    {body:false,responseCode:705,responseMsg:'用户投资金额不存在'},
    {body:false,responseCode:706,responseMsg:'获取投顾推荐失败，可能是时间太长过期了'},
    {body:false,responseCode:707,responseMsg:'保存配置方案失败'}
];

var payload = casual.random_element(checkbalancestate);

router.post('/spss-aa-cust/asset/userConfigureStatusNew', function (req, res) {
    res.json({
        body: {configureStatus: "1"}, responseCode: "200", responseMsg: "operate successfully"
    })
});

module.exports = router;
