
//Suavidade na página por conta das seções com #
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

//Botões com pop-ups
const btnDoar = document.querySelector('.btn-doar');
if (btnDoar) {
    btnDoar.addEventListener('click', function() {
        alert('Obrigado por querer ajudar! Você será redirecionado para a página de doações.');
    });
}

const btnDoacao = document.querySelector('.btn-doacao');
if (btnDoacao) {
    btnDoacao.addEventListener('click', function() {
        alert('Obrigado por querer ajudar! Você será redirecionado para a página de doações.');
    });
}

const btnFaleConosco = document.querySelector('.btn-fale-conosco');
if (btnFaleConosco) {
    btnFaleConosco.addEventListener('click', function() {
        alert('Obrigado por entrar em contato! Um formulário será aberto em breve.');
    });
}

//Navegação pra seção de contatos
const btnContato = document.querySelector('.btn-contato');
if (btnContato) {
    btnContato.addEventListener('click', function() {
        const contatosSection = document.getElementById('contatos');
        if (contatosSection) {
            contatosSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

//Quando um certo conteúdo começar a aparecer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

//Começa o efeito
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

//Faz os cards aparecerem
document.querySelectorAll('.card, .relato-card, .parceiro-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});


//Pega posição do usuário e destaca o link correspondente
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

//"Linka" CSS e JS à uma classe
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #0066FF;
        font-weight: bold;
        border-bottom: 2px solid #0066FF;
    }
`;
document.head.appendChild(style);