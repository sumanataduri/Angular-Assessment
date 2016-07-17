/*globals angular */
(function() {
    var app = angular.module('myapp', []);
    app.controller('DealsController', function($scope, $http) {
        $http.get('http://www.cheapshark.com/api/1.0/deals').then(function(response) {

            $scope.latestdeals = response.data;
            $scope.number = 10;
            $scope.group = function(num) {
                return new Array(num);
            };
        });
    });
    app.filter('score', function() {
        return function(items, scoreIndex, arraysize) {
            if (items !== undefined) {
                var groupitems = [];
                for (var i = 0; i < items.length; i++) {
                    var itemscore = Math.ceil(items[i].metacriticScore / 10) * 10;
                    if (itemscore == ((arraysize - scoreIndex) * 10)) {
                        groupitems.push(items[i]);
                    }

                }
                return groupitems;
            }
        };
    });
})();