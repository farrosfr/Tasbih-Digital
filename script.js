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
const clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-19.mp3'); 

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
    updateCounter();
    // Anda bisa memilih untuk memutar suara/getar saat mengurangi juga
    // handleFeedback(); 
  }
});

// Reset Function
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

// Update Counter Display with Animation (New Version)
function updateCounter() {
  countDisplay.textContent = count;
  
  // Memicu animasi dengan menambahkan kelas
  countDisplay.classList.add("updated");
  
  // Hapus kelas setelah animasi selesai (durasinya cocok dengan transisi CSS)
  setTimeout(() => {
    countDisplay.classList.remove("updated");
  }, 200); // Durasi 0.2s = 200ms
}

// Handle Feedback (Sound and Vibration)
function handleFeedback() {
  if (soundOption.checked) {
    // Memastikan suara dapat diputar berulang kali dengan cepat
    clickSound.currentTime = 0;
    clickSound.play();
  }
  if (vibrateOption.checked && navigator.vibrate) {
    // Getaran pendek untuk feedback yang cepat
    navigator.vibrate(50); // getar selama 50ms
  }
}

// -- (Opsional) Fitur tambahan: Simpan hitungan terakhir --
// Panggil saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
  const savedCount = localStorage.getItem('tasbihCount');
  if (savedCount !== null) {
    count = parseInt(savedCount, 10);
    updateCounter();
  }
});

// Modifikasi updateCounter untuk menyimpan nilai
function updateCounter() {
  countDisplay.textContent = count;
  localStorage.setItem('tasbihCount', count); // Simpan hitungan

  countDisplay.classList.add("updated");
  setTimeout(() => {
    countDisplay.classList.remove("updated");
  }, 200);
}

// Modifikasi reset untuk menghapus nilai
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
  localStorage.removeItem('tasbihCount'); // Hapus saat reset
});
