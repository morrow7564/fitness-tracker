const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: String,
   
    
  },

  exercises: 
   [
        { 
          name: {
          type: String,
          trim: true,
          required: 'Enter an exercise name',
        },
        duration: {
          type: Number,
          required: 'Enter an exercise duration in minutes',
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
        
        }
      ],
      
   
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;