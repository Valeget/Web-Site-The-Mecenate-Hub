// Smooth scrolling function
function scrollToPortfolio() {
	const portfolioSection = document.getElementById("portfolio");
	if (portfolioSection) {
		portfolioSection.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
}

// Generic scroll to section function
function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	} else {
		// If section doesn't exist, scroll to portfolio as fallback
		scrollToPortfolio();
	}
}

// Project interaction handlers  DA MODIFICARE
function openProject(projectId) {
	const projects = {
		1: "IL VIAGGIO",
	};

	// Create modal effect !VOGLIO CHE SIA UNA FINESTRA PIù GRANDE IN CUI POSSO METTERE IMMAGINI E TESTI
	const modal = document.createElement("div"); //crea l'effetto scuro dietro al contenuto del progetto
	modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                opacity: 0;
                transition: opacity 0.3s ease;
                will-change: opacity;
            `;

	const content = document.createElement("div"); //crea il contenuto del progetto
	content.classList.add("no-scrollbar");
	content.style.cssText = `
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(20px);
                border-radius: 30px;
                padding: clamp(20px, 5vw, 40px);
                width: 95%;
                max-width: 1400px;
                min-height: 90vh;
                max-height: 95vh;
                overflow-y: auto;
                overflow-x: hidden;
                text-align: left;
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
                will-change: opacity, transform;
            `;

	content.innerHTML = ` 
                <h3 style="margin-bottom: 20px; font-size: clamp(1.8rem, 5vw, 3rem); text-align: center; background: linear-gradient(135deg, #ff8c42, #6a5acd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${projects[projectId]}</h3>
                
                <div style="text-align: center; color: #ccc; font-size: 1.1rem; line-height: 1.8;">
                    <p>Un'opportunità unica per chi riconosce nel proprio lavoro il frutto di impegno e creatività.</p>
                    <p>Nato con l'intento di ispirare e divertire i partecipanti, il viaggio si declina come un'esperienza personale e comunitaria:</p>
                    
                    <h4 style="margin-top: 40px; margin-bottom: 15px; text-align: left; color: #ff8c42; font-weight: 700; font-size: 1.4rem;">Il Tuo Percorso Individuale</h4>
                    <p style="text-align: left;">Durante il viaggio visiteremo 3 città di particolare spicco culturale, con eventi e incontri esclusivi con figure affermate nel 
                    proprio ambito. Un'atmosfera ricca di ispirazioni ti accompagnerà in ogni tappa.</p>
                    
                    <!-- 3 Rettangoli verticali -->
                    <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 40px; margin-bottom: 40px; text-align: left;">
                        <div style="flex: 1; min-width: 200px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 25px; opacity: 0; animation: slideInLeft 0.8s ease-out 0.4s forwards;">
                            <h5 style="color: #ff4757; font-size: 1.2rem; margin-bottom: 10px;">Spazi di Coworking Naturali</h5>
                            <p style="font-size: 0.95rem; margin: 0; line-height: 1.6;">Soste in ambienti intimi e 
                            naturali dove la bellezza dei paesaggi ti permetterà di concentrarti sulle tue opere come mai prima d'ora.</p>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 25px; opacity: 0; animation: slideInBottom 0.8s ease-out 0.6s forwards;">
                            <h5 style="color: #ff8c42; font-size: 1.2rem; margin-bottom: 10px;">Una Biblioteca Itinerante</h5>
                            <p style="font-size: 0.95rem; margin: 0; line-height: 1.6;">Ci sposteremo in campero o in van. In ciascuno ci saranno a disposizione libri, saggi, disegni, scatti e strumenti da usare liberamente durante tutto il viaggio.</p>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 25px; opacity: 0; animation: slideInRight 0.8s ease-out 0.8s forwards;">
                            <h5 style="color: #6a5acd; font-size: 1.2rem; margin-bottom: 10px;">Incontri Esclusivi</h5>
                            <p style="font-size: 0.95rem; margin: 0; line-height: 1.6;">Personalità di rilievo condivideranno con te la loro esperienza nelle città visitate.</p>
                        </div>
                    </div>

                    <h4 style="margin-top: 100px; margin-bottom: 15px; text-align: left; color: #ff8c42; font-weight: 700; font-size: 1.4rem;">La Comunità</h4>
                    <p style="text-align: left;">Ogni creativo a bordo proviene da un ramo dell'arte diverso. Scrittori, disegnatori, attori, musicisti — e di questi poeti, 
                    pittori, scultori, sceneggiatori, teatranti, cinematografi, cantanti, strumentisti. Le sfumature sono infinite. 
                    Tutti accomunati dalla fame di realizzare i propri sogni e trovare nuove ispirazioni.</p>

                    <!-- 3 Rettangoli verticali -->
                    <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 40px; margin-bottom: 40px; text-align: left;">
                        <div style="flex: 1; min-width: 200px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 25px; opacity: 0; animation: slideInLeft 0.8s ease-out 1.0s forwards;">
                            <h5 style="color: #ffd166; font-size: 1.2rem; margin-bottom: 10px;">Workshop Pomeridiani</h5>
                            <p style="font-size: 0.95rem; margin: 0; line-height: 1.6;">Ogni pomeriggio è dedicato a una singola persona che conduce un workshop sul proprio ambito, con piccoli laboratori per avvicinare gli altri alla propria realtà creativa.</p>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 25px; opacity: 0; animation: slideInBottom 0.8s ease-out 1.2s forwards;">
                            <h5 style="color: #2ed573; font-size: 1.2rem; margin-bottom: 10px;">Serate Insieme</h5>
                            <p style="font-size: 0.95rem; margin: 0; line-height: 1.6;">Le serate sono pensate per conoscersi più a fondo e, soprattutto, per divertirsi. Un momento di condivisione autentica tra persone che vivono la creatività ogni giorno.</p>
                        </div>
                        
                        <div style="flex: 1; min-width: 200px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 25px; opacity: 0; animation: slideInRight 0.8s ease-out 1.4s forwards;">
                            <h5 style="color: #9b59b6; font-size: 1.2rem; margin-bottom: 10px;">Diversità Creativa</h5>
                            <p style="font-size: 0.95rem; margin: 0; line-height: 1.6;">Ciascun partecipante porta con sé un universo artistico unico. La contaminazione tra discipline diverse è il cuore pulsante dell'esperienza Mecenate Hub.</p>
                        </div>
                    </div>

                </div>

                <div style="text-align: center;">
                    <button onclick="closeModal()" style="
                        background: transparent;
                        color: #ff4757;
                        border: 2px solid #ff4757;
                        padding: 15px 40px;
                        border-radius: 25px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 1.1rem;
                    ">Close</button>
                </div>
            `;

	modal.appendChild(content);
	document.body.appendChild(modal);
	document.body.style.overflow = "hidden";

	// Trigger animation
	setTimeout(() => (modal.style.opacity = "1"), 50);

	// Store modal reference
	window.currentModal = modal;
}

function closeModal() {  //come si chiudono i progetti
	if (window.currentModal) {
		window.currentModal.style.opacity = "0";
		document.body.style.overflow = "";
		setTimeout(() => {
			document.body.removeChild(window.currentModal);
			window.currentModal = null;
		}, 300);
	}
}

// crea l'effetto parallax (ovvero 3d) per le forme fluttuanti
window.addEventListener("scroll", () => {
	if (window.innerWidth > 768) {
		const scrolled = window.pageYOffset;
		const parallaxElements = document.querySelectorAll(".floating-shape");

		parallaxElements.forEach((element, index) => {
			const speed = 0.5 + index * 0.2;
			element.style.transform = `translateY(${scrolled * speed}px)`;
		});
	}
});

// Add intersection observer for animations
const observerOptions = {
	threshold: 0.15,
	rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.animationPlayState = "running";

			// Smette di osservare l'elemento una volta apparso per risparmiare memoria
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe all animated elements
document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelectorAll(".portfolio-item, .stats-section, .section-title")
		.forEach((item) => {
			// Controlla se l'elemento è già visibile all'apertura della pagina
			if (item.getBoundingClientRect().top < window.innerHeight) {
				// Aspetta 2 secondi per lasciar finire completamente l'animazione dell'hero in alto
				setTimeout(() => {
					item.style.animationPlayState = "running";
				}, 2000);
			} else {
				// Altrimenti, usa l'osservatore per aspettare lo scorrimento
				observer.observe(item);
			}
		});
});

// Add dynamic background color shifting
if (window.innerWidth > 768) {
	setInterval(() => {
		const heroBg = document.querySelector(".hero-bg");
		const time = Date.now() / 5000;
		const hue = Math.sin(time) * 30;
		heroBg.style.filter = `hue-rotate(${hue}deg)`;
	}, 100);
}

// Close modal on escape key
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && window.currentModal) {
		closeModal();
	}
});

// Close modal on backdrop click
document.addEventListener("click", (e) => {
	if (e.target === window.currentModal) {
		closeModal();
	}
});
