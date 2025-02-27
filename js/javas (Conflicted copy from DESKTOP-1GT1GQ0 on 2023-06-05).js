/*function openNexus() {
    var overlay = document.getElementById("NexusOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("NexusOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })
  
  




function openInhib() {
    var overlay = document.getElementById("InhibOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("InhibOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })





function openTorre() {
    var overlay = document.getElementById("TorreOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("TorreOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })




function openMinion() {
    var overlay = document.getElementById("MinionOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("MinionOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })



function openMinions() {
    var overlay = document.getElementById("MinionsOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("MinionsOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })
  

/* function openHeal() {
    var overlay = document.getElementById("HealOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("HealOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })

function openExhaust() {
    var overlay = document.getElementById("ExhaustOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("ExhaustOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })*/


/*
  function openNashor() {
    var overlay = document.getElementById("NashorOverlay");
    overlay.style.display = "flex";
  }
  
document.getElementById("NashorOverlay").addEventListener("click", function() {
    this.style.display = "none";
  })



  function openEterni() {
    var overlay = document.getElementById("OverlayEterni");
    overlay.style.display = "flex";
  }
  
document.getElementById("OverlayEterni").addEventListener("click", function() {
    this.style.display = "none";
  })







  window.onload = function() {
    var fullscreenImage = document.getElementById('fullscreen-image');
    var fullscreenImageImg = fullscreenImage.querySelector('img');
    var fullscreenTriggers = document.getElementsByClassName('fullscreen-trigger');
    
    // Aggiungi il gestore di eventi al click per tutte le immagini con classe "fullscreen-trigger"
    for (var i = 0; i < fullscreenTriggers.length; i++) {
        fullscreenTriggers[i].addEventListener('click', function() {
            // Imposta l'URL dell'immagine a schermo intero e mostra l'elemento
            fullscreenImageImg.src = this.src;
            fullscreenImage.style.display = 'block';
        });
    }
    
    // Chiudi l'immagine a schermo intero cliccando su di essa
    fullscreenImage.addEventListener('click', function() {
        fullscreenImage.style.display = 'none';
    });
}

*/





/*
window.onload = function() {
  var fullscreenImage = document.getElementById('fullscreen-image');
  var fullscreenImageImg = fullscreenImage.querySelector('img');
  var fullscreenTriggers = document.getElementsByClassName('fullscreen-trigger');
  var closeButton = fullscreenImage.querySelector('.close-button');
  
  // Aggiungi il gestore di eventi al click per tutte le immagini con classe "fullscreen-trigger"
  for (var i = 0; i < fullscreenTriggers.length; i++) {
      fullscreenTriggers[i].addEventListener('click', function() {
          // Imposta l'URL dell'immagine a schermo intero e mostra l'elemento
          fullscreenImageImg.src = this.src;
          fullscreenImage.style.display = 'flex';
      });
  }
  
  // Chiudi l'immagine a schermo intero cliccando sul pulsante di chiusura
  closeButton.addEventListener('click', function() {
      fullscreenImage.style.display = 'none';
  });
}




window.onload = function() {
  var fullscreenImage = document.getElementById('fullscreen-image');
  var fullscreenImageImg = fullscreenImage.querySelector('img');
  var fullscreenTriggers = document.getElementsByClassName('fullscreen-trigger');
  
  // Aggiungi il gestore di eventi al click per tutte le immagini con classe "fullscreen-trigger"
  for (var i = 0; i < fullscreenTriggers.length; i++) {
      fullscreenTriggers[i].addEventListener('click', function() {
          // Imposta l'URL dell'immagine a schermo intero e mostra l'elemento
          fullscreenImageImg.src = this.src;
          fullscreenImage.style.display = 'flex';
      });
  }
  
  // Chiudi l'immagine a schermo intero cliccando fuori dall'immagine
  fullscreenImage.addEventListener('click', function(e) {
      if (e.target === fullscreenImage) {
          fullscreenImage.style.display = 'none';
      }
  });
}*/

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

/* SWITCH DI CLASSE
function invertiClassi() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 769 && windowWidth <= 1024) {
    var elemento1 = document.querySelector(".sinistra");
    var elemento2 = document.querySelector(".destra");

    var temp = elemento1.className;
    elemento1.className = elemento2.className;
    elemento2.className = temp;
  }
}
window.addEventListener('load', invertiClassi);
window.addEventListener('resize', invertiClassi);





function invertiClassi() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 769 && windowWidth <= 1024) {
    var elemento1 = document.querySelector(".sinistra");
    var elemento2 = document.querySelector(".destra");

    var tempClass1 = elemento1.className;
    var tempClass2 = elemento2.className;

    elemento1.className = tempClass2;
    elemento2.className = tempClass1;
  }
}

window.addEventListener('load', invertiClassi);
window.addEventListener('resize', invertiClassi);*/


/*
function invertiPosizione() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 769 && windowWidth <= 1024) {
    var elemento1 = document.querySelector(".sinistra");
    var elemento2 = document.querySelector(".destra");
    var padre = elemento1.parentNode;

    elemento2.insertAdjacentHTML("beforebegin", elemento1.outerHTML);
    elemento1.remove();
    padre.insertBefore(elemento2, elemento1);
  }
}

window.addEventListener('load', invertiPosizione);
window.addEventListener('resize', invertiPosizione);*/

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
/*
window.addEventListener('load', invertiPosizione);
window.addEventListener('resize', invertiPosizione);

window.addEventListener('resize', invertiPosizione invertiPosizione1)*/

window.addEventListener('load', function() {
  invertiPosizione();
  invertiPosizione1();
});

window.addEventListener('resize', function() {
  invertiPosizione();
  invertiPosizione1();
})









window.addEventListener('resize', moveLastCardOutsideContainer);

function moveLastCardOutsideContainer() {
  const centeredCard = document.getElementById('center-card');
  const container = document.querySelector('.container');

  if (window.innerWidth <= 1025) {
    if (!centeredCard.classList.contains('centered-card')) {
      container.removeChild(centeredCard);
      document.body.appendChild(centeredCard);
      centeredCard.classList.add('centered-card');
    }
  } else {
    if (centeredCard.classList.contains('centered-card')) {
      document.body.removeChild(centeredCard);
      container.appendChild(centeredCard);
      centeredCard.classList.remove('centered-card');
    }
  }
}

moveLastCardOutsideContainer();
;