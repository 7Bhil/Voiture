
        // Données des modèles Bentley
        const models = {
            bentayga: {
                title: "Bentley Bentayga 2023",
                price: "185 000 €",
                images: [
                    "../Voiture/Bentley/BENTAYGA/B20.jpeg",
                    "../Voiture/Bentley/BENTAYGA/B21.jpeg",
                    "../Voiture/Bentley/BENTAYGA/B22.jpeg",
                    "../Voiture/Bentley/BENTAYGA/B23.jpeg",
                    "../Voiture/Bentley/BENTAYGA/B24.jpeg",
                    "../Voiture/Bentley/BENTAYGA/B25.jpeg"
                ],
                altTexts: [
                    "Bentley Bentayga - Vue avant",
                    "Bentley Bentayga - Vue latérale",
                    "Bentley Bentayga - Vue arrière",
                    "Bentley Bentayga - Intérieur luxueux",
                    "Bentley Bentayga - Détails finition"
                ],
                specs: [
                    {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "4.0L V8 - 550 ch"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "0-100 km/h en 4.5s"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "SUV de luxe"}
                ],
                description: "Le Bentley Bentayga redéfinit le luxe dans l'univers des SUV avec son raffinement britannique et ses performances exceptionnelles.",
                features: [
                    {title: "Moteur V8 biturbo", description: "Puissance de 550 chevaux avec couple exceptionnel"},
                    {title: "Intérieur sur mesure", description: "Cuir premium et finitions artisanales"},
                    {title: "Suspension pneumatique", description: "Confort optimal sur tous terrains"},
                    {title: "Technologie avancée", description: "Écran tactile 10.9\" et assistance à la conduite"}
                ]
            },
            continental: {
                title: "Bentley Continental GT 2023",
                price: "220 000 €",
                images: [
                    "../Voiture/Bentley/Continentale GT/B0.jpeg",
                    "../Voiture/Bentley/Continentale GT/B01.jpeg",
                    "../Voiture/Bentley/Continentale GT/B02.jpeg",
                    "../Voiture/Bentley/Continentale GT/B03.jpeg",
                    "../Voiture/Bentley/Continentale GT/B04.jpeg",
                    "../Voiture/Bentley/Continentale GT/B05.jpeg"
                ],
                altTexts: [
                    "Bentley Continental GT - Vue avant",
                    "Bentley Continental GT - Vue latérale",
                    "Bentley Continental GT - Vue arrière",
                    "Bentley Continental GT - Intérieur",
                    "Bentley Continental GT - Tableau de bord"
                ],
                specs: [
                    {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "6.0L W12 - 635 ch"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "0-100 km/h en 3.7s"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Grand Tourer"}
                ],
                description: "La Continental GT incarne l'élégance sportive britannique avec son moteur W12 et son design intemporel.",
                features: [
                    {title: "Moteur W12 emblématique", description: "635 chevaux de puissance pure"},
                    {title: "Design sculptural", description: "Lignes fluides et proportions parfaites"},
                    {title: "Craftmanship exceptionnel", description: "Finitions main réalisées à Crewe"},
                    {title: "Performance de pointe", description: "Vitesse de pointe de 333 km/h"}
                ]
            },
            flyingspur: {
                title: "Bentley Flying Spur 2023",
                price: "205 000 €",
                images: [
                   "../Voiture/Bentley/FLYING SPUR/B10.jpeg",
                    "../Voiture/Bentley/FLYING SPUR/B11.jpeg",
                    "../Voiture/Bentley/FLYING SPUR/B12.jpeg",
                    "../Voiture/Bentley/FLYING SPUR/B13.jpeg",
                    "../Voiture/Bentley/FLYING SPUR/B14.jpeg"
                ],
                altTexts: [
                    "Bentley Flying Spur - Vue avant",
                    "Bentley Flying Spur - Vue latérale",
                    "Bentley Flying Spur - Vue arrière",
                    "Bentley Flying Spur - Intérieur arrière",
                    "Bentley Flying Spur - Détails luxe"
                ],
                specs: [
                    {icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png", text: "6.0L W12 - 635 ch"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", text: "Transmission intégrale"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png", text: "0-100 km/h en 3.8s"},
                    {icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png", text: "Berline de luxe"}
                ],
                description: "La Flying Spur allie le confort d'une limousine au dynamisme d'une sportive, incarnant l'excellence Bentley.",
                features: [
                    {title: "Espace arrière premium", description: "Sièges électriques avec massage et climatisation"},
                    {title: "Insonorisation parfaite", description: "Habitacle silencieux pour un confort optimal"},
                    {title: "Technologie embarquée", description: "Écrans individuels et connectivité avancée"},
                    {title: "Châssis adaptatif", description: "Suspension pilotée électroniquement"}
                ]
            }
        };

        // Variables du diaporama
        let currentSlide = 0;
        let currentModel = 'bentayga';
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