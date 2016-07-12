app.controller('SignUpCtrl', function($scope, LoginFactory, $log, $state) {

  $scope.currentUser = LoginFactory.getCurrentUser();

	$scope.signUp = function() {
		return LoginFactory.signUp($scope.userEmail, $scope.userPassword)
		.then(function(user) {
			$state.go('stories');
		})
		.catch($log.error);
	}

})
