(function() {
  'use strict';

  angular
    .module('welcome')
    .config(function($stateProvider) {
      $stateProvider
        .state('welcome', {
          url: '/welcome',
          controller: 'WelcomeController',
          controllerAs: 'vm',
          templateUrl: 'app/welcome/welcome.html'
        });
    })
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['logger', '$state'];
  /* @ngInject */
  function WelcomeController(logger, $state) {
    var vm = this;
    vm.title = 'Welcome';
    vm.buttonPress = function() {
      console.log('Button was pressed!');
      $state.go('form');
    };
    activate();

    function activate() {
      console.log(process.env.SERVER);
    }
  }
})();
