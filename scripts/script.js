const carouselContainer = document.getElementById("carousel-container");
const slider = document.getElementById("slider-multimedia");
const nextButton = document.querySelector(".next-slide");

let slideIndex = 0;
const slides = document.getElementsByClassName("slide-content");
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth;

// Fonction pour mettre à jour le carrousel
const updateCarousel = () => {
  // Réinitialiser la classe active sur toutes les diapositives
  for (let slide of slides) {
    slide.classList.remove("active");
  }

  // Ajouter la classe active à la diapositive correspondante
  slides[slideIndex].classList.add("active");

  // Calculer le décalage de translation en fonction de l'index de la diapositive active
  const translateOffset = -slideIndex * slideWidth;

  // Appliquer la translation au carrousel
  slider.style.transform = `translateX(${translateOffset}px)`;

  // Réinitialiser la taille de toutes les images
  for (let slide of slides) {
    const imageContainer = slide.querySelector(".slider-image");
    imageContainer.style.transform = "scaleY(1)";
  }

  // Agrandir la div de l'image de la diapositive active
  const activeImageContainer = slides[slideIndex].querySelector(".slider-image");
  activeImageContainer.style.transform = "scaleY(1.2)";
};

// Gérer le clic sur le bouton suivant
nextButton.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;

  // Vérifier si la diapositive est la huitième diapositive
  if (slideIndex === 8) {
    // Réinitialiser l'index de la diapositive à zéro pour revenir à la première diapositive
    slideIndex = 0;
  }

  updateCarousel();
});

// Initialiser le carrousel
updateCarousel();


function showPopup() {
  
  alert("Message reçu");
}


var canvas = document.getElementById("myCanvas");


canvas.addEventListener("click", showPopup);


function addAnimationToElement(element, animationName, duration) {
  element.style.animation = `${animationName} ${duration}ms`;
  element.style.animationFillMode = 'forwards';
}


const lineElement = document.querySelector('.line');
const line1Element = document.querySelector('.line1');


addAnimationToElement(lineElement, 'descendLine', 4000); 
addAnimationToElement(line1Element, 'descendLine', 4000);


document.addEventListener('mousemove', function (event) {
  var imageSuiveuse = document.getElementById('image-suiveuse');
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var scrollX = window.scrollX;
  var scrollY = window.scrollY;

  imageSuiveuse.style.left = mouseX + scrollX + 'px';
  imageSuiveuse.style.top = mouseY + scrollY + 'px';
});


