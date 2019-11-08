const API = {
  async getLastWorkout() {
    const res = await fetch("/api/workouts");
    const json = await res.json();
    console.log("JSON:", json)
    for (var i = json.length - 1; i > 0; i--) {
      console.log(i, json[i].totalDuration)
      if (json[i].totalDuration !== 0) {
        var jsonBack = json[i]
        console.log("json inside", jsonBack)
        i = 1
      }
    }
    console.log("json:", jsonBack)
    return jsonBack;
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];
    console.log("id in add Exercise ")

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout() {
    const res = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  }
};
