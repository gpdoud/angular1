angular.module("MyApp")
	.controller("MyController", MyController);

MyController.$inject = [];

function MyController() {
	var self = this;
	self.about = "About My First AngularJS Application";
	self.names = ["Daniel", "Alex", "Pierson", "Greg", "Lisa"];
	self.technologies = [
		{ Company: 'Microsoft', Software: 'Visual Studio.net' }
		,{ Company: 'Microsoft', Software: 'SQL Server' }
		,{ Company: 'Amazon', Software: 'AWS' }
		,{ Company: 'Oracle', Software: 'Oracle DB' }
	];
	self.echo = "Type something to echo";
	self.UpdateEcho = function(str) {
		self.echo = str;
	}
	self.PopUp = function(message) {
		alert(message);
	}
}
