const Workout = require("../models/userModel");
module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        Workout.find({}).then(function (data) {
            console.log(data)
            res.json(data)
        }).catch(err => {
            res.json(err);
        });
    });

    // create a new workout if not existed
    app.post("/api/workouts", function (req, res) {
        console.log(req.body)
        Workout.create({
            day: new Date().setDate(new Date().getDate()),
            exercises: [
              req.body
            ]
          })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // add workout to the workout plan
    app.put("/api/workouts/:id", function ({ body }, res) {
        Workout.findByIdAndUpdate(req.params.id, {})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });



};
