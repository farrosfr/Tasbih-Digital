// Initialize Counter
let count = 0;

// Select Elements
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const soundOption = document.getElementById("sound-option");
const vibrateOption = document.getElementById("vibrate-option");

// Sound Setup
const clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-19.mp3');  // Contoh URL suara klik


// Increment Function
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
  handleFeedback();
});

// Decrement Function
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateCounter();
});

// Reset Function
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

// Update Counter Display with Animation
function updateCounter() {
  countDisplay.textContent = count;
  countDisplay.style.transform = "scale(1.2)";
  setTimeout(() => {
    countDisplay.style.transform = "scale(1)";
  }, 200);
}

// Handle Feedback (Sound and Vibration)
function handleFeedback() {
  if (soundOption.checked) {
    clickSound.play();
  }
  if (vibrateOption.checked && navigator.vibrate) {
    navigator.vibrate(200); // Getar selama 200ms
  }
}
