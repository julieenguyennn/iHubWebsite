document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');
  
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        openOverlay(card);
      });
    });
  
    document.querySelector('.close-btn').addEventListener('click', function () {
      closeOverlay();
    });
  });
  
  function openOverlay(card) {
    var imgSrc = card.querySelector('img').src;
    var header = card.querySelector('h3').textContent;
    var text = card.querySelector('p').textContent;
  
    document.getElementById('overlay-img').src = imgSrc;
    document.getElementById('overlay-header').textContent = header;
    document.getElementById('overlay-text').textContent = text;
  
    document.getElementById('overlay').style.display = 'block';
  }
  
  function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }
