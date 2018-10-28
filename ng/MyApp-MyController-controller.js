angular.module("MyApp")
	.controller("CustomerController", CustomerController);

CustomerController.$inject = ["$http"];

function CustomerController($http) {
	var self = this;
	self.about = "About My First AngularJS Application";

	self.List = function() {
		$http.get("http://localhost:50385/api/Customers")
			.then(
				function(resp) { // success
					self.Customers = resp.data;
					console.log("List Successful", self.Customers);
				}, 
				function(err) { // fail
					console.log("List Failed", err);
				}
			);
	}
	self.List();
}
