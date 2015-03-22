app.controller('HomeController', ['$scope', '$location','DataService', '$modal', function ($scope, $location, DataService, $modal) {
	
	$scope.ShowCreateEmployeeForm = function () {
		// $location.path('/newEmployeeForm');
		var modalInstance = $modal.open({			
			templateUrl: 'app/views/templates/ef.html',
			controller: 'efController',
			backdrop: 'static'
		});

	};

	$scope.ShowUpdateEmployeeForm = function (id) {
		// $location.path('/updateEmployeeForm/' + id);
		var modalInstance = $modal.open({			
			templateUrl: 'app/views/templates/ef.html',
			controller: 'efController',
			backdrop: 'static'
		});
	};
}]);