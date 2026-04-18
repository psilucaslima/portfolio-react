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
      <header className="navbar-fix">
        <div className="nav-container">
          <h1>Me. Lucas Lima Ribeiro</h1>
          <nav className="nav-btns">
            <a href="#sobre" className="btn-nav">SOBRE</a>
            <a href="#portfolio" className="btn-nav">PORTFÓLIO</a>
            <a href="https://wa.me/5586999286646" target="_blank" rel="noreferrer" className="btn-nav zap">WHATSAPP</a>
          </nav>
        </div>
      </header>

      {/* CURRÍCULO INTEGRAL */}
      <section className="secao-master bg-dark" id="sobre">
        <div className="grid-sobre">
          <div className="foto-area">
            <img src="/lucasminhafoto.jpeg" alt="Lucas Lima Ribeiro" className="foto-perfil" />
          </div>
          <div className="texto-area">
            <h2 className="verde-destaque">Currículo Profissional</h2>
            <div className="cv-info-grid">
              <div className="cv-bloco">
                <h3>Formação:</h3>
                <ul>
                  <li>Bacharel, Licenciado e Formado em Psicologia (UESPI).</li>
                  <li>Mestre em Ciências do Comportamento (UnB).</li>
                  <li>Especialista em Psicopedagogia Clínica e Institucional.</li>
                  <li>Graduando em Sistemas para Internet (UESPI) e Pedagoga (Unifahe).</li>
                </ul>
              </div>
              <div className="cv-bloco">
                <h3>Atuação:</h3>
                <ul>
                  <li>Psicopedagogo na Secretaria Municipal de Educação de Teresina (SEMEC).</li>
                  <li>Professor Temporário na UESPI e Professor na FAESPI.</li>
                  <li>Professor Psicólogo (CRP21/04438).</li>
                </ul>
              </div>
            </div>
            <div className="cv-bloco-largo">
              <h3>Experiência & Grupos:</h3>
              <p>Ex-Coordenador do Curso de Psicologia (FAESPI). Integrante do Núcleo de Acessibilidade da UEMA. Experiência como Acompanhante Terapêutico (AT). Integrante do NEPEX PSIDIHN.</p>
              <h3>Disciplinas:</h3>
              <p>Psicopatologia, Processos Grupais, Processos Psicológicos Básicos, Análise do Comportamento e Educação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO LADO A LADO */}
      <section className="secao-master" id="portfolio">
        <div className="flex-lado-a-lado">
          {/* EXTENSÃO */}
          <div className="coluna-portfolio">
            <h2 className="verde-destaque">Atividade de Extensão</h2>
            <div className="grade-quadrinhos">
              {projetos[1].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="quadrinho-link">{arq.nome}</a>
              ))}
            </div>
          </div>

          {/* ARTIGOS */}
          <div className="coluna-portfolio">
            <h2 className="verde-destaque">Artigos publicados</h2>
            <div className="lista-artigos">
              {projetos[2].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="artigo-box">
                  <span>📄</span> {arq.nome}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* GIROTECA POR ÚLTIMO */}
        <div className="giroteca-footer">
          <h2 className="verde-destaque central">Psicopedagogia na Escola</h2>
          <div className="bloco-giroteca">
            <p>{projetos[0].descricao}</p>
            <a href={projetos[0].arquivos[0].link} target="_blank" rel="noreferrer" className="btn-giroteca">
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
