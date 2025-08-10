// Toggle navbar on mobile
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Typing effect simulation
const typingElement = document.getElementById('typing');
const titles = ["Electrical Engineer", "Autocad Electrical","Web Developer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = titles[index];
    if (isDeleting) {
        typingElement.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % titles.length;
        }
    } else {
        typingElement.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
