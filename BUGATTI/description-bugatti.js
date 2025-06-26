// Données des modèles Bugatti
const models = {
  chiron: {
    name: "Bugatti Chiron",
    price: "2 990 000 €",
    description:
      "La Bugatti Chiron, icône de puissance et de luxe, allie une technologie de pointe à un design futuriste.",
    specs: [
      { icon: "🚀", label: "Vitesse max", value: "420 km/h" },
      { icon: "⚡", label: "Puissance", value: "1500 ch" },
      { icon: "⛽", label: "Consommation", value: "22 L/100km" },
      { icon: "🛢️", label: "Capacité réservoir", value: "100 L" },
    ],
    features: [
      "Moteur W16 quadri-turbo 8.0L",
      "Intérieur en cuir et fibre de carbone",
      "Système audio premium",
      "Technologie d'assistance à la conduite avancée",
    ],
    images: [
      "../Voiture/Bugatti/Chiron/chiron1.jpg",
      "../Voiture/Bugatti/Chiron/chiron2.jpg",
      "../Voiture/Bugatti/Chiron/chiron3.jpg",
      "../Voiture/Bugatti/Chiron/chiron4.jpg",
      "../Voiture/Bugatti/Chiron/chiron5.jpg",
    ],
  },

  divo: {
    name: "Bugatti Divo",
    price: "5 800 000 €",
    description:
      "La Bugatti Divo, conçue pour la piste, allie agilité extrême et style unique.",
    specs: [
      { icon: "🚀", label: "Vitesse max", value: "380 km/h" },
      { icon: "⚡", label: "Puissance", value: "1500 ch" },
      { icon: "⛽", label: "Consommation", value: "22 L/100km" },
      { icon: "🛢️", label: "Capacité réservoir", value: "90 L" },
    ],
    features: [
      "Design aérodynamique avancé",
      "Châssis optimisé pour la piste",
      "Intérieur allégé et sportif",
      "Technologies de contrôle de traction améliorées",
    ],
    images: [
      "../Voiture/Bugatti/Divo/divo1.jpg",
      "../Voiture/Bugatti/Divo/divo2.jpg",
      "../Voiture/Bugatti/Divo/divo3.jpg",
      "../Voiture/Bugatti/Divo/divo4.jpg",
      "../Voiture/Bugatti/Divo/divo5.jpg"
    ],
  },

  noire: {
    name: "La Voiture Noire",
    price: "11 000 000 €",
    description:
      "La Voiture Noire est une œuvre d'art automobile, rendant hommage à l'élégance intemporelle de Bugatti.",
    specs: [
      { icon: "🚀", label: "Vitesse max", value: "420 km/h" },
      { icon: "⚡", label: "Puissance", value: "1500 ch" },
      { icon: "⛽", label: "Consommation", value: "22 L/100km" },
      { icon: "🛢️", label: "Capacité réservoir", value: "100 L" },
    ],
    features: [
      "Finition noire brillante sur mesure",
      "Un exemplaire unique au monde",
      "Matériaux de luxe : titane, fibre de carbone, cuir cousu main",
      "Technologie de pointe embarquée",
    ],
    images: [
      "../Voiture/Bugatti/VoitureNoire/vn1.jpg",
      "../Voiture/Bugatti/VoitureNoire/vn2.jpg",
      "../Voiture/Bugatti/VoitureNoire/vn3.jpg",
      "../Voiture/Bugatti/VoitureNoire/vn4.jpg",
      "../Voiture/Bugatti/VoitureNoire/vn5.jpg",
    ],
  },
};

// DOM Elements
const modelOptions = document.querySelectorAll(".model-option");
const modelTitle = document.getElementById("model-title");
const modelPrice = document.getElementById("model-price");
const modelDescription = document.getElementById("model-description");
const modelSpecs = document.getElementById("model-specs");
const modelFeatures = document.getElementById("model-features");
const slideshowContainer = document.getElementById("slideshow");
const slideIndicator = document.getElementById("slide-indicator");
const formVehicle = document.getElementById("form-vehicle");
const formPrice = document.getElementById("form-price");
const formSubject = document.getElementById("form-subject");

let currentModelKey = "chiron";
let currentSlideIndex = 0;

function displayModel(modelKey) {
  const model = models[modelKey];
  if (!model) return;

  modelTitle.textContent = model.name;
  modelPrice.textContent = model.price;
  modelDescription.textContent = model.description;

  formVehicle.value = model.name;
  formPrice.value = model.price;
  formSubject.value = `Nouvelle commande ${model.name}`;

  // Specs
  modelSpecs.innerHTML = "";
  model.specs.forEach(({ icon, label, value }) => {
    const item = document.createElement("div");
    item.className = "spec-item";
    item.innerHTML = `<span>${icon}</span> <strong>${label}:</strong> ${value}`;
    modelSpecs.appendChild(item);
  });

  // Features
  modelFeatures.innerHTML = "";
  model.features.forEach((feature) => {
    const item = document.createElement("div");
    item.className = "feature-item";
    item.innerHTML = `<span class="feature-icon">•</span> ${feature}`;
    modelFeatures.appendChild(item);
  });

  // Images
  slideshowContainer.innerHTML = "";
  slideIndicator.innerHTML = "";
  currentSlideIndex = 0;

  model.images.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    if (i === 0) slide.classList.add("active");
    slide.innerHTML = `<img src="${src}" alt="${model.name} image ${i + 1}" />`;
    slideshowContainer.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = "indicator-dot";
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    slideIndicator.appendChild(dot);
  });
}

modelOptions.forEach((option) => {
  option.addEventListener("click", () => {
    modelOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
    currentModelKey = option.dataset.model;
    displayModel(currentModelKey);
  });
});

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".indicator-dot");

  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  slides.forEach((slide, i) =>
    slide.classList.toggle("active", i === index)
  );
  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === index)
  );

  currentSlideIndex = index;
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// Initialisation
displayModel(currentModelKey);
