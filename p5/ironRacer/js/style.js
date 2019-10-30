function lapCounter(playerOneLapCount, playerTwoLapCount, maxLaps) {
  if (playerOneLapCount < maxLaps) {
    document.querySelector("#onelaps p").innerText =
      playerOneLapCount + "/" + maxLaps;
  } else {
    document.querySelector("#onelaps p").innerText = "Last Lap";
  }
  if (playerTwoLapCount < maxLaps) {
    document.querySelector("#twolaps p").innerText =
      playerTwoLapCount + "/" + maxLaps;
  } else {
    document.querySelector("#twolaps p").innerText = "Last Lap";
  }
}

function timeCounter(
  pOneRaceTime,
  pTwoRaceTime,
  pOneTotalTime,
  pTwoTotalTime,
  playerOneLapCount,
  playerTwoLapCount,
  maxLaps
) {
  document.querySelector("#oneLapTime").innerText = pOneRaceTime.toFixed(2);
  document.querySelector("#twoLapTime").innerText = pTwoRaceTime.toFixed(2);
  if (playerOneLapCount <= maxLaps) {
    document.querySelector("#oneTime").innerText = pOneTotalTime;
  }
  if (playerTwoLapCount <= maxLaps) {
    document.querySelector("#twoTime").innerText = pTwoTotalTime;
  }
}
