const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); 
require("dotenv").config()
require('./config/db.js');
const path = require('path');
const Workout = require('./models/Workout.js');
const PORT = 3005;




const app = express();
// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());

app.use((req, res, next)=> {
    if (req.path.startsWith('/server')) {
        req.url = req.url.replace('/server', ''); // takes server from path for render
    }
    next();
})



// END MIDDLEWARE //

// START ROUTES //








app.use(express.static(path.join(__dirname, "../client/dist")));




// CREATE:
app.post("/workout", async (req, res) => {
    console.log(req.body)
    try {
        let dbResponse = await Workout.create(req.body);
        res.status(201).send(dbResponse)
    } catch(err) {
        console.log(err)
        res.status(400).send("error saving workout to database")
    }
});

// // READ !!!!
app.get("/workout", async (req, res) => {
    try {
        let dbResponse = await Workout.find();
        res.status(200).send(dbResponse)
    } catch(err) {
        res.status(400).send("error getting workout")
    }
});

// UPDATE
// app.put("/workout/:workoutId", async (req, res) => {
//     try {
//         req.body= {exercise: "burpie"}
//         let dbResponse = await Workout.findByIdAndUpdate(req.params.workoutId, req.body, {new: true}).populate("workoutId")
//         console.log(dbResponse, req.body);

//     } catch(err) {
//         res.status(400).send("error updating workout")
//     } try{
//         let dbResponse = await Workout.find();
//         res.status(200).send(dbResponse);
//     }catch (err){
//         res.status(400).send("error showing updated list")
//     }
   
// });
app.put("/workout/:workoutId", async (req, res) => {
    try {
        
        let dbResponse = await Workout.findByIdAndUpdate(req.params.workoutId, req.body, {new: true})
        res.status(200);
    } catch(err) {
        res.status(400).send("error updating workout")
    }
    try{
        let dbResponse = await Workout.find();
        res.status(200).send(dbResponse);
    }catch (err){
        res.status(400).send("error showing updated list")
    }
});

// DELETE
app.delete("/workout/:idOfWorkout", async (req, res) => {
    try{let id = req.params.idOfWorkout;
    let dbResponse = await Workout.findByIdAndDelete(id);
   }catch (err){
        res.status(400).send("error deleting workout")
    }
    try{
        let dbResponse = await Workout.find();
        res.status(200).send(dbResponse);
    }catch (err){
        res.status(400).send("error showing updated list")
    }
   
});





app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});
