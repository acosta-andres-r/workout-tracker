const Workout = require("../models/workout");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {

  console.log("id api-routes", req.params.id);

    Workout.updateOne({ _id: req.params.id }, req.body).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts", ({ body }, res) => {

    const workout = {
      day: new Date(new Date().setDate(new Date().getDate())),
      exercises: body
    }

    console.log("post api", body);
    console.log("exercise", workout);

    Workout.create(workout)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};
