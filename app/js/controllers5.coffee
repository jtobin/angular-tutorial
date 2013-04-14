'use strict'

PhoneListCtrl = ($scope, $http) ->
  $http.get('phones/phones.json').success (data) ->
    $scope.phones = data.splice(0, 5)

  $scope.defaultOrderBy = 'age'

