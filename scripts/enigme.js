// Récupérer les éléments HTML des énigmes
const enigme1 = document.getElementById("enigme1");
const enigme2 = document.getElementById("enigme2");
const enigme3 = document.getElementById("enigme3");


enigme2.style.display = "none";
enigme3.style.display = "none";

// Ajouter un gestionnaire d'événement au formulaire de l'énigme 1
const enigme1Form = enigme1.querySelector("form");
enigme1Form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const reponse = enigme1Form.elements.message.value.trim().toLowerCase();
  const reponseAttendue = "si je suis fidèle c'est a ce trone peu importe qui monte dessus";

  if (normalizeString(reponse) === normalizeString(reponseAttendue)) {
    afficherReponse("Bonne réponse !", enigme1);
    enigme1.style.display = "none"; 
    enigme2.style.display = "flex"; 
  } else {
    alert("Mauvaise réponse. Essaye encore !");
  }
});

// Ajouter un gestionnaire d'événement au formulaire de l'énigme 2
const enigme2Form = enigme2.querySelector("form");
enigme2Form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const reponse = enigme2Form.elements.message.value.trim().toLowerCase();
  const reponseAttendue = "réponse de l'énigme 2";

  if (normalizeString(reponse) === normalizeString(reponseAttendue)) {
    afficherReponse("Bonne réponse !", enigme2);
    enigme2.style.display = "none";
    enigme3.style.display = "flex";
  } else {
    alert("Mauvaise réponse. Essaye encore !");
  }
});

// Ajouter un gestionnaire d'événement au formulaire de l'énigme 3
const enigme3Form = enigme3.querySelector("form");
enigme3Form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const reponse = enigme3Form.elements.message.value.trim().toLowerCase();
  const reponseAttendue = "réponse de l'énigme 3";

  if (normalizeString(reponse) === normalizeString(reponseAttendue)) {
    afficherReponse("Bonne réponse !", enigme3);

  } else {
    alert("Mauvaise réponse. Essaye encore !");
  }
});

// Fonction pour afficher une réponse
function afficherReponse(message, enigme) {
  const resultat = document.createElement("p");
  resultat.textContent = message;
  enigme.appendChild(resultat);
}

// Fonction pour normaliser une chaîne de caractères en enlevant les accents
function normalizeString(string) {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

