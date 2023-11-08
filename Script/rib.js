function iban() {
    alert("FR1320041010126639491D03387")
}

// Fonction pour faire remonter la page
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Affichez ou masquez le bouton en fonction de la position de défilement
  window.onscroll = function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 0) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  
function checkScroll() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 0) {
        scrollToTopButton.classList.remove("d-none");
    } else {
        scrollToTopButton.classList.add("d-none");
    }
}

// Ajoutez un écouteur d'événements pour le scroll de la page
window.addEventListener("scroll", checkScroll);