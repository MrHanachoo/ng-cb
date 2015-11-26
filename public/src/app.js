/**
 * Created by med on 26/11/15.
 */

angular.module("ContactApp", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
       $routeProvider
           .when("/contacts", {
                   controller: 'ListController',
                   templateUrl: 'views/list.html'
           });
            $locationProvider.html5Mode(true);

});
