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
        <div className="nav-container-full">
          <h1>Me. Lucas Lima Ribeiro</h1>
          <nav className="nav-menu">
            <a href="#sobre">SOBRE</a>
            <a href="#portfolio">PORTFÓLIO</a>
          </nav>
        </div>
      </header>

      <a href="https://wa.me/5586999286646" target="_blank" rel="noreferrer" className="whatsapp-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* SEÇÃO SOBRE EXPANDIDA */}
      <section className="section-expanded bg-darker" id="sobre">
        <div className="content-wrapper">
          <div className="hero-layout">
            <div className="hero-image-side">
              <img src="/lucasminhafoto.jpeg" alt="Lucas Lima Ribeiro" className="hero-img" />
            </div>
            <div className="hero-info-side">
              <h2 className="title-green">Currículo Profissional</h2>
              <div className="cv-grid">
                <div className="cv-item">
                  <h3>FORMAÇÃO:</h3>
                  <ul>
                    <li>Bacharel, Licenciado e Formado em Psicologia (UESPI).</li>
                    <li>Mestre em Ciências do Comportamento (UnB).</li>
                    <li>Especialista em Psicopedagogia Clínica e Institucional.</li>
                    <li>Graduando em Sistemas para Internet (UESPI) e Pedagoga (Unifahe).</li>
                  </ul>
                </div>
                <div className="cv-item">
                  <h3>ATUAÇÃO:</h3>
                  <ul>
                    <li>Psicopedagogo na Secretaria Municipal de Educação de Teresina (SEMEC).</li>
                    <li>Professor Temporário na UESPI e Professor na FAESPI.</li>
                    <li>Professor Psicólogo (CRP21/04438).</li>
                  </ul>
                </div>
                <div className="cv-item">
                  <h3>EXPERIÊNCIA & PESQUISA:</h3>
                  <ul>
                    <li>Ex-Coordenador do Curso de Psicologia (FAESPI).</li>
                    <li>Integrante do Núcleo de Acessibilidade da UEMA.</li>
                    <li>Integrante do NEPEX PSIDIHN.</li>
                  </ul>
                </div>
                <div className="cv-item">
                  <h3>DISCIPLINAS MINISTRADAS:</h3>
                  <p className="disciplinas-text">Psicopatologia, Processos Grupais, Processos Psicológicos Básicos, Investigação Científica, Análise do Comportamento, Supervisão Clínica em Análise do Comportamento e Educação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PSICOPEDAGOGIA EM DESTAQUE */}
      <section className="section-expanded" id="portfolio">
        <div className="content-wrapper">
          <h2 className="title-green central">Psicopedagogia na Escola</h2>
          <div className="full-width-card">
            <p>{projetos[0].descricao}</p>
            <a href={projetos[0].arquivos[0].link} target="_blank" rel="noreferrer" className="btn-main">
              {projetos[0].arquivos[0].nome}
            </a>
          </div>

          {/* EXTENSÃO E ARTIGOS LADO A LADO */}
          <div className="split-layout">
            <div className="split-column">
              <h2 className="title-green">Atividade de Extensão</h2>
              <div className="extension-list">
                {projetos[1].arquivos.map((arq, idx) => (
                  <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="extension-item">
                    {arq.nome}
                  </a>
                ))}
              </div>
            </div>
            <div className="split-column">
              <h2 className="title-green">Artigos Publicados</h2>
              <div className="articles-column">
                {projetos[2].arquivos.map((arq, idx) => (
                  <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="article-box">
                    <span className="icon">📄</span> {arq.nome}
                  </a>
                ))}
              </div>
            </div>
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
