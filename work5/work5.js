var app = angular.module('myForm', [])
app.controller('formCtrl', function ($scope) {
  $scope.user = [
    Name= '',
    surname= '',
    email= '',
    phonenumber= '',
    password= '',
    confirmpassword= '',
]
  $scope.message = '';
  $scope.employees = [];


  $scope.formGroup = function () {
    if ($scope.user) {
      $scope.users.push({
        Name: $scope.Name,
        surname: $scope.surname,
        email: $scope.email,
        phonenumber: $scope.phonenumber,
        password: $scope.password,
        confirmpassword: $scope.confirmpassword,
      })
      console.log($scope.employees);
    }
  }
  if(password == confirmpassword)$scope.message = 'Password is matched'
  if(password == !confirmpassword)$scope.message = 'Reenter password'

})