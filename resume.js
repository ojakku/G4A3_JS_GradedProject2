$(document).ready(function() {
    $.getJSON("Data.json", function(data) {
        console.log(data)
        $('.name').html(data.name);



    }).fail(function() {
        console.log("Error")
    })
})