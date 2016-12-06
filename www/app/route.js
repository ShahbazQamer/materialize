app.config(['$routeProvider',function($routeProvider) () {


$routeProvider
           .when('/home', {
	        templateUrl: 'route.html',
	        controller: 'HomeCtrl'
})
           .when('aboutus', {
  	       templateUrl:'aboutus.html',
  	       controller: ''AboutusCtrl'
  })
           .otherwise( '/'{
  	        templateUrl:'app/views/home.html'
}]);