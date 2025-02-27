window.onload = function() {
  var fullscreenImage = document.getElementById('fullscreen-image');
  var fullscreenImageImg = fullscreenImage.querySelector('img');
  var fullscreenTriggers = document.getElementsByClassName('fullscreen-trigger');
  
  // Aggiungi il gestore di eventi al click per tutte le immagini con classe "fullscreen-trigger"
  for (var i = 0; i < fullscreenTriggers.length; i++) {
      fullscreenTriggers[i].addEventListener('click', function() {
          // Verifica se l'immagine ha la classe "large"
          var isLarge = this.classList.contains('large');
          
          // Imposta l'URL dell'immagine a schermo intero e imposta la classe "large" in base al tipo di immagine cliccata
          fullscreenImageImg.src = this.src;
          fullscreenImage.classList.toggle('large', isLarge);
          fullscreenImage.style.display = 'flex';
      });
  }
  
  // Chiudi l'immagine a schermo intero cliccando sull'immagine stessa
  fullscreenImage.addEventListener('click', function() {
      fullscreenImage.style.display = 'none';
  });
};


function invertiPosizione() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 769 && windowWidth <= 1024) {
    var elemento1 = document.getElementById("1");
    var elemento2 = document.getElementById("2");
    var padre = elemento1.parentNode;

    padre.insertBefore(elemento2, elemento1);
  }
}

function invertiPosizione1() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 769 && windowWidth <= 1024) {
    var elemento3 = document.getElementById("3");
    var elemento4 = document.getElementById("4");
    var padre1 = elemento3.parentNode;

    padre1.insertBefore(elemento4, elemento3);
  }
}

window.addEventListener('load', function() {
  invertiPosizione();
  invertiPosizione1();
});

window.addEventListener('resize', function() {
  invertiPosizione();
  invertiPosizione1();
});


window.addEventListener('load', function() {
  invertiPosizione();
  invertiPosizione1();
});

window.addEventListener('resize', function() {
  invertiPosizione();
  invertiPosizione1();
});



var lastDiv = document.getElementById('lastDiv');
var main = document.getElementById('main');

main.insertAdjacentElement('afterend', lastDiv);


$(document).ready(function(){
  $(".iconaham").on('click', function(){
    $(".ciao").toggleClass("boh");
  });
});

;