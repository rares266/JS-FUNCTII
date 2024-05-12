// Funcție pentru a genera o poziție aleatorie pe axa X între 5 și 95
  function generateRandomX() {
      return Math.random() * 90 + 5;
  }
  // Funcție pentru a muta mingea la o poziție aleatorie pe ecran
  function moveFootball() {
      const randomX = generateRandomX();
      const randomY = -70;
      if(football instanceof HTMLDivElement) {
        football.style.top = randomY + 'px';
        football.style.left = randomX + 'px';
      }


  }

  // Funcție pentru a verifica dacă mingea a ajuns in poarta
  function checkGoal() {
    if(football instanceof HTMLDivElement) {
        const topPos = parseFloat(football.style.top);
        const leftPos = parseFloat(football.style.left);

      // Verifică dacă mingea este în zona de gol
      if (topPos >= -70 && topPos <= -60 && leftPos >= 0 && leftPos <= 40) {
          numberOfGoals();
          alert('GOOOOLLLLL');
      }
    }
  }
  // reseteaza poziția mingii
  function resetFootballPosition() {

        football.style.top = '50%';
        football.style.left = '50%';
    

  }
  // Butoane
  const football = document.querySelector('.football');
  const buttonReset = document.querySelector('.btn-reset');
  buttonReset?.addEventListener('click', resetScore);
  buttonReset?.addEventListener('click', resetFootballPosition);
  const button = document.querySelector('.btn-suteaza');
  button?.addEventListener('click', () => {
  resetFootballPosition();
  setTimeout(() => {
      moveFootball();
      setTimeout(() => {
        checkGoal();
      }, 1000);
  }, 1000);
});



// ----- SCOR ----- //
let scor = 0;
const noGoals = document.getElementById('scor');
    // Scor initial
    if(noGoals){
        noGoals.textContent = 'Scor: 0';
      }

// Reseteaza scorul
    function resetScore() {
    scor = 0;
    if(noGoals){
        noGoals.textContent = 'Scor: ' + scor;
    }
  }

  // Functie care tine scorul
  function numberOfGoals() {
    if(noGoals){
        scor++;
        noGoals.textContent = 'Scor: ' + scor;
    }
  }
