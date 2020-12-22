const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: String,
   
    
  },

  exercise: 
   [
        {name: {
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
          type: String,
        }
      ],
      totalDuration: {
        type: Number,
        default: 0
    }
  
});

const Workout = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workout;