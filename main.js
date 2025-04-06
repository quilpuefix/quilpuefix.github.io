/**
 * Módulo Principal - QuilpuéFix
 * Versión ultra-comprobada
 */

// Esperar a que TODO esté listo
window.addEventListener('load', function() {
    console.log("DOM completamente cargado y procesado");
    
    // Inicialización condicional de módulos
    if (document.querySelector('.faq-question')) FAQ.init();
    if (document.querySelector('[onclick^="toggleAccordion"]')) Services.init();
    if (document.getElementById('trabajos-container')) WorksCarousel.init();
    
    // Navigation siempre se inicia (asumiendo que existe)
    Navigation.init();
});

// ============ MÓDULOS ============ //
const Navigation = {
    init() {
        console.log("Iniciando navegación");
        // Tu código de navegación aquí
    }
};

const Services = {
    init() {
        console.log("Iniciando servicios");
        document.querySelectorAll('[onclick^="toggleAccordion"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceId = btn.getAttribute('onclick')
                    .replace("toggleAccordion('", "")
                    .replace("')", "");
                this.toggleService(serviceId);
            });
        });
    },
    
    toggleService(serviceId) {
        const element = document.getElementById(serviceId);
        if (element) {
            element.classList.toggle("hidden");
            console.log(`Servicio ${serviceId} toggled`);
        }
    }
};

const WorksCarousel = {
    init() {
        console.log("Iniciando carrusel de trabajos");
        // Tu código del carrusel
    }
};

const FAQ = {
    init() {
        console.log("Iniciando FAQ");
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleAnswer(button);
            });
        });
    },
    
    toggleAnswer(button) {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i.fa-chevron-down');
        
        if (!answer || !icon) return;
        
        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
        
        if (!answer.classList.contains('hidden')) {
            answer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
};

// Funciones para el modal
function openModal(trabajoId) {
    const modal = document.getElementById('trabajo-modal');
    const modalContent = modal.querySelector('.bg-white');
    
    // Aquí deberías cargar el contenido específico según trabajoId
    modalContent.innerHTML = `
        <h3 class="text-lg font-bold text-primario mb-2">Detalles completos del trabajo</h3>
        <p class="text-gray-600">Aquí iría el contenido detallado del trabajo seleccionado...</p>
    `;
    
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('trabajo-modal').classList.add('hidden');
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    const modal = document.getElementById('trabajo-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Función universal para toggle FAQ
function toggleFAQ(button) {
    // Cierra todas las demás preguntas primero
    document.querySelectorAll('[data-faq-item]').forEach(item => {
        if (item !== button.parentElement) {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.fa-chevron-down');
            answer.classList.add('hidden');
            icon.classList.remove('rotate-180');
            button.setAttribute('aria-expanded', 'false');
        }
    });

    // Alterna la pregunta actual
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.fa-chevron-down');
    
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
    button.setAttribute('aria-expanded', answer.classList.contains('hidden') ? 'false' : 'true');
    
    // Scroll suave para mantener visible
    if (!answer.classList.contains('hidden')) {
        answer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Inicialización doble (Alpine + Vanilla JS)
document.addEventListener('DOMContentLoaded', function() {
    // Versión Alpine.js
    if (typeof Alpine !== 'undefined') {
        Alpine.data('toggleFAQ', () => ({
            open: false,
            toggleFAQ(button) {
                this.open = !this.open;
                toggleFAQ(button); // Llama a la función universal
            }
        }));
    }
    
    // Fallback Vanilla JS
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (typeof Alpine === 'undefined') {
                toggleFAQ(this);
            }
        });
    });
});



// Control de videos
document.addEventListener('DOMContentLoaded', function() {
    // Pausar todos los videos cuando uno comienza a reproducirse
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', function() {
            document.querySelectorAll('video').forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });
});