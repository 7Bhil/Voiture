         // Données des modèles Rolls-Royce
        const models = {
            cullinan: {
                title: "Rolls-Royce Cullinan 2023",
                price: "400 000 €",
                images: [
                    "../Voiture/Roll_Roys/CULLIAN/R20.jpeg",
                    "../Voiture/Roll_Roys/CULLIAN/R21.jpeg",
                    "../Voiture/Roll_Roys/CULLIAN/R22.jpeg",
                    "../Voiture/Roll_Roys/CULLIAN/R23.jpeg",
                    "../Voiture/Roll_Roys/CULLIAN/R24.jpeg",
                    "../Voiture/Roll_Roys/CULLIAN/R25.jpeg"
                ],
                altTexts: [
                    "Rolls-Royce Cullinan - Vue avant majestueuse",
                    "Rolls-Royce Cullinan - Profil élégant",
                    "Rolls-Royce Cullinan - Vue arrière imposante",
                    "Rolls-Royce Cullinan - Intérieur luxueux",
                    "Rolls-Royce Cullinan - Détails artisanaux"
                ],
                specs: [
                    {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "6.75L V12 biturbo - 571 ch"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "0-100 km/h en 5.2s"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "SUV ultra-luxe"}
                ],
                description: "Le Rolls-Royce Cullinan incarne l'excellence britannique dans l'univers des SUV de luxe absolu.",
                features: [
                    {title: "Spirit of Ecstasy rétractable", description: "Emblème iconique qui se rétracte automatiquement"},
                    {title: "Portes suicide électriques", description: "Ouverture silencieuse assistée électriquement"},
                    {title: "Suspension Magic Carpet Ride", description: "Confort de roulement incomparable sur tous terrains"},
                    {title: "Intérieur sur mesure", description: "Cuir premium et essences de bois rares travaillées main"}
                ]
            },
            ghost: {
                title: "Rolls-Royce Ghost 2023",
                price: "350 000 €",
                images: [
                    "../Voiture/Roll_Roys/GHOST/R10.jpeg",
                    "../Voiture/Roll_Roys/GHOST/R11.jpeg",
                    "../Voiture/Roll_Roys/GHOST/R12.jpeg",
                    "../Voiture/Roll_Roys/GHOST/R13.jpeg",
                    "../Voiture/Roll_Roys/GHOST/R14.jpeg",
                    "../Voiture/Roll_Roys/GHOST/R15.jpeg"
                ],
                altTexts: [
                    "Rolls-Royce Ghost - Élégance pure",
                    "Rolls-Royce Ghost - Design intemporel",
                    "Rolls-Royce Ghost - Raffinement absolu",
                    "Rolls-Royce Ghost - Habitacle somptueux",
                    "Rolls-Royce Ghost - Finitions d'exception"
                ],
                specs: [
                    {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "6.75L V12 biturbo - 571 ch"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Propulsion arrière"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "0-100 km/h en 4.8s"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Berline de prestige"}
                ],
                description: "La Ghost redéfinit l'art de voyager avec un luxe discret et une technologie de pointe invisible.",
                features: [
                    {title: "Architecture of Luxury", description: "Plateforme aluminium exclusive ultra-rigide"},
                    {title: "Système Planar", description: "Suspension révolutionnaire pour un silence parfait"},
                    {title: "Starlight Headliner", description: "Ciel de toit constellation de 1 340 fibres optiques"},
                    {title: "Micro-environnement", description: "Purification d'air et contrôle climatique individuel"}
                ]
            },
            wraith: {
                title: "Rolls-Royce Wraith 2023",
                price: "320 000 €",
                images: [
                    "../Voiture/Roll_Roys/WRAITH/R30.jpeg",
                    "../Voiture/Roll_Roys/WRAITH/R31.jpeg",
                    "../Voiture/Roll_Roys/WRAITH/R32.jpeg",
                    "../Voiture/Roll_Roys/WRAITH/R33.jpeg",
                    "../Voiture/Roll_Roys/WRAITH/R34.jpeg",
                    "../Voiture/Roll_Roys/WRAITH/R35.jpeg"
                ],
                altTexts: [
                    "Rolls-Royce Wraith - Puissance et élégance",
                    "Rolls-Royce Wraith - Lignes dynamiques",
                    "Rolls-Royce Wraith - Sportivité luxueuse",
                    "Rolls-Royce Wraith - Cockpit pilote",
                    "Rolls-Royce Wraith - Performance raffinée"
                ],
                specs: [
                    {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "6.6L V12 biturbo - 632 ch"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Propulsion arrière"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "0-100 km/h en 4.4s"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Grand Tourer"}
                ],
                description: "La Wraith unit la puissance brute à l'élégance suprême, incarnant l'esprit sportif de Rolls-Royce.",
                features: [
                    {title: "Satellite Aided Transmission", description: "Boîte de vitesses anticipant le parcours via GPS"},
                    {title: "Portes Coach", description: "Ouverture antagoniste pour un accès théâtral"},
                    {title: "Head-up Display", description: "Projection des informations sur le pare-brise"},
                    {title: "Bespoke Audio", description: "Système audio 18 haut-parleurs signature Rolls-Royce"}
                ]
            }
        };

         // Variables du diaporama
        let currentSlide = 0;
        let currentModel = 'cullinan';
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
            featuresContainer.innerHTML = '<h2>Caractéristiques d\'exception</h2>';
            modelData.features.forEach(feature => {
                const featureItem = document.createElement('div');
                featureItem.className = 'feature-item';
                featureItem.innerHTML = `
                    <div class="feature-icon">✦</div>
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
            console.log('Demande de réservation envoyée pour Rolls-Royce');
        });