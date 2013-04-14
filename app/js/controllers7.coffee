'use strict'

PhoneListCtrl = ($scope, $http) ->
  $http.get('phones/phones.json').success (data) ->
    $scope.phones = data

  $scope.defaultOrderBy = 'age'

PhoneDetailCtrl = ($scope, $routeParams) ->
  $scope.phoneId = $routeParams.phoneId

