document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.card');

  cards.forEach(function (card, index) {
      // Set tabindex dynamically
      card.setAttribute('tabindex', index + 1);

      // Add click event listener
      card.addEventListener('click', function (event) {
          openOverlay(card);
      });

      // Add keydown event listener for handling enter key
      card.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
              openOverlay(card);
          }
      });
  });

  // Add click event listener for close button
  document.addEventListener('click', function (event) {
      if (event.target.classList.contains('close-btn')) {
          closeOverlay();
      }
  });

  // Add keydown event listener for closing overlay with Escape key
  document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
          closeOverlay();
      }
  });
});

function openOverlay(card) {
  var overlayId = card.getAttribute('data-overlay-id');
  var overlay = document.getElementById(overlayId);
  if (overlay) {
      overlay.style.display = 'block';
      overlay.setAttribute('tabindex', '0'); // Set tabindex for overlay to make it focusable
      overlay.focus(); // Focus the overlay
  }
}

function closeOverlay() {
  var overlays = document.querySelectorAll('.overlay');
  overlays.forEach(function (overlay) {
      overlay.style.display = 'none';
  });
}
