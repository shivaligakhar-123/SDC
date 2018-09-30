var app = angular.module("todoAngularSDC", []);

app.controller("mainCtrl", function(mainService) {
  var vm = this;
  this.newTask = "";
  this.tasks = { "make a todo list": "incomplete", dance: "complete" };
  this.taskName = Object.keys(this.tasks);
  this.alert = function() {
    alert("HI");
  };
  this.createTask = function() {
    console.log("hi");
    vm.tasks[vm.newTask] = "incomplete";
    vm.taskName = Object.keys(vm.tasks);
    vm.newTask = "";
  };
  this.deleteTask = function(task) {
    delete vm.tasks[task];
    vm.taskName.splice(vm.taskName.indexOf(task), 1);
  };
  mainService.getPosts().then(res => {
    vm.posts = res.data;
  });
});

app.filter("plural", function() {
  return function(input) {
    return input + "s";
  };
});

app.service("mainService", function($http) {
  this.getPosts = () => {
    return $http.get("https://jsonplaceholder.typicode.com/posts");
  };
});
