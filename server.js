var express = require ("express");
var app = express();
var path = require("path");
var PORT = 3000;

app.use("/static", express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var medications = [{
        id: 1,
        routeName: "aleve",
        name: "Aleve",
        dosage: 5,
        quantity:1,
        physician: "Dr. Dolittle"
    }, {
        id: 2,
        routeName : "tylenol",
        name: "Tylenol",
        dosage: 5,
        quantity:1,
        physician: "Dr. Dolittle"
    }, {
        id: 3,
        routeName : "capsules",
        name: "Sky-Lights",
        dosage: 5,
        quantity:1,
        physician: "Dr. Dolittle"
    }

] 
 // Routes 

 //basic route, sends the user to the landingpage
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "landingpage.html"));
  });

app.get("/add", function (req, res){
res.sendFile(path.join(__dirname, "add.html"));
})  
//   REST API - Representational State Transfer

  app.get("/api/medications", function(req, res) {
    return res.json(medications);
  });

//displays a single medication or returns false
  app.get("/api/medications/:medication", function(req, res) {
    
    var selected = req.params.medication;
    // console.log(selected);
  
    
    for (var i = 0; i < medications.length; i++) {
      if (selected === medications[i].routeName) {
        return res.json(medications[i]);
      }
    }
  
   
    return res.json(false);
  });

// Create new medications - takes in JSON input
  app.post("/api/medications", function(req, res) {
    var newmedication = req.body;
    // Remove spaces from newmedication using regEx Pattern
    newmedication.routeName = newmedication.name.replace(/\s+/g, "").toLowerCase();
    medications.push(newmedication);
  
    res.json(newmedication);
  });

// server listening
app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT);
});

