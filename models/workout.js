const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: String,
      required: "Enter a day of workout"
    },
    exercises: [{
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name of workout"
      },
      duration: {
        type: Number,
        required: "Enter duration of workout"
      },
      weight: Number,
      reps: Number,
      sets: Number
    }]
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
