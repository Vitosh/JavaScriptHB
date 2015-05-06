var TodoApp = (function() {
  // private vars
  var tasks = [];
  var index = 0;

  // (optional) store the reference with the jQuery selectors here
  var refs = {
    addTask: "input#addTask",
    container: "#container"
  }

  // (optional) interface for setting the 
  var setSelectorRefs = function(refs){
  }

  var addTask = function(taskName) {
    tasks.push({
      name: taskName,
      id: index,
      finished: false
    });
    index++;
  };

  var finishTask = function(id) {
    tasks.forEach(function(task){
      if (id == task.id){
        task.finished = true;
      };
    });
    // tasks[id] = tasks[id] + "Finished!";
  };

  var displayList = function() {
    var taskList = $('#taskList');
    taskList.empty()

    // loop
    tasks.forEach(function(task){

      var taskId = task.id;

      var liTask = $('<li></li>');
      var chkFinishTask = $('<input type="checkbox"/>')
      chkFinishTask.click(function(){
        finishTask(taskId);
        displayList();
      })

      liTask
        .append(chkFinishTask)
        .append(task.name)

      if(task.finished){
        liTask.addClass("finished");
        chkFinishTask.attr("checked","checked");
      }

      taskList.append(liTask);
      
      // console.log(tasks[i]);
          
      // $(tasks).each(function(idx, li){
      //   var myTask = $(li);
      // });


        // var myDiv = $('#myDiv');
        // var InputType = $('<li><input type="checkbox"/>');
        // var InputText = taskName;

    // clear the contents
    // loop through the tasks
    // append each task
  };

  // public api
  return {
    addTask: addTask,
    finishTask: finishTask,
    displayList: displayList
  };
})();

// access via
/*
TodoApp.addTask("Do the dishes.");
TodoApp.addTask("Do the dishes again.");
TodoApp.finishTask(0);
TodoApp.addTask("Do the dishes every day.");
TodoApp.addTask("Do the dishes for a month.");
TodoApp.addTask("Run.");
TodoApp.displayList();
*/