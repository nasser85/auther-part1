app.factory('LoginFactory', function($http) {
	var loginFactory = {};

	loginFactory.submitLogin = function(email, password) {
		return $http.post('/login', {email: email, password: password})
		.then(function(res) {
			console.log(res.data);
			return res.data;
		});
	}
	loginFactory.signUp = function(email, password) {
		return $http.post('/login/signup', {email: email, password: password})
		.then(function(res) {
			console.log(res.data);
			return res.data;
		});
	}
	return loginFactory;
})
