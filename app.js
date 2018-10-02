var app = angular.module("todoAngularSDC", []);

app.controller("mainCtrl", function() {
  var vm = this;
  this.currStatusShow = 1;
  this.newTask = "";
  this.tasks = [
    { title: "make a todo list", status: false },
    { title: "dance", status: true }
  ];
  this.createTask = function() {
    // console.log("hi");
    vm.tasks.push({ title: vm.newTask, status: false });
    // console.log(vm.tasks);
    vm.newTask = "";
  };
  this.deleteTask = function(task) {
    vm.tasks.splice(vm.tasks.indexOf(task), 1);
  };
  //   mainService.getPosts().then(res => {
  //     vm.posts = res.data;
  //   });
  //   $scope.$watch(
  //     "tasks",
  //     function(a, b) {
  //       console.log(a);
  //       console.log(b);
  //       console.log("WOOAHH");
  //     },
  //     true
  //   );
});

// app.filter("plural", function() {
//   return function(input) {
//     return input + "s";
//   };
// });

// app.service("mainService", function($http) {
//   this.getPosts = () => {
//     return $http.get("https://jsonplaceholder.typicode.com/posts");
//   };
// });
