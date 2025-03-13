document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");
    
    carousels.forEach(carousel => {
        let images = carousel.querySelectorAll("img");
        let index = 0;

        function showNextImage() {
            images[index].classList.remove("active");
            index = (index + 1) % images.length;
            images[index].classList.add("active");
        }
        
        setInterval(showNextImage, 3000);
    });
});
