(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a623e6e2"],{d9d1:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_intro","type":"address"}],"name":"addMarketPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minute","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_minAmount","type":"uint256"},{"internalType":"uint256","name":"_maxAmount","type":"uint256"},{"internalType":"uint256","name":"_dayNum","type":"uint256"},{"internalType":"uint256","name":"_singleMarketInvest","type":"uint256"}],"name":"addMarketType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_BSNData","type":"address"},{"internalType":"address","name":"_oracle","type":"address"},{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_BETH","type":"address"},{"internalType":"address","name":"_BUSD","type":"address"},{"internalType":"address","name":"_windToken","type":"address"},{"internalType":"address","name":"_teamAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_dayNum","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"AddPoolMoney","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_windToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"GetReward","type":"event"},{"inputs":[{"internalType":"uint256","name":"_investType","type":"uint256"},{"internalType":"uint256","name":"_minute","type":"uint256"},{"internalType":"uint256","name":"_investAmount","type":"uint256"},{"internalType":"address","name":"_intro","type":"address"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_openBlock","type":"uint256"}],"name":"Invest","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"markerRedeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_trueAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_block","type":"uint256"}],"name":"MarkerRedeem","type":"event"},{"inputs":[{"internalType":"uint256","name":"_orderId","type":"uint256"}],"name":"openAward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_windAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_orderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"OpenAward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_dayNum","type":"uint256"}],"name":"receiveDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_dayNum","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_canReceive","type":"uint256"},{"indexed":true,"internalType":"address","name":"_user","type":"address"}],"name":"ReceiveDividends","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setAddMarketLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_min","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_max","type":"uint256"}],"name":"SetAddMarketLimit","type":"event"},{"inputs":[{"internalType":"address","name":"_BSNData","type":"address"}],"name":"setBSNDataAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetBSNDataAddress","type":"event"},{"inputs":[{"internalType":"uint256","name":"_dayBlockNum","type":"uint256"}],"name":"setDayBlockNum","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_new","type":"uint256"}],"name":"SetDayBlockNum","type":"event"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"setFactoryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetFactoryAddress","type":"event"},{"inputs":[{"internalType":"bool","name":"_have","type":"bool"}],"name":"setHaveWinUsd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_old","type":"bool"},{"indexed":false,"internalType":"bool","name":"_new","type":"bool"}],"name":"SetHaveWinUsd","type":"event"},{"inputs":[{"internalType":"bool","name":"_stop","type":"bool"}],"name":"setIsStop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_old","type":"bool"},{"indexed":false,"internalType":"bool","name":"_new","type":"bool"}],"name":"SetIsStop","type":"event"},{"inputs":[{"internalType":"address","name":"_oracle","type":"address"}],"name":"setOracleAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetOracleAddress","type":"event"},{"inputs":[{"internalType":"address","name":"_BETH","type":"address"},{"internalType":"address","name":"_BUSD","type":"address"}],"name":"setPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_BETH","type":"address"},{"indexed":false,"internalType":"address","name":"_BUSD","type":"address"}],"name":"SetPairAddress","type":"event"},{"inputs":[{"internalType":"uint256","name":"_failRate","type":"uint256"},{"internalType":"uint256","name":"_successRate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_failRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_successRate","type":"uint256"}],"name":"SetRate","type":"event"},{"inputs":[{"internalType":"address","name":"_teamAddress","type":"address"}],"name":"setTeamAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetTeamAddress","type":"event"},{"inputs":[{"internalType":"address","name":"_windToken","type":"address"}],"name":"setWindTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetWindTokenAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_dayNum","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_busdAmount","type":"uint256"}],"name":"ShareBonus","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addMarketMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addMarketMin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BSNData","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BUSDDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dayBlockNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"failRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"getBlockPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"},{"internalType":"uint256","name":"_minute","type":"uint256"}],"name":"getBlockUpAndDown","outputs":[{"internalType":"uint256","name":"upTotal","type":"uint256"},{"internalType":"uint256","name":"downTotal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurCycleIncome","outputs":[{"internalType":"uint256","name":"curAmount","type":"uint256"},{"internalType":"uint256","name":"marketInvest","type":"uint256"},{"internalType":"uint256","name":"curDayMarketTotal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dayNum","type":"uint256"}],"name":"getDividends","outputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthUsd","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketTypeIds","outputs":[{"internalType":"uint256[]","name":"_marketTypeIds","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPerUsdtWind","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderId","type":"uint256"}],"name":"getWin","outputs":[{"internalType":"uint256","name":"back","type":"uint256"},{"internalType":"uint256","name":"winTokenAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isHaveWinUsd","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"marketTypeIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"marketTypes","outputs":[{"internalType":"uint256","name":"minute","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"minAmount","type":"uint256"},{"internalType":"uint256","name":"maxAmount","type":"uint256"},{"internalType":"bool","name":"isExist","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"successRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"windToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"windTokenDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},fb9e:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_BUSD","type":"address"},{"internalType":"address","name":"_windToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"bool","name":"_access","type":"bool"}],"name":"AccessAllowedAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetBUSDAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"uint256","name":"_ratio","type":"uint256"}],"name":"SetPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_old","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetWindTokenAddress","type":"event"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BUSDDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"uint256","name":"_ratio","type":"uint256"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_intro","type":"address"}],"name":"addPoolMoney","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"allowAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"},{"internalType":"uint256","name":"_dayMarketTotal","type":"uint256"},{"internalType":"uint256","name":"_windToken","type":"uint256"}],"name":"changeCycle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"curDayStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayMinuteNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dayNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"denominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"denyAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_investAmount","type":"uint256"}],"name":"fail","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllrecord","outputs":[{"internalType":"uint256[]","name":"_recordIds","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"},{"internalType":"uint256","name":"_minute","type":"uint256"}],"name":"getBlockRecords","outputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dayNum","type":"uint256"}],"name":"getCurCycleData","outputs":[{"internalType":"uint256","name":"_windToken","type":"uint256"},{"internalType":"uint256","name":"totalInvest","type":"uint256"},{"internalType":"uint256","name":"_marketToTalMoney","type":"uint256"},{"internalType":"uint256","name":"marketAdd","type":"uint256"},{"internalType":"uint256","name":"dayMarketTotal","type":"uint256"},{"internalType":"uint256","name":"marketReduce","type":"uint256"},{"internalType":"uint256","name":"poolAmount","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"reduce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurDayNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurDayStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dayNum","type":"uint256"},{"internalType":"uint256","name":"_minute","type":"uint256"}],"name":"getDayMinuteNum","outputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_dayNum","type":"uint256"}],"name":"getIsDividend","outputs":[{"internalType":"bool","name":"isSet","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketToTalMoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getOrderById","outputs":[{"internalType":"address","name":"investor","type":"address"},{"internalType":"uint256","name":"investType","type":"uint256"},{"internalType":"uint256","name":"minute","type":"uint256"},{"internalType":"uint256","name":"investAmount","type":"uint256"},{"internalType":"uint256","name":"investBlock","type":"uint256"},{"internalType":"uint256","name":"investTime","type":"uint256"},{"internalType":"uint256","name":"openBlock","type":"uint256"},{"internalType":"uint256","name":"busdPerBeth","type":"uint256"},{"internalType":"uint256","name":"investDayNum","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPoolAddress","outputs":[{"internalType":"address[]","name":"_poolAddress","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_poolAddress","type":"address"}],"name":"getPoolInfo","outputs":[{"internalType":"uint256","name":"_ratio","type":"uint256"},{"internalType":"bool","name":"_isAdd","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPoolRatio","outputs":[{"internalType":"uint256","name":"ratio","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProportion","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minute","type":"uint256"},{"internalType":"uint256","name":"_dayNum","type":"uint256"}],"name":"getSingleMarketInvest","outputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_dayNum","type":"uint256"}],"name":"getUserDayMarket","outputs":[{"internalType":"uint256","name":"_marketAmount","type":"uint256"},{"internalType":"uint256","name":"_trueAmount","type":"uint256"},{"internalType":"bool","name":"_isSet","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256[]","name":"_recordIds","type":"uint256[]"},{"internalType":"uint256","name":"marketProvide","type":"uint256"},{"internalType":"bool","name":"isMarker","type":"bool"},{"internalType":"address","name":"intro","type":"address"},{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_investor","type":"address"},{"internalType":"uint256","name":"_investType","type":"uint256"},{"internalType":"uint256","name":"_minute","type":"uint256"},{"internalType":"uint256","name":"_investAmount","type":"uint256"},{"internalType":"uint256","name":"_investBlock","type":"uint256"},{"internalType":"uint256","name":"_investTime","type":"uint256"},{"internalType":"uint256","name":"_openBlock","type":"uint256"},{"internalType":"uint256","name":"_busdPerBeth","type":"uint256"},{"internalType":"address","name":"_intro","type":"address"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"isDividend","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pools","outputs":[{"internalType":"uint256","name":"ratio","type":"uint256"},{"internalType":"address","name":"pool","type":"address"},{"internalType":"bool","name":"isAdd","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"_dayNum","type":"uint256"},{"internalType":"address","name":"_teamAddress","type":"address"},{"internalType":"uint256","name":"_teamAmount","type":"uint256"}],"name":"receiveDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_BUSD","type":"address"}],"name":"setBUSDAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"uint256","name":"_ratio","type":"uint256"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minute","type":"uint256"},{"internalType":"uint256","name":"_dayNum","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSingleMarketInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setUserReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_windToken","type":"address"}],"name":"setWindTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"singleMarketInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalMarketWind","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_investAmount","type":"uint256"}],"name":"win","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"windToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawPoolMoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]')}}]);
//# sourceMappingURL=chunk-a623e6e2.1a8770aa.js.map