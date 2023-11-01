const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
    exercise: {type: String, required: true},
    set: {type: Number},
    reps: {type: Number},
    weight: {type: Number},
    other: {type: String}
},
{
    timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema)
module.exports= Workout;