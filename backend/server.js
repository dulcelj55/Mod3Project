const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); 
require('./config/db.js');
const path = require('path');
const Workout = require('./models/workout.js');


const PORT = 3005;

const app = express();
// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());

// will happen on every request (taking away the /server part)
app.use((req, res, next)=> {
    if (req.path.startsWith('/server')) {
        req.url = req.url.replace('/server', ''); // strip /server from the path
    }
    next();
})



// END MIDDLEWARE //

// START ROUTES //


// CREATE BOOTCAMP


// READ BOOTCAMPS

// READ STATES ROUTE

app.use(express.static(path.join(__dirname, "../client/dist")));




// app.get("/workout", async (req, res) => {
//     try {
//         let dbResponse = await ();
//         res.send(dbResponse)
//     } catch(err) {
//         res.status(400).send("error getting the workouts")
//     }
// });

// // CREATE !!!!
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
// app.get("/camps", async (req, res) => {
//     try {
//         let dbResponse = await Bootcamp.find();
//         res.status(200).send(dbResponse)
//     } catch(err) {
//         res.status(400).send("error getting camp")
//     }
// });




// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   });
// // END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});
