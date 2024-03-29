'use strict';angular.module('phonecat', []).config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/phones', {
      templateUrl: 'partials/phone-list.html',
      controller: PhoneListCtrl
    }).when('/phones/:phoneId', {
      templateUrl: 'partials/phone-detail.html',
      controller: PhoneDetailCtrl
    }).otherwise({
      redirectTo: '/phones'
    });
  }
]);
