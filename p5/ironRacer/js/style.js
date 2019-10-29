function lapCounter(playerOneLapCount, playerTwoLapCount, maxLaps) {
  document.querySelector("#onelaps p").innerText =
    playerOneLapCount + "/" + maxLaps;
  document.querySelector("#twolaps p").innerText =
    playerTwoLapCount + "/" + maxLaps;
}

function timeCounter(pOneRaceTime, pTwoRaceTime, pOneTotalTime, pTwoTotalTime) {
  document.querySelector("#oneLapTime").innerText = pOneRaceTime.toFixed(2);
  document.querySelector("#twoLapTime").innerText = pTwoRaceTime.toFixed(2);
  document.querySelector("#oneTime").innerText = pOneTotalTime;
  document.querySelector("#twoTime").innerText = pTwoTotalTime;
}
