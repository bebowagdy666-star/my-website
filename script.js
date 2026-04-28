const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
    }
});
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = target / 200;
        if(count < target) {
            counter.innerText = Math.ceil(count + speed);
            setTimeout(updateCount, 15);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetID = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
const heroButtons = document.querySelectorAll('.primary-btn, .secondary-btn');
heroButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    });
});
const sections = document.querySelectorAll('section');
const revealOnscraoll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealOnscraoll);
revealOnscraoll();
const priceButtons = document.querySelectorAll('.price-card button');
priceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
    });
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click',(e) =>{
        e.preventDefault();
        const targetID = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({
            behavior:'smooth',
            block:'start'
    });
    });
});
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let scrollY = window.scrollY;
    hero.style.backgroundPostion = `center ${scrollY *0.5}px`;
}); 
document.addEventListener('DOMContentLoaded', () => {
    const startNOWBtn = document.querySelector('.nav-btn');
    startNOWBtn.addEventListener('click', () => {
        window.location.href = '#contact';
    });
    const joinBtn = document.querySelector('.primary-btn');
    joinBtn.addEventListener('click', () => {
        window.location.href = '#pricing';
    });
    const explorBtns = document.querySelectorAll('.hero-buttons .secondary-btn, .price-card button');
    explorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = '#pricing';
        });
    });
});
const frame = document.getElementById('confirmation-frame');
const message = document.getElementById('confirmation-message');

function showMessage(text){
    message.textContent = text;
    frame.classList.add('show');

    setTimeout(()=>{
        frame.classList.remove('show');
    },3000);
}

document.querySelector('.contact button').addEventListener('click', function(e){
    e.preventDefault();
    showMessage("Registration successful!");
});

document.querySelectorAll('.price-card button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        if(btn.closest('.premium')){
            showMessage("You selected the Elite plan 💪");
        }else{
            showMessage("You selected the Starter plan 🔥");
        }
    });
});