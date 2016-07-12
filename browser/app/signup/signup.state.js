'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('signup', {
    url: '/signup',
    controller: 'SignUpCtrl',
    templateUrl: '/browser/app/signup/signup.html'
  });
});
