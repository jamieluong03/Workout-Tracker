const router = require("express").Router();
const Workout = require("../models/workout.js");

// get "/api/workouts"
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
});

// get "/api/workouts/range"


// post "/api/workouts"
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

// put "/api/workouts/:id"
router.put("/api/workouts/:id", (req, res) => {
    Workout.find({})
})



module.exports = router;
