const card = document.getElementById('member-card');
const overlay = document.getElementById('overlay');
const closeButton = overlay.querySelector('.close-btn');

card.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
});
