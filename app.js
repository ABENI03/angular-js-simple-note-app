var notesApp = angular.module('notesApp', ['ngRoute'])
    

notesApp.config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider
            .when('/newnote', {
                templateUrl: 'views/newNote.html',
                controller:"NotesController"
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller:"NotesController"
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller:"NotesController"
            })
            .when('/detail/:noteid', {
                templateUrl: 'views/detail.html',
                controller:"DetailController"
            })
            .otherwise({
                redirectTo:"/home"
            });
    }
]);



notesApp.controller('NotesController', ['$scope' ,'$routeParams', function ($scope,$routeParams) {
    $scope.removeNote = function (id) {
        id = id == undefined ? $routeParams.noteid :id;
         $scope.notes= $scope.notes.filter(scopenote => scopenote.id != id)
        localStorage.setItem('notes' ,  JSON.stringify($scope.notes))

    }
    $scope.addNote=function (){
       
        var newNoteInput = {
            id: $scope.notes.length==!0 ?parseInt($scope.notes[$scope.notes.length-1].id) + 1:1,
            title: $scope.newNote.title,
            body: $scope.newNote.body

        }
       $scope.notes.push(newNoteInput)

    //    $scope.newNote.title=""
    //    $scope.newNote.body=""
       
       localStorage.setItem('notes' ,  JSON.stringify($scope.notes))
    }
    $scope.notes=''
    var notes =localStorage.getItem('notes')
    if(!notes){
        var initial = [{ id:1,title: 'Reminder', body: 'This is bla bla bla This is bla bla bla This is bla bla bla' }, { id:2,title: 'Reminder2', body: 'This is bla bla bla This is bla bla bla This is bla bla bla' }]
        initial = JSON.stringify(initial)
        localStorage.setItem('notes' , initial)
       $scope.notes=JSON.parse(localStorage.getItem('notes'))
    }
    else{
        $scope.notes=JSON.parse(localStorage.getItem('notes'))
    }
    $scope.temp='blaskajodkjadsk'
}])

notesApp.controller('DetailController', ['$scope' ,'$routeParams', function ($scope,$routeParams) {
         var noteid=$routeParams.noteid
        
         $scope.notes=JSON.parse(localStorage.getItem('notes'))
         var targetRecord=$scope.notes.filter(scopenote => scopenote.id==noteid)
        $scope.newNote=targetRecord[0]
        
         $scope.updateNote =function (){
            localStorage.setItem('notes' ,  JSON.stringify($scope.notes))
           
         }
}])
