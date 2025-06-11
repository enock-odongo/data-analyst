// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
    if (hamburger.classList.contains('open')) {
        hamburger.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        hamburger.querySelectorAll('span')[1].style.opacity = '0';
        hamburger.querySelectorAll('span')[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        hamburger.querySelectorAll('span').forEach(span => span.style.transform = 'none');
        hamburger.querySelectorAll('span')[1].style.opacity = '1';
    }
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(span => span.style.transform = 'none');
        hamburger.querySelectorAll('span')[1].style.opacity = '1';
    });
});

// Scroll Animations
const animateElements = document.querySelectorAll('.animate-slide-up');

const checkScroll = () => {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Contact Form Submission
function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = '#B91C1C';
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = '#B91C1C';
        return;
    }

    formMessage.textContent = 'Thank you for your message! I’ll get back to you soon.';
    formMessage.style.color = '#2DD4BF';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Newsletter Subscription
function subscribeNewsletter() {
    const newsletterInput = document.querySelector('.newsletter-form input').value.trim();
    if (!newsletterInput || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterInput)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert('Thank you for subscribing to my newsletter!');
    document.querySelector('.newsletter-form input').value = '';
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Card Hover Animations
const cards = document.querySelectorAll('.project-card, .skill-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});