// Toggle Icon navbar
let menutoggle = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menutoggle.onclick = function() {
    menutoggle.classList.toggle('active1');
    navbar.classList.toggle('active');
}

// Education Toggle Button
let toggle1 = document.querySelector('#education_toggle1');
let toggle_body1 = document.querySelector('#education_toggle1_body');
let toggle2 = document.querySelector('#education_toggle2');
let toggle_body2 = document.querySelector('#education_toggle2_body');

toggle1.addEventListener('click', () => {
    toggle1.classList.toggle('bx-chevron-up');
    toggle_body1.classList.toggle('active2');
})

toggle2.addEventListener('click', () => {
    toggle2.classList.toggle('bx-chevron-up');
    toggle_body2.classList.toggle('active3');
})

// Dark Theme Icon
const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('darkmode');
    themeBtn.classList.toggle('bxs-sun');
})

// Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            });
        };
    });
    // Sticky nabvar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link(scroll)
    menutoggle.classList.remove('active1');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .education-column .title', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skills-column, .education-column', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .skills-column .title .about-img,', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .about-content p, .about-content .btn', { origin: 'right' });

// Typed Js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'MERN Stack Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
