angular.module('MyFarmBot', ['ngRoute', 'nvd3', 'pansComponents', 'd3Components'])

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
	  if(todoList.todoText == '' || todoList.todoText == 'undefined') {
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
     if($('input[name=plantName]').val() == '') {
      return false;
     }

    if(todoList.todos[index].edit) {
      todoList.todos[index].edit = false;
    }else{
      todoList.todos[index].edit = true;
    }
  }
})

.controller('SequenceListController', function($scope) {
  $('.collapse').collapse();
  var sequenceList = this;
  sequenceList.sequences = [
          {
            name:'失火',
	    date: new Date(2017, 1, 29),
	    actions:[
		    {name: "澆水", time: new Date(1970, 0, 1, 14, 57, 0), done: false, edit: false},
                    {name: "採收", time: new Date(1970, 0, 1, 14, 20 , 0), done: false, edit: false}
	           ],
	    done: false,
	    edit: false
	  },
          {
            name:'麥當勞歡樂送',
	    date: new Date(2017, 1, 10),
	    actions:[
		    {name: "湮滅證據", time: new Date(1970, 0, 1, 16, 22, 0), edit: false}
	           ],
	    done:false,
	    edit:false
	  }

	];
  
  sequenceList.addSequence = function() {
	  if(sequenceList.sequenceName.$invalid) {
	    return false;
	  }
          
          sequenceList.sequences.push({name: sequenceList.sequenceName, date: new Date(), actions:[], done:false, edit:false});
          sequenceList.sequenceName = '';
        };

  sequenceList.addAction = function(index) {
	  if(!sequenceList.actionName) {
	    return false;
	  }
          sequenceList.sequences[index].actions.push({name: sequenceList.actionName, time: new Date(), done:false, edit:false});
          sequenceList.actionName = '';
        };

   
  sequenceList.remaining = function() {
          var count = 0;
          angular.forEach(sequenceList.sequences, function(sequence) {
                    count += sequence.done ? 0 : 1;
                  });
          return count;
        };
   
  sequenceList.archiveSequence = function() {
          var oldSequences = sequenceList.sequences;
          sequenceList.sequences = [];
          angular.forEach(oldSequences, function(sequence) {
                    if (!sequence.done) sequenceList.sequences.push(sequence);
                  });
        };

  sequenceList.archiveAction = function() {
          var oldSequences = sequenceList.sequences;
          angular.forEach(oldSequences, function(sequence) {
		    var oldActions = sequence.actions;
		    sequence.actions = [];
		    angular.forEach(oldActions, function(action) {
		      if (!action.done) sequence.actions.push(action);
		    });
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
