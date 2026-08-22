document.querySelector('.button-primary')?.addEventListener('click', function() {
    // Прокрутка к секции "Контакты" в футере
    document.querySelector('.footer')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}); 
const cards = document.querySelectorAll('.service-card, .card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Добавляем задержку для каждой карточки
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.15, // Карточка появляется когда видно 15%
    rootMargin: '0px 0px -50px 0px' // Небольшой отступ снизу
});

// Настраиваем начальное состояние для каждой карточки
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    observer.observe(card);
});
const dog = document.querySelector('.hero-bigdog-png');
if (dog) {
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        dog.style.transform = `translateY(${scrollY * 0.15}px)`;
    });
}
const track = document.querySelector('.track');
if (track) {
    track.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
}
const aboutBtn = document.querySelector('.btn-more');
const modal = document.getElementById('aboutModal');
const closeBtns = document.querySelectorAll('#closeModalBtn, #closeModalBtn2');

aboutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});