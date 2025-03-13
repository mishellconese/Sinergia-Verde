document.addEventListener("DOMContentLoaded", () => {
    let landingImages = document.querySelectorAll(".landing-container img");
    let currentLandingIndex = 0;

    if (landingImages.length === 0) {
        console.error("No se encontraron imágenes en el landing");
        return;
    }

    function switchLandingImage() {
        landingImages.forEach(img => img.classList.remove("active"));
        landingImages[currentLandingIndex].classList.add("active");
        currentLandingIndex = (currentLandingIndex + 1) % landingImages.length;
    }

    // Mostrar la primera imagen
    landingImages[currentLandingIndex].classList.add("active");

    // Cambiar cada 3 segundos
    setInterval(switchLandingImage, 3000);
});