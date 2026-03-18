// ============================================================
// PROTEÇÃO CONTRA CÓPIA E SEGURANÇA
// ============================================================

// Desabilitar clique direito
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  showNotification('Conteúdo protegido!', 'error');
  return false;
});

// Desabilitar seleção de texto
document.addEventListener('selectstart', (e) => {
  if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
    e.preventDefault();
  }
});

// Desabilitar F12, Ctrl+Shift+I, Ctrl+Shift+J (Dev Tools)
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.shiftKey && e.key === 'C')
  ) {
    e.preventDefault();
    showNotification('Ferramentas de desenvolvimento desabilitadas!', 'warning');
  }
});

// Desabilitar cópia com Ctrl+C
document.addEventListener('copy', (e) => {
  e.preventDefault();
  showNotification('Cópia de conteúdo desabilitada!', 'error');
});

// Adicionar watermark invisível
const watermark = document.createElement('div');
watermark.style.position = 'fixed';
watermark.style.top = '50%';
watermark.style.left = '50%';
watermark.style.transform = 'translate(-50%, -50%) rotate(-45deg)';
watermark.style.pointerEvents = 'none';
watermark.style.opacity = '0.05';
watermark.style.fontSize = '120px';
watermark.style.fontWeight = 'bold';
watermark.style.zIndex = '-1';
watermark.textContent = 'CLÍNICA ODONTO PREMIUM © 2026';
document.body.appendChild(watermark);

// ============================================================
// SISTEMA DE NOTIFICAÇÕES
// ============================================================

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#ff9800'};
    color: white;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================================
// MODO ESCURO
// ============================================================

function initDarkMode() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    if (darkModeToggle) darkModeToggle.checked = true;
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', (e) => {
      const theme = e.target.checked ? 'dark' : 'light';
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }
}

// ============================================================
// AGENDAMENTO COM CALENDÁRIO
// ============================================================

const form = document.getElementById("form")

form.addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let telefone = document.getElementById("telefone").value
let servico = document.getElementById("servico").value
let data = document.getElementById("data").value
let hora = document.getElementById("hora").value

if (!nome || !telefone || servico === 'Selecione um serviço' || !data || !hora) {
  showNotification('Por favor, preencha todos os campos!', 'error');
  return;
}

let numero = "5516981359971"

let mensagem = `Olá, gostaria de agendar uma consulta.

Nome: ${nome}
Telefone: ${telefone}
Serviço: ${servico}
Data: ${data}
Horário: ${hora}`

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

showNotification('Redirecionando para WhatsApp...', 'success');
setTimeout(() => {
  window.open(url,"_blank")
}, 1000);

})

const horas = document.querySelectorAll(".hora")
const inputHora = document.getElementById("hora")

horas.forEach(botao => {

botao.addEventListener("click",()=>{

horas.forEach(b=>b.classList.remove("selecionado"))

botao.classList.add("selecionado")

inputHora.value = botao.innerText

})

})

const calendar = document.getElementById("calendar")
const mesAno = document.getElementById("mesAno")

let dataAtual = new Date()

function renderCalendar(){

calendar.innerHTML=""

let ano = dataAtual.getFullYear()
let mes = dataAtual.getMonth()

mesAno.innerText = dataAtual.toLocaleDateString("pt-BR",{month:"long",year:"numeric"})

let diasMes = new Date(ano, mes+1, 0).getDate()

for(let i=1;i<=diasMes;i++){

let dia = document.createElement("div")

dia.classList.add("day")

dia.innerText = i

// Desabilitar datas passadas
let dataClique = new Date(ano, mes, i)
if (dataClique < new Date()) {
  dia.classList.add("disabled")
  dia.style.cursor = "not-allowed"
  dia.style.opacity = "0.5"
} else {
  dia.onclick = function(){
    document.querySelectorAll(".day").forEach(d=>d.classList.remove("selected"))
    dia.classList.add("selected")
    let mesFormatado = String(mes+1).padStart(2,"0")
    let diaFormatado = String(i).padStart(2,"0")
    document.getElementById("data").value = `${ano}-${mesFormatado}-${diaFormatado}`
  }
}

calendar.appendChild(dia)

}

}

renderCalendar()

document.getElementById("prevMes").onclick=()=>{
dataAtual.setMonth(dataAtual.getMonth()-1)
renderCalendar()
}

document.getElementById("nextMes").onclick=()=>{
dataAtual.setMonth(dataAtual.getMonth()+1)
renderCalendar()
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
header.classList.add("header-scroll");
header.classList.add("scroll")
}else{
header.classList.remove("header-scroll");
header.classList.remove("scroll")
}

});

const elements = document.querySelectorAll(".card, .dentista, .depoimento, .beneficio-card, .galeria-item")

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top
const screen = window.innerHeight

if(position < screen - 100){
el.classList.add("fade-up","show")
}

})

})

// ============================================================
// FAQ INTERATIVO
// ============================================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';

    // Fechar todos os outros
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
        otherItem.classList.remove('open');
      }
    });

    // Toggle atual
    if (isOpen) {
      answer.style.maxHeight = '0px';
      item.classList.remove('open');
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      item.classList.add('open');
    }
  });
});

// ============================================================
// NEWSLETTER
// ============================================================

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailNewsletter').value;
    showNotification(`Email ${email} inscrito com sucesso!`, 'success');
    newsletterForm.reset();
  });
}

// ============================================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ============================================================
// GALERIA COM EFEITO HOVER
// ============================================================

const galeriaItems = document.querySelectorAll('.galeria-item');
galeriaItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

// ============================================================
// INICIALIZAR APLICAÇÃO
// ============================================================

window.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  showNotification('Bem-vindo à Clínica Odonto Premium! 😊', 'success');
});

// Animação para entrada de página
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});