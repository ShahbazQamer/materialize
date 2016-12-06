 
 app.controller('myController', [function ($scope, $http){

 	$http.get('app/data/controllers/data.json').then(function(response){

 		$scope.myData = response.data.movies;
 	})

}]);

//  $http.get('data.json').success (function(response){
// $scope.data = response.data.;
// });