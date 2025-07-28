const linksDoMenu = document.querySelectorAll('nav.cabecalho a');

linksDoMenu.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const idDaSessao = link.getAttribute('href').substring(1);

    const secaoAlvo = document.getElementById(idDaSessao);

    if (secaoAlvo) {
      secaoAlvo.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Sistema de Dark Mode com Toggle Animado
let currentTheme = 'light';

// Elementos do DOM
const themeIcon = document.getElementById('themeIcon');

// Verifica se há um tema salvo no localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
    updateThemeDisplay();
}

function toggleTheme() {
    // Adicionar animação de troca
    themeIcon.classList.add('switching');
    
    setTimeout(() => {
        if (currentTheme === 'light') {
            // Mudar para modo escuro
            document.body.classList.add('dark-mode');
            currentTheme = 'dark';
        } else {
            // Mudar para modo claro
            document.body.classList.remove('dark-mode');
            currentTheme = 'light';
        }
        
        // Salvar no localStorage
        localStorage.setItem('theme', currentTheme);
        
        updateThemeDisplay();
        
        // Remover classe de animação após completar
        setTimeout(() => {
            themeIcon.classList.remove('switching');
        }, 600);
    }, 300);
}

function updateThemeDisplay() {
    if (currentTheme === 'dark') {
        themeIcon.textContent = '🔆';
    } else {
        themeIcon.textContent = '💡';
    }
}

// Inicializar o tema quando a página carrega
document.addEventListener('DOMContentLoaded', initTheme);

// Adicionar efeito de hover aprimorado
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');
    
    if (toggleButton) {
        toggleButton.addEventListener('mouseenter', () => {
            if (!themeIcon.classList.contains('switching')) {
                toggleButton.style.transform = 'translateY(-3px) scale(1.1)';
            }
        });
        
        toggleButton.addEventListener('mouseleave', () => {
            if (!themeIcon.classList.contains('switching')) {
                toggleButton.style.transform = 'translateY(0) scale(1)';
            }
        });
    }
});


let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

const swiperContainer = document.querySelector('.mySwiper');
swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});
swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});


const linkEmail = document.getElementById('email-link');

linkEmail.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'mailto:carlos.ksl2001@gmail.com';
});

const linkWhatsApp = document.getElementById('whatsapp-link');

linkWhatsApp.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://wa.me/5513982215305', '_blank');
});