// Données des modèles Toyota
const models = {
  berline: {
    title: "Toyota Berline Électrique",
    price: "45 990 €",
    images: [
      "../Voiture/Toyota/Berlines/berline01.jpg",
      "../Voiture/Toyota/Berlines/berline02.jpg",
      "../Voiture/Toyota/Berlines/berline03.jpg",
      "../Voiture/Toyota/Berlines/berline04.jpg",
      "../Voiture/Toyota/Berlines/berline05.jpg"
    ],
    altTexts: [
      "Toyota Berline - Vue avant",
      "Toyota Berline - Vue latérale",
      "Toyota Berline - Vue arrière",
      "Toyota Berline - Intérieur conducteur",
      "Toyota Berline - Sièges arrière"
    ],
    specs: [
      { icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "Moteur électrique - jusqu'à 200 ch - Autonomie 450 km" },
      { icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale" },
      { icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "Recharge rapide 80% en 30 min" },
      { icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Couleur blanc nacré" }
    ],
    description: "La nouvelle Toyota Berline Électrique allie élégance, efficacité énergétique et technologie de pointe pour une conduite 100% électrique sans compromis.",
    features: [
      {
        title: "Système Toyota Safety Sense",
        description: "Assistance avancée à la conduite avec freinage d’urgence et maintien dans la voie."
      },
      {
        title: "Connectivité avancée",
        description: "Écran tactile 12 pouces avec intégration smartphone."
      },
      {
        title: "Confort haut de gamme",
        description: "Sièges chauffants et climatisation automatique bi-zone."
      },
      {
        title: "Design aérodynamique",
        description: "Lignes fluides optimisées pour réduire la consommation."
      }
    ]
  },
  gr: {
    title: "Toyota GR Sportive",
    price: "53 200 €",
    images: [
      "../Voiture/Toyota/Électriques/elec01.jpg",
      "../Voiture/Toyota/Électriques/elec02.jpg",
      "../Voiture/Toyota/Électriques/elec03.jpg",
      "../Voiture/Toyota/Électriques/elec04.jpg",
      "../Voiture/Toyota/Électriques/elec05.jpg"
    ],
    altTexts: [
      "Toyota GR Sportive - Vue avant",
      "Toyota GR Sportive - Vue latérale",
      "Toyota GR Sportive - Vue arrière",
      "Toyota GR Sportive - Intérieur sport",
      "Toyota GR Sportive - Détails moteur"
    ],
    specs: [
      { icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "Moteur turbo 2.0L - 300 ch" },
      { icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale GR-FOUR" },
      { icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "0-100 km/h en 5,2 secondes" },
      { icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Rouge métallisé" }
    ],
    description: "La Toyota GR Sportive est une voiture dynamique conçue pour les passionnés de conduite sportive, offrant puissance et agilité.",
    features: [
      {
        title: "Châssis renforcé",
        description: "Amélioration de la rigidité et de la tenue de route."
      },
      {
        title: "Système de freinage haute performance",
        description: "Freins Brembo pour une puissance optimale."
      },
      {
        title: "Mode de conduite sport",
        description: "Réglage moteur et suspension adaptés à la piste."
      },
      {
        title: "Système d’échappement sport",
        description: "Sonorité améliorée pour une expérience immersive."
      }
    ]
  },
  suv: { 
    title: "Toyota SUV Hybride",
    price: "48 500 €",
    images: [
      "../Voiture/Toyota/SU/su01.jpg",
      "../Voiture/Toyota/SU/su02.jpg",
      "../Voiture/Toyota/SU/su03.jpg",
      "../Voiture/Toyota/SU/su04.jpg",
      "../Voiture/Toyota/SU/su05.jpg"
    ],
    altTexts: [
      "Toyota SUV Hybride - Vue avant",
      "Toyota SUV Hybride - Vue latérale",
      "Toyota SUV Hybride - Vue arrière",
      "Toyota SUV Hybride - Intérieur",
      "Toyota SUV Hybride - Coffre"
    ],
    specs: [
      { icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "Moteur hybride 2.5L - 220 ch" },
      { icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale AWD" },
      { icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "Consommation mixte 5,8 L/100 km" },
      { icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Gris métal mat" }
    ],
    description: "Le Toyota SUV Hybride combine robustesse et écologie pour vous accompagner sur tous vos trajets avec une consommation optimisée.",
    features: [
      {
        title: "Technologie hybride Toyota",
        description: "Réduction des émissions et économie de carburant."
      },
      {
        title: "Système de sécurité active",
        description: "Détection des angles morts et alerte de collision."
      },
      {
        title: "Habitacle spacieux",
        description: "Confort pour toute la famille avec rangements pratiques."
      },
      {
        title: "Jantes alliage 18 pouces",
        description: "Design moderne et dynamique."
      }
    ]
  }
}

// Variables du diaporama
let currentSlide = 0;
let currentModel = 'berline';
let slides = [];
let slideInterval;

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  // Gestion du sélecteur de modèle
  const modelOptions = document.querySelectorAll('.model-option');
  modelOptions.forEach(option => {
    option.addEventListener('click', () => {
      modelOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      currentModel = option.dataset.model;
      loadModel(currentModel);
    });
  });

  // Chargement modèle par défaut
  loadModel(currentModel);
});

// Charger un modèle
function loadModel(model) {
  const modelData = models[model];

  // Mise à jour infos principales
  document.getElementById('model-title').textContent = modelData.title;
  document.getElementById('model-price').textContent = modelData.price;
  document.getElementById('model-description').textContent = modelData.description;

  // Mise à jour formulaire
  document.getElementById('form-subject').value = `Nouvelle commande ${modelData.title}`;
  document.getElementById('form-vehicle').value = modelData.title;
  document.getElementById('form-price').value = modelData.price;

  // Mise à jour spécifications
  const specsContainer = document.getElementById('model-specs');
  specsContainer.innerHTML = '';
  modelData.specs.forEach(spec => {
    const specItem = document.createElement('div');
    specItem.className = 'spec-item';
    specItem.innerHTML = `
      <img src="${spec.icon}" alt="Icône">
      <span>${spec.text}</span>
    `;
    specsContainer.appendChild(specItem);
  });

  // Mise à jour caractéristiques
  const featuresContainer = document.getElementById('model-features');
  featuresContainer.innerHTML = '<h2>Caractéristiques principales</h2>';
  modelData.features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'feature-item';
    featureItem.innerHTML = `
      <div class="feature-icon">✓</div>
      <div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </div>
    `;
    featuresContainer.appendChild(featureItem);
  });

  // Mise à jour diaporama
  const slideshow = document.getElementById('slideshow');
  slideshow.innerHTML = '';
  const indicator = document.getElementById('slide-indicator');
  indicator.innerHTML = '';

  modelData.images.forEach((img, index) => {
    // Créer slide
    const slide = document.createElement('div');
    slide.className = 'slide';
    if (index === 0) slide.classList.add('active');
    slide.innerHTML = `<img src="${img}" alt="${modelData.altTexts[index]}">`;
    slideshow.appendChild(slide);

    // Créer indicateur
    const dot = document.createElement('div');
    dot.className = 'indicator-dot';
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(index);
    indicator.appendChild(dot);
  });

  slides = document.querySelectorAll('.slide');
  currentSlide = 0;
  resetTimer();
}

// Fonctions diaporama
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  const dots = document.querySelectorAll('.indicator-dot');
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  const newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
  resetTimer();
}

function prevSlide() {
  const newIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(newIndex);
  resetTimer();
}

function goToSlide(index) {
  showSlide(index);
  resetTimer();
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetTimer() {
  clearInterval(slideInterval);
  startSlideShow();
}

// Événements pour boutons slideshow (assure-toi qu'ils sont dans ton HTML)
document.querySelector('.slideshow-nav button:nth-child(1)').addEventListener('click', prevSlide);
