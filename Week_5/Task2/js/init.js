'use strict'

$(document).ready(function(){
    $('#buttonAdd').click(function(){
        var InputText = $('#idInputText');
        TodoApp.addTask(InputText.val());
    });

    $('#buttonDisplay').click(function(){
        TodoApp.displayList();
    });
    
});