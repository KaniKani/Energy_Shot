//dark/lightmode toggler

const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

function setMode(isLight) {
  if (isLight){ 
    body.classList.add('light-mode');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('mode', 'light');
  } else {
    body.classList.remove('light-mode');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('mode', 'dark');
  }
};

// On page load, check saved mode
const savedMode = localStorage.getItem('mode');
if (savedMode === 'light') {
  setMode(true);
} else {
  setMode(false);  // default dark
}

// Toggle button listener
toggleBtn.addEventListener('click', () => {
  const isLight = !body.classList.contains('light-mode');
  setMode(isLight);
});