(function() {
  'use strict';
  require('dotenv').config();
  angular.module('app', [
    'app.core',
    'app.widgets',
    'welcome',
    'form',
    'app.services',
    'app.admin',
    'app.dashboard',
    'app.layout'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.when('', '/').when('/', '/welcome').when('/welcome', '/welcome')
    .when('/form', '/form');
  });

})();
