document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
      var card = event.target.closest('.card');
      if (card) {
          var overlayId = card.getAttribute('data-overlay-id');
          openOverlay(overlayId);
      }
  });

  document.addEventListener('click', function (event) {
      if (event.target.classList.contains('close-btn')) {
          closeOverlay();
      }
  });
});

function openOverlay(overlayId) {
  var overlay = document.getElementById(overlayId);
  if (overlay) {
      overlay.style.display = 'block';
  }
}

function closeOverlay() {
  var overlays = document.querySelectorAll('.overlay');
  overlays.forEach(function (overlay) {
      overlay.style.display = 'none';
  });
}
