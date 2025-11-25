// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const githubIcon = document.getElementById('githubIcon');
const linkedinIcon = document.getElementById('linkedinIcon');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.setAttribute('data-theme', currentTheme);
updateIcons(currentTheme);

function updateIcons(theme) {
    const isDark = theme === 'dark';
    themeToggle.src = `./assets/${isDark ? 'moon' : 'sun'}.svg`;
    githubIcon.src = `./assets/github-${isDark ? 'dark' : 'light'}.svg`;
    linkedinIcon.src = `./assets/linkedin-${isDark ? 'dark' : 'light'}.svg`;
}

themeToggle.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
});

// Typewriter Effect
const typewriterText = 'Desenvolvedor FrontEnd';
const typingElement = document.getElementById('typingText');
let index = 0;
let displayText = '';

function typeWriter() {
    if (index < typewriterText.length) {
        displayText += typewriterText.charAt(index);
        typingElement.textContent = displayText;
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            displayText = '';
            index = 0;
            typingElement.textContent = '';
            typeWriter();
        }, 10000);
    }
}

typeWriter();

// Scroll Reveal Animation
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(#hero)');
    const projectCards = document.querySelectorAll('.project-card');
    const skillItems = document.querySelectorAll('.skill-item');
    
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });
    
    projectCards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
        card.classList.add('scroll-reveal');
        observer.observe(card);
    });
    
    skillItems.forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.05}s`;
        item.classList.add('scroll-reveal');
        observer.observe(item);
    });
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.className = 'back-to-top';
backToTop.setAttribute('aria-label', 'Voltar ao topo');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});