


// Add new Medication

$("#add-btn").on("click", function (){
    console.log("Add button was clicked by me!!!")
    var newMedication = {
name:$("#med-name").val().trim(),
dosage:$("#med-mg").val().trim(),
quanity:$("#med-qty").val().trim(),
physician:$("#med-physician").val().trim(),

    }
  $.post("/api/medications", newMedication)
  .then(function(data){
console.log("New Medication has been added", data);
  }) 

});
// Search and display medication 
$("#search-btn").on("click", function (){
   
    var searchedMedication = $("#med-search").val().trim();

// Remove spaces from searchedMedication using RegEx Pattern
searchedMedication = searchedMedication.replace(/\s+/g, "").toLowerCase();


$.get("/api/medications/" + searchedMedication, function (data){
    console.log(data);
    if (data){
        $("#name").text(data.name);
        $("#mg").text(data.dosage);
        $("#qty").text(data.quantity);
        $("#physician").text(data.physician);
    } else {
        alert ("Medication Not Found.")
    }
})

})






// name: "Sky-Lights",
// dosage: 5,
// quantity:1,
// physician: "Dr. Dolittle"

// <td id="name">Medication Name</td>




// Materialize calendar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems,{
format:"dd mmmm yyyy",
autoClose: true,
yearRange: 50,


    });
  });

