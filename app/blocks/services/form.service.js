(function() {

  'use strict';

  angular
    .module('app.services')
    .factory('formService', formService);

  /* @ngInject */
  formService.$inject = ['$http', '$q', '$httpParamSerializer', '$log'];

  function formService($http, $q, $httpParamSerializer, $log) {
    var url = '45.33.67.179' + '/registerSearch';

    return {
      registerSearch: registerSearch
    };

    function registerSearch(search, success, failure) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.post(url, {
        'email': search.email,
        'term': search.term,
        'subjectName': search.subjectName,
        'classNum': search.classNum
      }).then(function(res) {
        if (search.username && search.password) {
          deferred.resolve('registration successful!');
        } else {
          deferred.reject({error: 'invalid registration request'});
        }
      }, function(err) {
        deferred.reject({error: err});
      });
      return promise;
    }
  }
})();
