'use strict'

PhoneListCtrl = ($scope, $http) ->
  $http.get('phones/phones.json').success (data) ->
    $scope.phones = data

  $scope.defaultOrderBy = 'age'

PhoneDetailCtrl = ($scope, $routeParams, $http) ->
  $http.get("phones/#{$routeParams.phoneId}.json").success (data) ->
    $scope.phone = data

