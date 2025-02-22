document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    let currentIndex = 0;
    const maxVisible = 3; // Number of images shown at once

    function updateCarousel() {
        const slideWidth = images[0].clientWidth + 20; // Image width + gap
        slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function showNext() {
        if (currentIndex < images.length - maxVisible) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to start
        }
        updateCarousel();
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - maxVisible; // Loop back to end
        }
        updateCarousel();
    }

    document.querySelector(".next").addEventListener("click", showNext);
    document.querySelector(".prev").addEventListener("click", showPrev);

    // Auto-slide every 8 seconds
    setInterval(showNext, 5000);

    // Adjust on window resize
    window.addEventListener("resize", updateCarousel);
});


document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.querySelector(".write");
    const textArray = JSON.parse(typedText.getAttribute("data-type"));
    const period = parseInt(typedText.getAttribute("data-period"), 10) || 2000;

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = textArray[index];
        let displayedText = isDeleting
            ? currentText.substring(0, charIndex--)
            : currentText.substring(0, charIndex++);

        typedText.innerHTML = displayedText;

        let typingSpeed = isDeleting ? 100 : 150;

        if (!isDeleting && displayedText === currentText) {
            typingSpeed = period;
            isDeleting = true;
        } else if (isDeleting && displayedText === "") {
            isDeleting = false;
            index = (index + 1) % textArray.length;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});


function copyEmail() {
    const email = "karabekirdeniz@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const emailCopiedElement = document.getElementById("email-copied");
        emailCopiedElement.textContent = `Copied email: ${email}`;
        emailCopiedElement.style.display = "block"; // Show the message
        setTimeout(() => {
            emailCopiedElement.style.display = "none"; // Hide after 3 seconds
        }, 3000);
    }).catch(err => {
        alert("Failed to copy email: " + err);
    });
}

window.addEventListener("scroll", function () {
    document.querySelector(".hero-title").style.transform = `translateY(${window.scrollY * 0.5}px)`;
});