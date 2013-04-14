'use strict';
var PhoneDetailCtrl, PhoneListCtrl;

PhoneListCtrl = function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    return $scope.phones = data;
  });
  return $scope.defaultOrderBy = 'age';
};

PhoneDetailCtrl = function($scope, $routeParams) {
  return $scope.phoneId = $routeParams.phoneId;
};
