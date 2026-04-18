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
            <a href="#sobre">Sobre</a>
            <a href="#portfolio">Portfólio</a>
          </nav>
        </div>
      </header>

      {/* Botão Flutuante do WhatsApp */}
      <a href="https://wa.me/5586999286646" target="_blank" rel="noreferrer" className="whatsapp-float">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* SEÇÃO CURRÍCULO - OCUPANDO A TELA */}
      <section className="section-full bg-darker" id="sobre">
        <div className="hero-layout">
          <div className="hero-image-box">
            <img src="/lucasminhafoto.jpeg" alt="Lucas Lima Ribeiro" className="perfil-foto" />
          </div>
          <div className="hero-content-box">
            <h2 className="text-green">Currículo</h2>
            <div className="cv-grid-top">
              <div className="cv-column">
                <h3 className="sub-title">Formação:</h3>
                <ul>
                  <li>Bacharel, Licenciado e Formado em Psicologia (UESPI).</li>
                  <li>Mestre em Ciências do Comportamento (UnB).</li>
                  <li>Especialista em Psicopedagogia Clínica e Institucional.</li>
                  <li>Graduando em Sistemas para Internet (UESPI) e Pedagoga (Unifahe).</li>
                </ul>
              </div>
              <div className="cv-column">
                <h3 className="sub-title">Atuação:</h3>
                <ul>
                  <li>Psicopedagogo na Secretaria Municipal de Educação de Teresina (SEMEC).</li>
                  <li>Professor Temporário na UESPI e Professor na FAESPI.</li>
                  <li>Professor Psicólogo (CRP21/04438).</li>
                </ul>
              </div>
              <div className="cv-column">
                <h3 className="sub-title">Experiência:</h3>
                <ul>
                  <li>Ex-Coordenador do Curso de Psicologia (FAESPI).</li>
                  <li>Integrante do Núcleo de Acessibilidade da UEMA.</li>
                  <li>Experiência como Acompanhante Terapêutico (AT).</li>
                </ul>
              </div>
              <div className="cv-column">
                <h3 className="sub-title">Grupos de estudo:</h3>
                <ul>
                  <li>Integrante do NEPEX PSIDIHN.</li>
                </ul>
              </div>
            </div>
            <div className="cv-full-row">
              <h3 className="sub-title">Disciplinas ministradas nas áreas:</h3>
              <p>Psicopatologia, Processos Grupais, Processos Psicológicos Básicos, Investigação Científica, Análise do Comportamento, Supervisão Clínica em Análise do Comportamento e Educação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PORTFÓLIO - PSICOPEDAGOGIA NO TOPO */}
      <section className="section-full" id="portfolio">
        <div className="full-width-block">
          <h2 className="text-green central">Psicopedagogia na Escola</h2>
          <div className="card-top-destaque">
            <p>{projetos[0].descricao}</p>
            <a href={projetos[0].arquivos[0].link} target="_blank" rel="noreferrer" className="btn-pdf-destaque">
              {projetos[0].arquivos[0].nome}
            </a>
          </div>
        </div>

        {/* EXTENSÃO E ARTIGOS LADO A LADO */}
        <div className="side-by-side-container">
          <div className="column-box">
            <h2 className="text-green">Atividade de Extensão em Psicologia</h2>
            <p className="desc-text">{projetos[1].descricao}</p>
            <div className="buttons-grid-small">
              {projetos[1].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="btn-small-link">{arq.nome}</a>
              ))}
            </div>
          </div>

          <div className="column-box">
            <h2 className="text-green">Artigos publicados</h2>
            <p className="desc-text">{projetos[2].descricao}</p>
            <div className="articles-vertical-list">
              {projetos[2].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="article-card-link">
                  <span className="icon">📄</span> {arq.nome}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 - Me. Lucas Lima Ribeiro | Psicólogo, Psicopedagogo e Professor</p>
      </footer>
    </div>
  )
}

export default App
