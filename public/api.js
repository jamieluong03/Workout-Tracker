const API = {
  async getLastWorkout() {
    const res = await fetch("/api/workouts");
    const json = await res.json();
    for (var i = json.length - 1; i > 0; i--) {
      if (json[i].totalDuration !== 0) {
        var jsonBack = json[i]
        i = 1
      }
    }
    return jsonBack;
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

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
