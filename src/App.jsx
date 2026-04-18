import './App.css'

function App() {
  const projetos = [
    {
      titulo: "Psicopedagogia na Escola",
      descricao: "O trabalho do psicopedagogo rumo ao avançado.",
      arquivos: [{ nome: "Giroteca: ferramenta inovadora de incentivo à leitura", link: "documentos/Giroteca.pdf" }]
    },
    {
      titulo: "Atividade de Extensão em Psicologia",
      descricao: "Relatórios de ações comunitárias coordenadas em saúde mental e prevenção.",
      arquivos: [
        { nome: "Se Precisar, Peça Ajuda", link: "documentos/peçaajuda.pdf" },
        { nome: "Abril Azul: TEA", link: "documentos/abrilazul.pdf" },
        { nome: "Maio Laranja: Combate ao Abuso", link: "documentos/maiolaranja.pdf" },
        { nome: "Psicologia Rosa: Prevenção ao Câncer", link: "documentos/prevençãodocâncer.pdf" },
        { nome: "Saúde Mental da Mulher", link: "documentos/outubrorosa.pdf" },
        { nome: "Valorização à Vida", link: "documentos/valorizaçãodavida.pdf" },
        { nome: "Feira das Percepções", link: "documentos/feirapercepções.pdf" },
        { nome: "Saúde Mental do Candidato ENEM", link: "documentos/saudementalcriança.pdf" },
        { nome: "Outubro da Criança", link: "documentos/outubrodacriança.pdf" },
        { nome: "Prevenção ao Bullying", link: "documentos/prevençãodobullying.pdf" }
      ]
    },
    {
      titulo: "Artigos publicados",
      descricao: "Produção científica em periódicos e congressos.",
      arquivos: [ 
        { nome: "Effects of variability requirements", link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jeab.798"},
        { nome: "Efeito do Seguro Automotivo", link: "https://rbtcc.com.br/RBTCC/article/view/1207" },
        { nome: "Psicologia Escolar Educacional no Piauí", link: "https://periodicorease.pro.br/rease/article/view/24110" },
        { nome: "O impacto do TDAH na vida adulta", link: "https://periodicorease.pro.br/rease/article/view/15094" },
        { nome: "Ambiente escolar capacitista e TEA", link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/7378" },
        { nome: "Exclusão docente e inclusão", link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/7314" },
        { nome: "Desafios da inclusão escolar - TEA", link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/5789" }
      ] 
    }
  ];

  return (
    <div className="App">
      <header className="navbar">
        <div className="nav-container">
          <h1>Me. Lucas Lima Ribeiro</h1>
          <nav className="nav-menu">
            <a href="#sobre">SOBRE</a>
            <a href="#portfolio">PORTFÓLIO</a>
            <a href="#artigos">ARTIGOS</a>
          </nav>
        </div>
      </header>

      {/* Botão Flutuante do WhatsApp */}
      <a href="https://wa.me/5586999286646" target="_blank" rel="noreferrer" className="whatsapp-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      <section className="hero-section" id="sobre">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img src="/lucasminhafoto.jpeg" alt="Me. Lucas Lima Ribeiro" className="hero-img" />
          </div>
          <div className="hero-text">
            <h2 className="section-title">Currículo Profissional</h2>
            
            <div className="cv-block">
              <h3>FORMAÇÃO:</h3>
              <ul>
                <li>Bacharel, Licenciado e Formado em Psicologia (UESPI).</li>
                <li>Mestre em Ciências do Comportamento (UnB).</li>
                <li>Especialista em Psicopedagogia Clínica e Institucional.</li>
                <li>Graduando em Sistemas para Internet (UESPI) e Pedagogia (Unifahe).</li>
              </ul>
            </div>

            <div className="cv-block">
              <h3>ATUAÇÃO:</h3>
              <ul>
                <li>Psicopedagogo na Secretaria Municipal de Educação de Teresina (SEMEC).</li>
                <li>Professor Temporário na UESPI e Professor na FAESPI.</li>
                <li>Professor Psicólogo (CRP21/04438).</li>
              </ul>
            </div>

            <div className="cv-block">
              <h3>EXPERIÊNCIA:</h3>
              <ul>
                <li>Ex-Coordenador do Curso de Psicologia (FAESPI).</li>
                <li>Integrante do Núcleo de Acessibilidade da UEMA.</li>
                <li>Experiência como Acompanhante Terapêutico (AT).</li>
              </ul>
            </div>

            <div className="cv-block">
              <h3>GRUPOS DE ESTUDO:</h3>
              <ul>
                <li>Integrante do Núcleo de Estudos e Pesquisas em Psicologia do Desenvolvimento e Intervenções Humanas (NEPEX PSIDIHN).</li>
              </ul>
            </div>

            <div className="cv-block">
              <h3>DISCIPLINAS MINISTRADAS NAS ÁREAS:</h3>
              <ul>
                <li>Psicopatologia, Processos Grupais, Processos Psicológicos Básicos, Investigação Científica, Análise do Comportamento, Supervisão Clínica em Análise do Comportamento e Educação.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="container">
          <h2 className="section-title central">Portfólio de Projetos e Extensão</h2>
          <div className="projects-grid">
            {projetos.slice(0, 2).map((proj, i) => (
              <div key={i} className="project-card">
                <h3>{proj.titulo}</h3>
                <p>{proj.descricao}</p>
                <div className="links-area">
                  {proj.arquivos.map((arq, idx) => (
                    <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="btn-action">
                      {arq.nome}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="articles-section" id="artigos">
        <div className="container">
          <h2 className="section-title central">Artigos Científicos</h2>
          <div className="articles-list">
            {projetos[2].arquivos.map((arq, idx) => (
              <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="article-item">
                <span className="article-icon">📄</span>
                <span className="article-name">{arq.nome}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 - Me. Lucas Lima Ribeiro</p>
          <p className="footer-sub">Psicólogo (CRP21/04438), Psicopedagogo e Professor</p>
        </div>
      </footer>
    </div>
  )
}

export default App
