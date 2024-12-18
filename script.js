// Initialize Counter
let count = 0;

// Select Elements
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

// Increment Function
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
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
