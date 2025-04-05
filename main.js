document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", function () {
            item.classList.toggle("active");
        });
    });
});


/* Menú de Navegación */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = document.getElementById("menu-icon");

    menuToggle.addEventListener("click", () => {
        console.log("Botón de menú clickeado"); // Debugging

        if (navMenu.classList.contains("hidden")) {
            navMenu.classList.remove("hidden");
            navMenu.classList.add("flex");
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times"); // Cambia el icono a "X"
        } else {
            navMenu.classList.add("hidden");
            navMenu.classList.remove("flex");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars"); // Vuelve al icono de hamburguesa
        }
    });
});

        // Función para mostrar y ocultar el menú en móviles
        document.getElementById("mobile-menu-button").addEventListener("click", function() {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden"); // Alterna la clase 'hidden' para mostrar/ocultar el menú
          });
