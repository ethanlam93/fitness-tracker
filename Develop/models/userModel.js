const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date },
    exercise: [{
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
            required: [true, "Please give an exercise name"]
        },
        duration: {
            type: Number,
            trim: true,
            required: [true, "Please give an exercise duration"]
        },
        weight: {
            type: Number,
            trim: true,
            required: [true, "Please give a weight estimate"]
        },
        reps: {
            type: Number,
            trim: true,
            required: [true, "Please give a number of reps"]
        },
        sets: {
            type: Number,
            trim: true,
            required: [true, "Please give a number of sets"]
        }
    }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;