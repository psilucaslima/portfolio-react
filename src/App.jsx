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
        <div className="nav-content">
          <h1>Me. Lucas Lima Ribeiro</h1>
          <nav className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#portfolio">Portfólio</a>
          </nav>
        </div>
      </header>

      <a href="https://wa.me/5586999286646" target="_blank" rel="noreferrer" className="whatsapp-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* SEÇÃO SOBRE - CURRÍCULO INTEGRAL */}
      <section className="main-section bg-alt" id="sobre">
        <div className="flex-container">
          <div className="photo-side">
            <img src="/lucasminhafoto.jpeg" alt="Lucas Lima Ribeiro" className="profile-img" />
          </div>
          <div className="info-side">
            <h2 className="section-hl">Currículo</h2>
            <div className="cv-grid">
              <div className="cv-col">
                <span className="label">Formação:</span>
                <ul>
                  <li>Bacharel, Licenciado e Formado em Psicologia (UESPI).</li>
                  <li>Mestre em Ciências do Comportamento (UnB).</li>
                  <li>Especialista em Psicopedagogia Clínica e Institucional.</li>
                  <li>Graduando em Sistemas para Internet (UESPI) e Pedagoga (Unifahe).</li>
                </ul>
              </div>
              <div className="cv-col">
                <span className="label">Atuação:</span>
                <ul>
                  <li>Psicopedagogo na Secretaria Municipal de Educação de Teresina (SEMEC).</li>
                  <li>Professor Temporário na UESPI e Professor na FAESPI.</li>
                  <li>Professor Psicólogo (CRP21/04438).</li>
                </ul>
              </div>
              <div className="cv-col">
                <span className="label">Experiência:</span>
                <ul>
                  <li>Ex-Coordenador do Curso de Psicologia (FAESPI).</li>
                  <li>Integrante do Núcleo de Acessibilidade da UEMA.</li>
                  <li>Experiência como Acompanhante Terapêutico (AT).</li>
                </ul>
              </div>
              <div className="cv-col">
                <span className="label">Grupos de estudo:</span>
                <ul>
                  <li>Integrante do NEPEX PSIDIHN.</li>
                </ul>
              </div>
            </div>
            <div className="cv-row-full">
              <span className="label">Disciplinas ministradas nas áreas:</span>
              <p>Psicopatologia, Processos Grupais, Processos Psicológicos Básicos, Investigação Científica, Análise do Comportamento, Supervisão Clínica em Análise do Comportamento e Educação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PORTFÓLIO */}
      <section className="main-section" id="portfolio">
        {/* LADO A LADO: EXTENSÃO E ARTIGOS */}
        <div className="split-view">
          <div className="split-box">
            <h2 className="section-hl">Atividade de Extensão em Psicologia</h2>
            <p className="subtext">{projetos[1].descricao}</p>
            <div className="btn-grid-ext">
              {projetos[1].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="btn-small">{arq.nome}</a>
              ))}
            </div>
          </div>

          <div className="split-box">
            <h2 className="section-hl">Artigos publicados</h2>
            <p className="subtext">{projetos[2].descricao}</p>
            <div className="article-stack">
              {projetos[2].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="article-card">
                  <span className="icon">📄</span> {arq.nome}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* PSICOPEDAGOGIA (GIROTECA) POR ÚLTIMO */}
        <div className="bottom-highlight">
          <h2 className="section-hl center">Psicopedagogia na Escola</h2>
          <div className="card-giroteca">
            <p>{projetos[0].descricao}</p>
            <a href={projetos[0].arquivos[0].link} target="_blank" rel="noreferrer" className="btn-primary">
              {projetos[0].arquivos[0].nome}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 - Me. Lucas Lima Ribeiro | Psicólogo e Professor</p>
      </footer>
    </div>
  )
}

export default App
