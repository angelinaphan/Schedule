$(document).ready(function () {

    $.getJSON( "schedule.json", function() {
    })

    $.each( data.schedule, function(i, schedule) {
        console.log(schedule);
    })
  });

  $("p").click(function(){
    // action goes here!!
  });                              

// https://stackoverflow.com/questions/56822076/fetching-json-data-to-html-table-onclick-button
// https://www.geeksforgeeks.org/jquery-getjson-method/
// https://www.javatpoint.com/jquery-getjson-method