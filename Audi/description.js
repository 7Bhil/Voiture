// Données des modèles
const models = {
    a8: {
        title: "Audi A8 2023",
        price: "120 000 €",
        images: [
            "../Voiture/Audi/A8/A01.jpeg",
            "../Voiture/Audi/A8/A02.jpeg",
            "../Voiture/Audi/A8/A03.jpeg",
            "../Voiture/Audi/A8/A04.jpeg",
            "../Voiture/Audi/A8/A05.jpeg"
        ],
        altTexts: [
            "Audi A8 - Vue avant",
            "Audi A8 - Vue latérale",
            "Audi A8 - Vue arrière",
            "Audi A8 - Intérieur",
            "Audi A8 - Sièges arrière"
        ],
        specs: [
            {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "3.0L V6 TFSI - 340 chevaux"},
            {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Quattro - Transmission intégrale"},
            {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "8.1L/100km"},
            {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Gris Daytona nacré"}
        ],
        description: "L'Audi A8 2023 incarne le summum du raffinement et de la technologie embarquée, avec un confort de conduite exceptionnel.",
        features: [
            {
                title: "Audi Virtual Cockpit Plus",
                description: "Affichage numérique haute résolution et personnalisable pour le conducteur."
            },
            {
                title: "Suspension active prédictive",
                description: "Système qui adapte chaque roue indépendamment selon la route."
            },
            {
                title: "Système audio Bang & Olufsen",
                description: "Son 3D immersif grâce à 23 haut-parleurs de précision."
            },
            {
                title: "Assistance de conduite adaptative",
                description: "Maintien de voie, régulateur intelligent, freinage d’urgence autonome."
            }
        ]
    },
    etron: {
        title: "Audi e-tron GT 2023",
        price: "139 000 €",
        images: [
            "../Voiture/Audi/E-TRON GT/A20.jpeg",
            "../Voiture/Audi/E-TRON GT/A21.jpeg",
            "../Voiture/Audi/E-TRON GT/A22.jpeg",
            "../Voiture/Audi/E-TRON GT/A23.jpeg",
            "../Voiture/Audi/E-TRON GT/A24.jpeg"
        ],
        altTexts: [
            "Audi e-tron GT - Vue avant",
            "Audi e-tron GT - Vue latérale",
            "Audi e-tron GT - Vue arrière",
            "Audi e-tron GT - Tableau de bord",
            "Audi e-tron GT - Intérieur sport"
        ],
        specs: [
            {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "Électrique - 530 chevaux"},
            {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale Quattro"},
            {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "Autonomie 488 km (WLTP)"},
            {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Rouge Tango métallisé"}
        ],
        description: "L’Audi e-tron GT est une berline électrique alliant sportivité, confort et innovation dans un design futuriste.",
        features: [
            {
                title: "Double moteur électrique",
                description: "Accélération 0 à 100 km/h en 4.1 secondes avec Launch Control"
            },
            {
                title: "Écran MMI Touch",
                description: "Interface tactile 10.1” fluide avec navigation connectée"
            },
            {
                title: "Charge rapide jusqu’à 270 kW",
                description: "Recharge 80% en 22 minutes sur borne haute puissance"
            },
            {
                title: "Toit panoramique en verre",
                description: "Lumière naturelle et style raffiné dans l’habitacle"
            }
        ]
    },
    rs: {
        title: "Audi RS6 Avant 2023",
        price: "135 000 €",
        images: [
            "../Voiture/Audi/RS/A10.jpeg",
            "../Voiture/Audi/RS/A11.jpeg",
            "../Voiture/Audi/RS/A12.jpeg",
            "../Voiture/Audi/RS/A13.jpeg",
            "../Voiture/Audi/RS/A14.jpeg"
        ],
        altTexts: [
            "Audi RS6 - Vue avant",
            "Audi RS6 - Vue latérale",
            "Audi RS6 - Vue arrière",
            "Audi RS6 - Intérieur sport",
            "Audi RS6 - Tableau de bord"
        ],
        specs: [
            {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "4.0L V8 Biturbo - 600 chevaux"},
            {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale Quattro"},
            {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "11.6L/100km"},
            {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Bleu Ascari métallisé"}
        ],
        description: "L’Audi RS6 2023 allie l’ADN sportif RS à l’espace d’un break, pour des performances explosives en toute élégance.",
        features: [
            {
                title: "Suspension sport RS adaptive",
                description: "Réglage dynamique pour confort ou performance extrême"
            },
            {
                title: "Échappement sport RS",
                description: "Sonorité distinctive avec clapets actifs"
            },
            {
                title: "Freins carbone-céramique",
                description: "Puissance de freinage maximale sur piste comme sur route"
            },
            {
                title: "Affichage tête haute",
                description: "Données de conduite projetées sur le pare-brise"
            }
        ]
    }
}

// Variables du diaporama
let currentSlide = 0;
let currentModel = 'a8';
let slides = [];
let slideInterval;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    const modelOptions = document.querySelectorAll('.model-option');
    modelOptions.forEach(option => {
        option.addEventListener('click', function() {
            modelOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            currentModel = this.dataset.model;
            loadModel(currentModel);
        });
    });

    // Chargement initial
    loadModel(currentModel);
});

// Chargement dynamique d’un modèle
function loadModel(model) {
    const modelData = models[model];

    document.getElementById('model-title').textContent = modelData.title;
    document.getElementById('model-price').textContent = modelData.price;
    document.getElementById('model-description').textContent = modelData.description;

    document.getElementById('form-subject').value = `Nouvelle commande ${modelData.title}`;
    document.getElementById('form-vehicle').value = modelData.title;
    document.getElementById('form-price').value = modelData.price;

    const specsContainer = document.getElementById('model-specs');
    specsContainer.innerHTML = '';
    modelData.specs.forEach(spec => {
        const item = document.createElement('div');
        item.className = 'spec-item';
        item.innerHTML = `
            <img src="${spec.icon}" alt="Icone">
            <span>${spec.text}</span>
        `;
        specsContainer.appendChild(item);
    });

    const featuresContainer = document.getElementById('model-features');
    featuresContainer.innerHTML = '<h2>Caractéristiques principales</h2>';
    modelData.features.forEach(feature => {
        const f = document.createElement('div');
        f.className = 'feature-item';
        f.innerHTML = `
            <div class="feature-icon">✓</div>
            <div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `;
        featuresContainer.appendChild(f);
    });

    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = '';
    const indicator = document.getElementById('slide-indicator');
    indicator.innerHTML = '';

    modelData.images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active');
        slide.innerHTML = `<img src="${img}" alt="${modelData.altTexts[index]}">`;
        slideshow.appendChild(slide);

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

// Diaporama
function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach(d => d.classList.remove('active'));

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

// Gestion du formulaire
document.getElementById('vehicleOrderForm').addEventListener('submit', function(e) {
    console.log('Demande de réservation envoyée');
});
