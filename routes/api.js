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

// post "/api/workouts"
router.post("/api/workouts", (req, res) => {
    console.log("POST")
    Workout.create({})
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

// put "/api/workouts/:id"
router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("PUT: ", params.id,  "<>", body)
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body} },
        {new: true, runValidators:true}
    )
    .then(dbWorkout => {
        console.log("back from update db:", dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});



module.exports = router;
