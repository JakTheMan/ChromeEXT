let timerInterval;
let timerRunning = false;
let timeInSeconds = 0;

function updateTimerDisplay() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timerDisplay').textContent = display;
}

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    timerInterval = setInterval(() => {
      timeInSeconds++;
      updateTimerDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  pauseTimer();
  timeInSeconds = 0;
  updateTimerDisplay();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
