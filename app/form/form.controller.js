(function() {
  'use strict';

  angular
    .module('form')
    .config(function($stateProvider) {
      $stateProvider
        .state('form', {
          url: '/form',
          controller: 'FormController',
          controllerAs: 'vm',
          templateUrl: 'app/form/form.html'
        });
    })
    .controller('FormController', FormController);

  FormController.$inject = ['logger', 'formService'];
  /* @ngInject */
  function FormController(logger, formService) {
    var vm = this;
    vm.title = 'Form';
    vm.search = {};
    vm.register = function() {
      formService.registerSearch(vm.search);
      console.log('Register has been called');
    };
    activate();

    function activate() {
      logger.info('Activated Form View');
      console.log("This form view has been activated");
    }
  }
})();
