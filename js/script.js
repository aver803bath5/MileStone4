angular.module('MyFarmBot', ['ngRoute', 'pansComponents'])

.controller('MainController', function($scope) {
 })

.controller('LoginAndRegister', function($scope) {
})

.controller('ManageMachine', function($scope) {
})

.controller('FieldController', function($scope) {
	$('.field').append('<tbody>');
	var tds = '<tr>';
	for(var i=0; i<10; i++) {
		tds += '<td>'
	}

	for(var i=0; i<10; i++) {
		$('.field').append(tds);
	}
})

.controller('TodoListController', function($scope) {
  var todoList = this;
  todoList.todos = [
          {text:'草莓', done:true, edit:false},
          {text:'大麻', done:false, edit:false}];
  
  todoList.getText = function(index) {
    return todoList.todos[index].text;
  }

  todoList.addTodo = function() {
	  if(todoList.todoText === '' ||  typeof todoList.todoText === 'undefined') {
	    return false;
	  }

          todoList.todos.push({text:todoList.todoText, done:false, edit:false});
          todoList.todoText = '';
        };
   
  todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
                    count += todo.done ? 0 : 1;
                  });
          return count;
        };
   
  todoList.archive = function() {
          var oldTodos = todoList.todos;
          todoList.todos = [];
          angular.forEach(oldTodos, function(todo) {
                    if (!todo.done) todoList.todos.push(todo);
                  });
        };

  todoList.edit = function(index) {
    if(todoList.todos[index].edit) {
      todoList.todos[index].edit = false;
    }else{
      todoList.todos[index].edit = true;
    }
  }
})

.controller('SequenceListController', function($scope) {
  var sequenceList = this;
  sequenceList.sequences = [
          {text:'失火', done:true, edit:false},
          {text:'麥當勞歡樂送', done:false, edit:false}];
  
  sequenceList.getText = function(index) {
    console.log(sequenceList.sequencesos[index].text);
    return sequenceList.sequences[index].text;
  }

  sequenceList.addSequence = function() {
	  if(sequenceList.sequenceText === '' ||  typeof sequenceList.sequenceText === 'undefined') {
	    return false;
	  }

          sequenceList.sequences.push({text:sequenceList.sequenceText, done:false, edit:false});
          sequenceList.sequenceText = '';
        };
   
  sequenceList.remaining = function() {
          var count = 0;
          angular.forEach(sequenceList.sequences, function(sequence) {
                    count += sequence.done ? 0 : 1;
                  });
          return count;
        };
   
  sequenceList.archive = function() {
          var oldSequences = sequenceList.sequences;
          sequenceList.sequences = [];
          angular.forEach(oldSequences, function(sequence) {
                    if (!sequence.done) sequenceList.sequences.push(sequence);
                  });
        };

  sequenceList.edit = function(index) {
    if(sequenceList.sequences[index].edit) {
      sequenceList.sequences[index].edit = false;
    }else{
      sequenceList.sequences[index].edit = true;
    }
  }
})

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/matchMachine.html',
    controller: 'MainController'
  });

  $routeProvider
  .when('/login', {
    templateUrl: '/login.html',
    controller: 'LoginAndRegister'
  });

  $routeProvider
  .when('/manageMachine', {
    templateUrl: '/manageMachine.html',
    controller: 'ManageMachine'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
