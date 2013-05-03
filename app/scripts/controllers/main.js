'use strict';

angular.module('angularLocalisationApp')
  .controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.changeLanguage = function (lang) {
      $rootScope.currentLanguage = lang;
    }
  }]);

  