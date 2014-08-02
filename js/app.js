var app = angular.module("FoursquareApp", ["ngResource", "ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    // main route
    .when("/explore", {
        controller: "PlacesExplorerController",
        templateUrl: "views/placesresults.html"
    })
    // no match
    .otherwise({
        redirectTo: "/explore"
    });
});
