const initSlider = () => {
    const imagelist = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    // Get the width of one image item (assuming all images are of the same width)
    const imageWidth = document.querySelector(".slider-wrapper .image-item").offsetWidth;

    // Slide images according to the slide button clicks  
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageWidth * direction;
            imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider);
