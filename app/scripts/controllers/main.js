'use strict';

angular.module('appApp').controller('MainCtrl', [
  '$scope',
  'model',
  function($scope, model) {
    var self = this;

    $scope.model = model;
    console.log($scope.model);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
