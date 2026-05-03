(function() {
  // === EDUCONTROL CAROUSEL ===
  var eduSlides = [
    { src: "assets/images/eduControl/Screenshot_256.png", label: "Login" },
    { src: "assets/images/eduControl/Screenshot_257.png", label: "Dashboard" },
    { src: "assets/images/eduControl/Screenshot_258.png", label: "Gerenciamento de Alunos" },
    { src: "assets/images/eduControl/Screenshot_260.png", label: "Detalhes do Aluno" },
    { src: "assets/images/eduControl/Screenshot_261.png", label: "Lista de Turmas" },
    { src: "assets/images/eduControl/Screenshot_262.png", label: "Frequência" },
    { src: "assets/images/eduControl/Screenshot_263.png", label: "Financeiro Geral" },
    { src: "assets/images/eduControl/Screenshot_264.png", label: "Fluxo de Caixa" },
    { src: "assets/images/eduControl/Screenshot_265.png", label: "Contas a Receber" },
    { src: "assets/images/eduControl/Screenshot_266.png", label: "Configurações" },
    { src: "assets/images/eduControl/Screenshot_267.png", label: "Relatórios" }
  ];
  var eduCurrent = 0;
  var eduImg = document.getElementById('edu-img');
  var eduLabel = document.getElementById('edu-label');
  var eduCounter = document.getElementById('edu-counter');
  var eduDotsEl = document.getElementById('edu-dots');

  function eduRenderDots() {
    if (!eduDotsEl) return;
    eduDotsEl.innerHTML = '';
    eduSlides.forEach(function(_, i) {
      var d = document.createElement('div');
      d.style.cssText = 'width:6px;height:6px;border-radius:50%;cursor:pointer;transition:background 0.2s,transform 0.2s;';
      d.style.background = i === eduCurrent ? '#a78bfa' : 'rgba(139,133,170,0.35)';
      d.style.transform = i === eduCurrent ? 'scale(1.4)' : 'scale(1)';
      d.onclick = function() { eduGoTo(i); };
      eduDotsEl.appendChild(d);
    });
  }

  function eduGoTo(n) {
    if (!eduImg) return;
    eduCurrent = (n + eduSlides.length) % eduSlides.length;
    eduImg.style.opacity = '0';
    setTimeout(function() {
      eduImg.src = eduSlides[eduCurrent].src;
      eduImg.alt = eduSlides[eduCurrent].label;
      if (eduLabel) eduLabel.textContent = eduSlides[eduCurrent].label;
      if (eduCounter) eduCounter.textContent = (eduCurrent + 1) + ' / ' + eduSlides.length;
      eduImg.style.opacity = '1';
      eduRenderDots();
    }, 150);
  }

  window.eduNav = function(dir) { eduGoTo(eduCurrent + dir); };

  if (eduImg) {
    eduImg.src = eduSlides[0].src;
    eduImg.alt = eduSlides[0].label;
    eduRenderDots();
  }

  // === CONDOMINIO10 CAROUSEL ===
  var condSlides = [
    { src: "assets/images/condominio10/unnamed (1).webp", label: "Login" },
    { src: "assets/images/condominio10/unnamed (2).webp", label: "Dashboard" },
    { src: "assets/images/condominio10/unnamed (3).webp", label: "Reservas" },
    { src: "assets/images/condominio10/unnamed (4).webp", label: "Mural" },
    { src: "assets/images/condominio10/unnamed (5).webp", label: "Enquetes" },
    { src: "assets/images/condominio10/unnamed (6).webp", label: "Pessoas" },
    { src: "assets/images/condominio10/unnamed (7).webp", label: "Perfil" },
    { src: "assets/images/condominio10/unnamed (8).webp", label: "Configurações" }
  ];
  var condCurrent = 0;
  var condImg = document.getElementById('cond-img');
  var condLabel = document.getElementById('cond-label');
  var condCounter = document.getElementById('cond-counter');
  var condDotsEl = document.getElementById('cond-dots');

  function condRenderDots() {
    if (!condDotsEl) return;
    condDotsEl.innerHTML = '';
    condSlides.forEach(function(_, i) {
      var d = document.createElement('div');
      d.style.cssText = 'width:6px;height:6px;border-radius:50%;cursor:pointer;transition:background 0.2s,transform 0.2s;';
      d.style.background = i === condCurrent ? '#90cdf4' : 'rgba(144,205,244,0.25)';
      d.style.transform = i === condCurrent ? 'scale(1.4)' : 'scale(1)';
      d.onclick = function() { condGoTo(i); };
      condDotsEl.appendChild(d);
    });
  }

  function condGoTo(n) {
    if (!condImg) return;
    condCurrent = (n + condSlides.length) % condSlides.length;
    condImg.style.opacity = '0';
    setTimeout(function() {
      condImg.src = condSlides[condCurrent].src;
      condImg.alt = condSlides[condCurrent].label;
      if (condLabel) condLabel.textContent = condSlides[condCurrent].label;
      if (condCounter) condCounter.textContent = (condCurrent + 1) + ' / ' + condSlides.length;
      condImg.style.opacity = '1';
      condRenderDots();
    }, 150);
  }

  window.condNav = function(dir) { condGoTo(condCurrent + dir); };

  if (condImg) {
    condImg.src = condSlides[0].src;
    condImg.alt = condSlides[0].label;
    condRenderDots();
  }

  // === CHAMADOS CAROUSEL ===
  var chSlides = [
    { src: "assets/images/chamados/login-saftcon-chamados.webp", label: "Login" },
    { src: "assets/images/chamados/gerenciamento-de-chamados.png", label: "Dashboard" },
    { src: "assets/images/chamados/gerenciamento-de-chamados-saftcon-chamados.png", label: "Chamados" },
    { src: "assets/images/chamados/detalhes-do-chamado-saftcon-chamados.png", label: "Detalhes" },
    { src: "assets/images/chamados/editar-chamado-saftcon-chamados.png", label: "Editar" },
    { src: "assets/images/chamados/minha-comicoes-saftcon-chamados.png", label: "Comissões" }
  ];
  var chCurrent = 0;
  var chImg = document.getElementById('ch-img');
  var chLabel = document.getElementById('ch-label');
  var chCounter = document.getElementById('ch-counter');
  var chDotsEl = document.getElementById('ch-dots');

  function chRenderDots() {
    if (!chDotsEl) return;
    chDotsEl.innerHTML = '';
    chSlides.forEach(function(_, i) {
      var d = document.createElement('div');
      d.style.cssText = 'width:6px;height:6px;border-radius:50%;cursor:pointer;transition:background 0.2s,transform 0.2s;';
      d.style.background = i === chCurrent ? '#90cdf4' : 'rgba(144,205,244,0.25)';
      d.style.transform = i === chCurrent ? 'scale(1.4)' : 'scale(1)';
      d.onclick = function() { chGoTo(i); };
      chDotsEl.appendChild(d);
    });
  }

  function chGoTo(n) {
    if (!chImg) return;
    chCurrent = (n + chSlides.length) % chSlides.length;
    chImg.style.opacity = '0';
    setTimeout(function() {
      chImg.src = chSlides[chCurrent].src;
      chImg.alt = chSlides[chCurrent].label;
      if (chLabel) chLabel.textContent = chSlides[chCurrent].label;
      if (chCounter) chCounter.textContent = (chCurrent + 1) + ' / ' + chSlides.length;
      chImg.style.opacity = '1';
      chRenderDots();
    }, 150);
  }

  window.chNav = function(dir) { chGoTo(chCurrent + dir); };

  if (chImg) {
    chImg.src = chSlides[0].src;
    chImg.alt = chSlides[0].label;
    chRenderDots();
  }

  // Form Submission Handling
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");
  const submitBtn = document.getElementById("contact-submit");

  if (form) {
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
      
      submitBtn.disabled = true;
      submitBtn.innerText = "Enviando...";
      status.style.display = "block";
      status.style.color = "var(--text)";
      status.innerText = "Processando sua mensagem...";

      const data = new FormData(event.target);

      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          status.style.color = "#4fffb0";
          status.innerText = "Obrigado! Sua mensagem foi enviada com sucesso. 🚀";
          form.reset();
        } else {
          const errorData = await response.json();
          status.style.color = "#ff4f4f";
          status.innerText = errorData.errors ? errorData.errors.map(error => error.message).join(", ") : "Ops! Ocorreu um erro ao enviar.";
        }
      } catch (error) {
        status.style.color = "#ff4f4f";
        status.innerText = "Erro de conexão. Verifique sua internet.";
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Enviar mensagem →";
      }
    });
  }

  // Hamburger Menu
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });
})();
