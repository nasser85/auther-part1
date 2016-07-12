app.controller('LoginCtrl', function($scope, LoginFactory, $state, $log) {

  $scope.currentUser = LoginFactory.getCurrentUser();
	$scope.submitLogin = function() {
		return LoginFactory.submitLogin($scope.userEmail, $scope.userPassword)
		.then(function(user) {
			$state.go('stories');
		})
		.catch($log.error);
	}
})
