// let startBtn = document.querySelector("#start-btn");
// let stopBtn = document.querySelector("#stop-btn");
// let resetBtn = document.querySelector("#reset-btn");
// let stopWatch = document.querySelector("#stop-watch");

// let timer = null;
// let startTime = 0;
// let pauseTime = 0;
// let isTimer = false;

// let container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   if (e.target.id === "start-btn") {
//     startStopWatch();
//   } else if (e.target.id === "stop-btn") {
//     stop();
//   } else if (e.target.id === "reset-btn") {
//     reset();
//   }
// });

// function startStopWatch() {
//   if (!isTimer) {
//     startTime = Date.now() - pauseTime;
//     timer = setInterval(update, 10);
//     isTimer = true;
//   }
// }
// function stop() {
//   if (isTimer) {
//     clearInterval(timer);
//     pauseTime = Date.now() - startTime;
//     isTimer = false;
//   }
// }

// function reset() {
//   clearInterval(timer);
//   timer = null;
//   startTime = 0;
//   pauseTime = 0;
//   isTimer = false;
//   stopWatch.innerHTML = "00:00:00:00";
// }

// function update() {
//   const currentTime = Date.now();
//   pauseTime = currentTime - startTime;

//   let hours = Math.floor(pauseTime / (1000 * 60 * 60));
//   let minutes = Math.floor(pauseTime / (1000 * 60));
//   //   let minutes = Math.floor((pauseTime % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((pauseTime / 1000) % 60);
//   let miliseconds = Math.floor((pauseTime % 1000) / 10);

//   hours = String(hours).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   seconds = String(seconds).padStart(2, "0");
//   miliseconds = String(miliseconds).padStart(2, "0");

//   stopWatch.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
// }

//////////////////////////////////////////////////////////////

let container = document.querySelector(".container");
let startBtn = document.querySelector("#start-btn");
let stopBtn = document.querySelector("#stop-btn");
let resetBtn = document.querySelector("#reset-btn");
let stopWatch = document.querySelector("#stop-watch");

let isTimer = false;
let startTime = 0;
let pauseTime = 0;
let timer = null;

container.addEventListener("click", function (e) {
  if (e.target.id === "start-btn") {
    if (!isTimer) {
      startTime = Date.now() - pauseTime;
      timer = setInterval(update, 10);
      isTimer = true;
    }
  }
  if (e.target.id === "stop-btn") {
    if (isTimer) {
      clearInterval(timer);
      isTimer = false;
    }
  }
  if (e.target.id === "reset-btn") {
    clearInterval(timer);
    timer = null;
    startTime = 0;
    pauseTime = 0;
    isTimer = false;
    stopWatch.innerHTML = "00:00:00:00";
  }
});

function update() {
  const timeNow = Date.now();
  pauseTime = timeNow - startTime;

  let hours = Math.floor(pauseTime / (1000 * 60 * 60));
  let minutes = Math.floor(pauseTime / (1000 * 60));
  let seconds = Math.floor(pauseTime / 1000);
  let miliseconds = Math.floor((pauseTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  miliseconds = String(miliseconds).padStart(2, "0");

  stopWatch.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
