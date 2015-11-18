var stocksApp = angular.module('stockApp', []);

stocksApp.controller('stocksController', function ($scope, $http){
	$scope.getStocks = function(){
		var encodedTickers = encodedURIComponent($scope.userStocks);
		url = 

		$http.get(url).success(function (stockData){
			// console.log(stockData);
			// console.log(encodedTickers)
			$scope.listOfStocks = stockData.query.results.quote;

			// $scope.loadStock($scope)

			console.log(stockData.query.results);
			console.log([stockData.query.results]);

		});
	}

	$scope.loadStock = function(stockData){
		//init Array
		$scope.dataList = [];
		for(name in stockData){
			$scope.dataList.push({
				prop: name,
				value: stockData[name]
			})
		}
	}





});
