angular.module("MyApp")
	.config(MyConfig)

MyConfig.$inject = ["$routeProvider", "$locationProvider"];

function MyConfig($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: 'views/home-view.html',
			controller: 'CustomerController',
			controllerAs: 'ctrl'
		})
		.when('/about', {
			templateUrl: 'views/about-view.html'
		})
		.otherwise({
			redirectTo: '/'
		});			
}