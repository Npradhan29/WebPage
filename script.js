document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const quantitySpan = document.getElementById("quantity");
    const colorOptions = document.querySelectorAll(".color-option");
    const sizeButtons = document.querySelectorAll(".size");

    let quantity = 1;

    // Object to store different image URLs for each color
    const colorImages = {
        beige: "product-beige.jpg",
        lightblue: "product-lightblue.jpg",
        pink: "product-pink.jpg"
    };

    // Ensure main image exists
    if (!mainImage) {
        console.error("Main product image element not found!");
        return;
    }

    // Change main image when thumbnail is clicked
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            mainImage.src = thumbnail.src;
        });
    });

    // Quantity controls
    decreaseBtn?.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });

    increaseBtn?.addEventListener("click", () => {
        quantity++;
        quantitySpan.textContent = quantity;
    });

    // Change product image based on selected color
    colorOptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedColor = option.getAttribute("data-color");
            console.log("Color selected:", selectedColor);

            if (colorImages[selectedColor]) {
                mainImage.src = colorImages[selectedColor];
                console.log("Image changed to:", colorImages[selectedColor]);
            } else {
                console.warn("No image found for selected color:", selectedColor);
            }

            // Highlight selected color
            colorOptions.forEach(opt => opt.style.border = "2px solid transparent");
            option.style.border = "2px solid black";
        });
    });

    // Change size selection
    sizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            sizeButtons.forEach(btn => btn.style.background = "white");
            button.style.background = "#ddd";
        });
    });
});
