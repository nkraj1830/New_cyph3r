// Initialize Swiper Hero Slider
const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 1000, // Makes the transition a smooth 1-second glide
    autoplay: {
        delay: 3500, // Waits 3.5 seconds before changing
        disableOnInteraction: false,
    },
});

// Terminal Typing Effect for the About Section
const textToType = ">> Connecting to IIIT Kota mainframe... Connection secure. Welcome to CYPH3R.";
const typeTarget = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        typeTarget.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, Math.floor(Math.random() * 60) + 30);
    }
}

// Ensure the typing starts when scrolling to the About section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(typeWriter, 500);
            observer.disconnect();
        }
    });
});

observer.observe(document.getElementById('about'));