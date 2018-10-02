var app = angular.module("todoAngularSDC", []);

app.controller("mainCtrl", function($scope, $http) {
  var vm = this;
  this.newTask = "";
  vm.tasks = [];

  this.createTask = function() {
    if (vm.newTask != "") {
      vm.tasks.push({ title: vm.newTask, status: false });
      vm.newTask = "";
    } else {
      alert("Fill the task field");
    }
  };
  this.deleteTask = function(task) {
    vm.tasks.splice(vm.tasks.indexOf(task), 1);
  };

  this.show = function() {
    console.log(vm.tasks);
  };

  $scope.$watch("$viewContentLoaded", function() {
    $http
      .get("https://the-list-3212e.firebaseio.com/data.json")
      .then(res => {
        return res.data;
      })
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          let status = data[i].status;

          let title = data[i].title;

          vm.tasks.push({
            title,
            status
          });
        }
      })
      .catch(e => {
        console.log(e);

        vm.tasks = [
          { title: "make a todo list", status: false },
          { title: "dance", status: true }
        ];
      });
  });

  $scope.$watch(
    function(scope) {
      return scope.vm.tasks;
    },
    function(n, o) {
      $http
        .put("https://the-list-3212e.firebaseio.com/data.json", n)
        .then(response => console.log(response), err => console.log(err));
    },
    true
  );
});
