/**
 * Created by med on 26/11/15.
 */

angular.module("ContactsApp")
    .controller("ListController", function ($scope, Contact) {
       $scope.contacts = Contact.query();
        console.log($scope.contacts);
        $scope.fields = ["firstName", "lastName"];
        //console.log($scope.fields);
        $scope.sort = function (field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = "firstName";
        $scope.sort.order = false;
    });