app.factory('LoginFactory', function($http) {
	var loginFactory = {};
	var currentUser = {};
	loginFactory.submitLogin = function(email, password) {
		return $http.post('/login', {email: email, password: password})
		.then(function(res) {
			currentUser = res.data;
			console.log(res.data);
			return res.data;
		});
	}
	loginFactory.signUp = function(email, password) {
		return $http.post('/login/signup', {email: email, password: password})
		.then(function(res) {
			currentUser = res.data;
			console.log(res.data);
			return res.data;
		});
	}

	loginFactory.logout = function(){
		return $http.post('/login/logout')
		.then(function(data){
			currentUser={};
			return data.data;
		})
	}

	loginFactory.getCurrentUser = function(){
		return currentUser;
	}

	return loginFactory;
})
