var notesApp=angular.module('notesApp',[])
// var notes=[{title:'Reminder',body:'This is bla bla bla This is bla bla bla This is bla bla bla'},{title:'Reminder2',body:'This is bla bla bla This is bla bla bla This is bla bla bla'}]
// module.exports=notes
notesApp.controller('NotesController',['$scope',function($scope){
    $scope.notes=[{title:'Reminder',body:'This is bla bla bla This is bla bla bla This is bla bla bla'},{title:'Reminder2',body:'This is bla bla bla This is bla bla bla This is bla bla bla'}]
}])