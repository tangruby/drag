module.exports = function(app){

    app.use('/', require('./api/index.js'));
    app.use('/', require('./api/getuserinfo.js'));
    app.use('/', require('./api/userConfigureStatus.js'));
    app.use('/', require('./api/showTwoAllocation.js'));
    app.use('/', require('./api/quickAllocation.js'));
    app.use('/', require('./api/balance.js'));
    app.use('/', require('./api/communion.js'));
    app.use('/', require('./api/allocationReturnRateV2.js'));
    app.use('/', require('./api/expectdProfit.js'));
    app.use('/', require('./api/hisallocateplanlist.js'));
    app.use('/', require('./api/allocateplanbyid.js'));
    app.use('/', require('./api/showUser.js'));
    app.use('/', require('./api/showKeyFacts.js'));
    app.use('/', require('./api/showRecommendConfig.js'));
    app.use('/', require('./api/showRiskSourceDeconstruction.js'));
    app.use('/', require('./api/showCorrs.js'));
    app.use('/', require('./api/recommendProdsNew.js'));
    app.use('/', require('./api/queryrecommendproduct.js'));
    app.use('/', require('./api/queryproductbycodename.js'));
    app.use('/', require('./api/checkbalancestate.js'));
    app.use('/', require('./api/questionnaire.js'));
    app.use('/', require('./api/modifyAlloction.js'));
    app.use('/', require('./api/calculateAllocationRates.js'));
    app.use('/', require('./api/saveUserDefineAllocation.js'));
    app.use('/', require('./api/confirmbalance.js'));
    app.use('/', require('./api/updateInvest.js'));
    app.use('/', require('./api/saveOrderAllocation.js'));
    app.use('/', require('./api/saveAllocation.js'));
    app.use('/', require('./api/saveUserDefineAllocationNew.js'));
    app.use('/', require('./api/quickUserInfo.js'));
    app.use('/', require('./api/queryWealthHealthValue.js'));
    app.use('/', require('./api/checkLoginStatus.js'));
    app.use('/', require('./api/products.js'));
}
