/**
 * Created by med on 26/11/15.
 */

angular.module("ContactsApp")
    .controller("ListController", function ($scope, $location, Contact) {
       $scope.contacts = Contact.query();
        //console.log($scope.contacts);
        $scope.fields = ["firstName", "lastName"];
        //console.log($scope.fields);
        $scope.sort = function (field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = "firstName";
        $scope.sort.order = false;

        $scope.show = function(id) {
            $location.url("/contact/"+ id);
        };
    })
    .controller('NewController', function ($scope, Contact, $location) {
        $scope.contact = new Contact({
            firstname: ["", "text"],
            lastname: ["", "text"],
            email: ["", "email"],
            homePhone: ["", "tel"],
            cellPhone: ["", "tel"],
            birthday: ["", "date"],
            website: ["", "url"],
            address: ["", "text"]
        });

        $scope.save = function () {
            if ($scope.newContact.$invalid) {
                $scope.$broadcast('record:invalid')
            }
        };

    });