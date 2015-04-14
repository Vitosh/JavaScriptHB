$(document).ready(function(){
    console.log("READY!");

    $('#buttonAdd').click(function(){
        var ulMyList = $('#myList')
        var InputText = $('#idInputText')

        ulMyList.append($('<li>').append(InputText.val()));
    });
});


// $(document).ready(function(){
//     console.log("READY!");

//     $('#buttonAdd').click(function(){
//         var InputText = $('#idInputText')
//         var myDiv = $('myDiv');
//         var InputType = $('<input type="checkbox"/>');

//         myDiv.append(InputText.text());
//             });
// });