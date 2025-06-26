const models = {
  berline: {
    title: "Hyundai Berline Électrique",
    price: "À partir de 27 000 €",
    description:
      "Confort, technologie et autonomie électrique pour la ville et la route. Cette berline moderne vous offre une conduite fluide, silencieuse et économique.",
    specs: [
      { icon: "⚡", label: "Autonomie", value: "450 km" },
      { icon: "🔋", label: "Batterie", value: "64 kWh" },
      { icon: "🚗", label: "Puissance", value: "150 ch" },
      { icon: "⏱️", label: "0-100 km/h", value: "7.9 s" },
    ],
    images: [
      "../Voiture/Hyundai/Berlines/berline01.jpg",
      "../Voiture/Hyundai/Berlines/berline02.jpg",
      "../Voiture/Hyundai/Berlines/berline03.jpg",
      "../Voiture/Hyundai/Berlines/berline04.jpg",
    ],
  },
  sportive: {
    title: "Hyundai N Sportive",
    price: "À partir de 39 900 €",
    description:
      "Avec son moteur turbo et sa ligne agressive, la gamme N vous offre une performance de haut niveau. Vivez l'adrénaline au quotidien.",
    specs: [
      { icon: "🏎️", label: "Moteur Turbo", value: "2.0L" },
      { icon: "⚡", label: "Puissance", value: "275 ch" },
      { icon: "⏱️", label: "0-100 km/h", value: "5.5 s" },
      { icon: "🎯", label: "Transmission", value: "Manuelle 6 vitesses" },
    ],
    images: [
      "../Voiture/Hyundai/Sportives/sportive01.jpg",
      "../Voiture/Hyundai/Sportives/sportive02.jpg",
      "../Voiture/Hyundai/Sportives/sportive03.jpg",
      "../Voiture/Hyundai/Sportives/sportive04.jpg",
    ],
  },
  suv: {
    title: "Hyundai SUV Hybride",
    price: "À partir de 33 500 €",
    description:
      "Un SUV moderne, spacieux et hybride. Idéal pour les familles actives, alliant confort, sécurité et efficacité énergétique.",
    specs: [
      { icon: "🔋", label: "Motorisation", value: "Hybride essence-électrique" },
      { icon: "💺", label: "Places", value: "5" },
      { icon: "🔒", label: "Sécurité", value: "10 airbags" },
      { icon: "🛣️", label: "Consommation", value: "4.5 L/100 km" },
    ],
    images: [
      "../Voiture/Hyundai/SUV/SUV01.jpg",
      "../Voiture/Hyundai/SUV/SUV02.jpg",
      "../Voiture/Hyundai/SUV/SUV03.jpg",
      "../Voiture/Hyundai/SUV/SUV04.jpg",
    ],
  },
};

let currentModelKey = "berline";
let currentSlideIndex = 0;

const modelTitle = document.getElementById("model-title");
const modelPrice = document.getElementById("model-price");
const modelDescription = document.getElementById("model-description");
const modelSpecsContainer = document.getElementById("model-specs");
const slideshowContainer = document.getElementById("slideshow");
const slideIndicator = document.getElementById("slide-indicator");
const formSubject = document.getElementById("form-subject");
const formVehicle = document.getElementById("form-vehicle");
const formPrice = document.getElementById("form-price");

const modelOptions = document.querySelectorAll(".model-option");

function renderModel(key) {
  currentModelKey = key;
  currentSlideIndex = 0;
  const model = models[key];

  modelTitle.textContent = model.title;
  modelPrice.textContent = model.price;
  modelDescription.textContent = model.description;

  // Remplir specs
  modelSpecsContainer.innerHTML = "";
  model.specs.forEach((spec) => {
    const div = document.createElement("div");
    div.className = "spec-item";
    div.innerHTML = `<span class="spec-icon">${spec.icon}</span><strong>${spec.label}:</strong> ${spec.value}`;
    modelSpecsContainer.appendChild(div);
  });

  // Préparer slideshow images
  slideshowContainer.innerHTML = "";
  model.images.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    if (index === 0) slide.classList.add("active");
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${model.title} image ${index + 1}`;
    slide.appendChild(img);
    slideshowContainer.appendChild(slide);
  });

  renderIndicators(model.images.length);
  updateFormFields();

  // Mettre à jour active bouton
  modelOptions.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.model === key);
  });
}

function renderIndicators(count) {
  slideIndicator.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.className = "indicator-dot";
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
    slideIndicator.appendChild(dot);
  }
}

function goToSlide(index) {
  const slides = slideshowContainer.querySelectorAll(".slide");
  const dots = slideIndicator.querySelectorAll(".indicator-dot");
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  currentSlideIndex = index;
}

document.getElementById("prevSlide").addEventListener("click", () => {
  goToSlide(currentSlideIndex - 1);
});

document.getElementById("nextSlide").addEventListener("click", () => {
  goToSlide(currentSlideIndex + 1);
});

modelOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("active")) {
      renderModel(btn.dataset.model);
    }
  });
});

function updateFormFields() {
  const model = models[currentModelKey];
  formSubject.value = `Demande de renseignement pour ${model.title}`;
  formVehicle.value = model.title;
  formPrice.value = model.price;
}

// Initial render
renderModel(currentModelKey);
elector('.slideshow-nav button:nth-child(2)').addEventListener('click', nextSlide);
