document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".service-container");
    const btnLeft = document.querySelector(".scroll-btn.left");
    const btnRight = document.querySelector(".scroll-btn.right");

    if (!container || !btnLeft || !btnRight) {
        console.error("Uno o más elementos no fueron encontrados.");
        return;
    }

    const scrollAmount = 300;

    btnLeft.onclick = () => {
        console.log("Botón izquierdo clickeado");
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    btnRight.onclick = () => {
        console.log("Botón derecho clickeado");
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };
});
