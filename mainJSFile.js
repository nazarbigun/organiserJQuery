$(document).ready(function(){
    $("#button").click(function(){
        var toAdd = $('.input-area[name=checkListItem]').val();
        $('#myTasksList').append('<li> <div class = "tasks"> <button type="button" class="btn btn-default btn-lg active doneButton">&#9872</button> <textarea class ="form-control input-area task" rows="2">'
            + toAdd + '</textarea> <button type="button" class="btn btn-default btn-lg active starredButton">&#9734</button> </div> </li>');
    })
});

$.getJSON('package.json', function(data) {
    var output="";
    for (var i in data.items) {
        output += '<li> <div class = "tasks"> <button type="button" class="btn btn-default btn-lg active doneButton">&#9872</button> <textarea class ="form-control input-area task" rows="2">'
            + data.items[i].text + '</textarea> <button type="button" class="btn btn-default btn-lg active starredButton">&#9734</button> </div> </li>';
    }
    document.getElementById("myTasksList").innerHTML = output;
    });




