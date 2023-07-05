// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fonction pour animer les éléments visibles à l'écran
  function animateElements() {
    var elements = document.querySelectorAll("h1, h2, p, img");
  
    elements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.style.opacity = 1;
      }
    });
  }
  
  // Événement de défilement de la page
  window.addEventListener("scroll", animateElements);
  
  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    
    
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
      
      if (position < window.innerHeight) {
        element.classList.add('fade-in-visible');
      }
    }
  });
  
 