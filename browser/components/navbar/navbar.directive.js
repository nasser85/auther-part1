'use strict';

app.directive('navbar', function ($state, $location, $log, LoginFactory) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      scope.logout = function(){
        LoginFactory.logout()
        .then(function(data){
          console.log(data);
          $state.go('login');
        })
        .catch($log.error);
      }
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
    }
  }
});
