function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// A DAY
$(document).ready(function () { 

  // FETCHING DATA FROM JSON FILE 
  $.getJSON("schedule.json",  
          function (data) { 
      var student = ''; 

      // ITERATING THROUGH OBJECTS 
      $.each(data, function (key, value) { 

          //CONSTRUCTION OF ROWS HAVING 
          // DATA FROM JSON OBJECT 
          student += '<tr>'; 
          student += '<td>' +  
              value.Class_Name + '</td>'; 

          student += '<td>' +  
              value.Teacher_Name + '</td>'; 

          student += '<td>' +  
              value.Room_Number + '</td>'; 

          student += '<td>' +  
              value.Days + '</td>'; 

          student += '</tr>'; 
      }); 

      //INSERTING ROWS INTO TABLE  
      $('#table').append(student); 
  }); 
}); 

// B DAY 
// https://jsfiddle.net/amsv/15h74uy6/