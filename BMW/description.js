
        // Données des modèles
    const models = {
        serie7: {
            title: "BMW Série 7 2023",
            price: "139 000 €",
            images: [
                "../Voiture/BMW/SERIE 7/BM01.jpg",
                "../Voiture/BMW/SERIE 7/BM02.jpg",
                "../Voiture/BMW/SERIE 7/BM03.jpg",
                "../Voiture/BMW/SERIE 7/BM04.jpg",
                "../Voiture/BMW/SERIE 7/BM05.jpg"
            ],
            altTexts: [
                "BMW Série 7 - Vue avant",
                "BMW Série 7 - Vue latérale",
                "BMW Série 7 - Vue arrière",
                "BMW Série 7 - Intérieur conducteur",
                "BMW Série 7 - Sièges arrière"
            ],
            specs: [
                {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "3.0L Turbo - 400 chevaux"},
                {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale xDrive"},
                {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "7.5L/100km (mixte)"},
                {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Noir carbone métallisé"}
            ],
            description: "La BMW Série 7 2023 redéfinit le luxe automobile. Avec son design élégant, son habitacle somptueux et ses technologies de pointe, elle offre une expérience de conduite inégalée.",
            features: [
                {
                    title: "Système iDrive 8 avec écran courbé",
                    description: "Interface digitale intuitive avec écran tactile 14.9 pouces et commande vocale naturelle."
                },
                {
                    title: "Pack Executive Lounge Pro",
                    description: "Sièges arrière massants avec fonction repos, tablette de contrôle et climatisation 4 zones."
                },
                {
                    title: "Toit panoramique Sky Lounge",
                    description: "Éclairage LED dynamique créant une atmosphère unique dans l'habitacle."
                },
                {
                    title: "Assistance de conduite professionnelle",
                    description: "Système semi-autonome de niveau 2 avec maintien de voie actif et régulateur adaptatif."
                }
            ]
        },
        i7: {
            title: "BMW i7 xDrive60",
            price: "145 000 €",
            images: [
                "../Voiture/BMW/I7/BM01.jpg",
                "../Voiture/BMW/I7/BM02.jpg",
                "../Voiture/BMW/I7/BM03.jpg",
                "../Voiture/BMW/I7/BM04.jpg",
                "../Voiture/BMW/I7/BM05.jpg"
            ],
            altTexts: [
                "BMW i7 - Vue avant électrique",
                "BMW i7 - Vue latérale profilée",
                "BMW i7 - Vue arrière lumineuse",
                "BMW i7 - Tableau de bord numérique",
                "BMW i7 - Espace arrière luxueux"
            ],
            specs: [
                {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "Électrique - 544 chevaux"},
                {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "xDrive - Transmission intégrale"},
                {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "Autonomie 625 km (WLTP)"},
                {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Bleu métallisé"}
            ],
            description: "La BMW i7 2023 révolutionne le luxe électrique. Avec son silence absolu, son accélération instantanée et ses technologies innovantes, elle redéfinit l'expérience premium.",
            features: [
                {
                    title: "Batterie haute capacité 105 kWh",
                    description: "Recharge ultra-rapide à 195 kW (10-80% en 34 minutes)"
                },
                {
                    title: "Écran théâtre 31 pouces",
                    description: "Écran 8K rabattable pour les passagers arrière avec système Bowers & Wilkins"
                },
                {
                    title: "My Modes personnalisables",
                    description: "4 modes de conduite avec ambiance sonore et lumineuse adaptée"
                },
                {
                    title: "Chargement bidirectionnel",
                    description: "Technologie Vehicle-to-Load pour alimenter des appareils externes"
                }
            ]
        },
        x: {
            title: "BMW X7 2023",
            price: "119 000 €",
            images: [
                "../Voiture/BMW/X/BM01.jpg",
                "../Voiture/BMW/X/BM02.jpg",
                "../Voiture/BMW/X/BM03.jpg",
                "../Voiture/BMW/X/BM04.jpg",
                "../Voiture/BMW/X/BM05.jpg"
            ],
            altTexts: [
                "BMW X7 - Vue avant",
                "BMW X7 - Vue latérale",
                "BMW X7 - Vue arrière",
                "BMW X7 - Intérieur conducteur",
                "BMW X7 - Sièges arrière"
            ],
            specs: [
                {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "4.4L V8 TwinTurbo - 530 ch"},
                {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale xDrive"},
                {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "10.5L/100km (mixte)"},
                {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Blanc minéral métallisé"}
            ],
            description: "Le BMW X7 2023 combine puissance, élégance et polyvalence. Ce SUV premium offre un espace généreux et des technologies innovantes pour tous les types de parcours.",
            features: [
                {
                    title: "Système de suspension pneumatique",
                    description: "Confort optimal avec réglage automatique en fonction de la route et de la charge."
                },
                {
                    title: "Third Row Comfort Package",
                    description: "Sièges arrière électriques avec contrôle individuel et ventilation."
                },
                {
                    title: "Laserlight BMW",
                    description: "Phares laser avec portée allongée et fonctions d'éclairage intelligentes."
                },
                {
                    title: "Harmon Kardon Surround Sound",
                    description: "Système audio haut de gamme 16 haut-parleurs pour une expérience immersive."
                }
            ]
        }
    }
        // Variables du diaporama
        let currentSlide = 0;
        let currentModel = 'serie7';
        let slides = [];
        let slideInterval;

        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            // Gestion du sélecteur de modèle
            const modelOptions = document.querySelectorAll('.model-option');
            modelOptions.forEach(option => {
                option.addEventListener('click', function() {
                    modelOptions.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                    currentModel = this.dataset.model;
                    loadModel(currentModel);
                });
            });

            // Charger le modèle par défaut
            loadModel(currentModel);
        });

        // Charger un modèle spécifique
        function loadModel(model) {
            const modelData = models[model];
            
            // Mettre à jour les infos principales
            document.getElementById('model-title').textContent = modelData.title;
            document.getElementById('model-price').textContent = modelData.price;
            document.getElementById('model-description').textContent = modelData.description;
            
            // Mettre à jour le formulaire
            document.getElementById('form-subject').value = `Nouvelle commande ${modelData.title}`;
            document.getElementById('form-vehicle').value = modelData.title;
            document.getElementById('form-price').value = modelData.price;
            
            // Mettre à jour les spécifications
            const specsContainer = document.getElementById('model-specs');
            specsContainer.innerHTML = '';
            modelData.specs.forEach(spec => {
                const specItem = document.createElement('div');
                specItem.className = 'spec-item';
                specItem.innerHTML = `
                    <img src="${spec.icon}" alt="Icone">
                    <span>${spec.text}</span>
                `;
                specsContainer.appendChild(specItem);
            });
            
            // Mettre à jour les caractéristiques
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
            
            // Mettre à jour le diaporama
            const slideshow = document.getElementById('slideshow');
            slideshow.innerHTML = '';
            const indicator = document.getElementById('slide-indicator');
            indicator.innerHTML = '';
            
            modelData.images.forEach((img, index) => {
                // Créer les slides
                const slide = document.createElement('div');
                slide.className = 'slide';
                if (index === 0) slide.classList.add('active');
                slide.innerHTML = `<img src="${img}" alt="${modelData.altTexts[index]}">`;
                slideshow.appendChild(slide);
                
                // Créer les indicateurs
                const dot = document.createElement('div');
                dot.className = 'indicator-dot';
                if (index === 0) dot.classList.add('active');
                dot.onclick = () => goToSlide(index);
                indicator.appendChild(dot);
            });
            
            // Réinitialiser le diaporama
            slides = document.querySelectorAll('.slide');
            currentSlide = 0;
            resetTimer();
        }

        // Fonctions du diaporama
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
            slideInterval = setInterval(nextSlide, 5000); // 5 secondes
        }
        
        function resetTimer() {
            clearInterval(slideInterval);
            startSlideShow();
        }
        
        // Gestion du formulaire
        document.getElementById('vehicleOrderForm').addEventListener('submit', function(e) {
            // Validation supplémentaire possible ici
            console.log('Demande de réservation envoyée');
        });