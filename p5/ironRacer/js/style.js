function lapCounter(lapCount, maxLaps) {
  document.querySelector("#laps p").innerText = lapCount + 1 + "/" + maxLaps;
}

function timeCounter(raceTime) {
  document.querySelector("#time p").innerText = raceTime;
}
