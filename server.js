var express = require("express");
var path = require("path")
let db = require("./model");
const mongoose = require("mongoose");


var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


// app.use(routes);
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.get("/exercise", function(req,res){
    res.sendFile(path.join(__dirname,"./public/exercise.html"))
})

app.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

// GET route for getting all workouts for the dashboard page
app.get("/api/workouts", (req, res) => {
    db.find({})
      .then(dbworkout => {
          console.log(dbworkout)
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


   // POST route for creating a brand new workout
   app.post("/api/workouts", (req, res) => {
    db.create({})
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

   // PUT route for updating an existing workout with a newly created exercise 
   app.put("/api/workouts/:id", (req, res) => {
    db.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, {new:true})
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
});



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });