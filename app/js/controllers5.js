'use strict';
var PhoneListCtrl;

PhoneListCtrl = function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    return $scope.phones = data.splice(0, 5);
  });
  return $scope.defaultOrderBy = 'age';
};
