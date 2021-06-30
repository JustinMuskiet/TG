// collect all necessary data

const timer = document.querySelector(".stopwatch-timer");
const stopwatchArr = Array.from(timer.children);
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const glow = document.querySelector(".stopwatch-glow");
const bow = document.querySelector(".stopwatch");

// manipulate the first piece of data: timer numbers

// set the start values of the timer

timerMs = 00;
timerSc = 00;
timerMn = 00;

// create the functionality for the buttons

// create the functionality for the 'Play' button 

play.addEventListener("click", () => {
  play.disabled = true; 
  playButton = setInterval(function plusMs() {
    timerMs += 1;
    if (timerMs == 100) {
      timerMs = 0;
      timerSc += 1;
      if (timerSc === 60) {
        timerSc = 0;
        timerMn += 1;
      }
    }

    glow.classList.add("stopwatch-glow-animations");
    bow.classList.add("stopwatch-animation");

    stopwatchArr[2].innerHTML = timerMs;
    stopwatchArr[1].innerHTML = timerSc;
    stopwatchArr[0].innerHTML = timerMn;

    document.querySelector(".ms").innerHTML =
      timerMs < 10 ? "0" + timerMs : timerMs;
    document.querySelector(".sc").innerHTML =
      timerSc < 10 ? "0" + timerSc : timerSc;
    document.querySelector(".mn").innerHTML =
      timerMn < 10 ? "0" + timerMn : timerMn;
  }, 10);
});

// create the functionality for the 'Pause' button

pause.addEventListener("click", () => {
  play.disabled = false; 
  clearInterval(playButton);

  glow.classList.remove("stopwatch-glow-animations");
  bow.classList.remove("stopwatch-animation");
});

// create the functionality for the 'Stop' button

stop.addEventListener("click", () => {
  play.disabled = false; 
  clearInterval(playButton);

  timerMs = 00;
  timerSc = 00;
  timerMn = 00;

  stopwatchArr[2].innerHTML = "00";
  stopwatchArr[1].innerHTML = "00";
  stopwatchArr[0].innerHTML = "00";

  glow.classList.remove("stopwatch-glow-animations");
  bow.classList.remove("stopwatch-animation");
});
