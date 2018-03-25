var myApp = angular.module('app', []);
//$http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3'
//[{"ccy":"EUR","base_ccy":"UAH","buy":"32.42308","sale":"32.42308"},{"ccy":"RUR","base_ccy":"UAH","buy":"0.46077","sale":"0.46077"},{"ccy":"USD","base_ccy":"UAH","buy":"26.27265","sale":"26.27265"},{"ccy":"BTC","base_ccy":"USD","buy":"7301.6347","sale":"8070.2279"}]
myApp.controller('MainCtrl', function ($scope,$http) {
    $http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').success(function(result){
        console.log(result);
        $scope.items = result;
      })
    });