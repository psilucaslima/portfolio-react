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
        <div className="nav-wrapper">
          <h1>Me. Lucas Lima Ribeiro</h1>
          <nav className="menu-topo">
            <a href="#sobre">Sobre</a>
            <a href="#portfolio">Portfólio</a>
          </nav>
        </div>
      </header>

      <a href="https://wa.me/5586999286646" target="_blank" rel="noreferrer" className="zap-flutuante">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* CURRÍCULO COMPLETO */}
      <section className="secao-site bg-preto-suave" id="sobre">
        <div className="layout-horizontal">
          <div className="foto-box">
            <img src="/lucasminhafoto.jpeg" alt="Lucas Lima Ribeiro" className="minha-foto" />
          </div>
          <div className="conteudo-box">
            <h2 className="cor-verde">Currículo Profissional</h2>
            <div className="grade-curriculo">
              <div className="item-cv">
                <p className="rotulo">Formação:</p>
                <ul>
                  <li>Bacharel, Licenciado e Formado em Psicologia (UESPI).</li>
                  <li>Mestre em Ciências do Comportamento (UnB).</li>
                  <li>Especialista em Psicopedagogia Clínica e Institucional.</li>
                  <li>Graduando em Sistemas para Internet (UESPI) e Pedagoga (Unifahe).</li>
                </ul>
              </div>
              <div className="item-cv">
                <p className="rotulo">Atuação:</p>
                <ul>
                  <li>Psicopedagogo na Secretaria Municipal de Educação de Teresina (SEMEC).</li>
                  <li>Professor Temporário na UESPI e Professor na FAESPI.</li>
                  <li>Professor Psicólogo (CRP21/04438).</li>
                </ul>
              </div>
              <div className="item-cv">
                <p className="rotulo">Experiência:</p>
                <ul>
                  <li>Ex-Coordenador do Curso de Psicologia (FAESPI).</li>
                  <li>Integrante do Núcleo de Acessibilidade da UEMA.</li>
                  <li>Experiência como Acompanhante Terapêutico (AT).</li>
                </ul>
              </div>
              <div className="item-cv">
                <p className="rotulo">Grupos de estudo:</p>
                <ul>
                  <li>Integrante do NEPEX PSIDIHN.</li>
                </ul>
              </div>
            </div>
            <div className="disciplinas-box">
              <p className="rotulo">Disciplinas ministradas nas áreas:</p>
              <p className="texto-simples">Psicopatologia, Processos Grupais, Processos Psicológicos Básicos, Investigação Científica, Análise do Comportamento, Supervisão Clínica em Análise do Comportamento e Educação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO LADO A LADO */}
      <section className="secao-site" id="portfolio">
        <div className="lado-a-lado">
          {/* COLUNA EXTENSÃO */}
          <div className="coluna">
            <h2 className="cor-verde">Atividade de Extensão em Psicologia</h2>
            <p className="desc-apoio">{projetos[1].descricao}</p>
            <div className="quadrinhos-extensao">
              {projetos[1].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="card-pequeno">
                  {arq.nome}
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA ARTIGOS */}
          <div className="coluna">
            <h2 className="cor-verde">Artigos Publicados</h2>
            <p className="desc-apoio">{projetos[2].descricao}</p>
            <div className="lista-artigos-vertical">
              {projetos[2].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="card-artigo">
                  <span className="icone">📄</span> {arq.nome}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* GIROTECA POR ÚLTIMO - CENTRALIZADO E LARGO */}
        <div className="giroteca-secao">
          <h2 className="cor-verde central">Psicopedagogia na Escola</h2>
          <div className="card-giroteca-final">
            <p>{projetos[0].descricao}</p>
            <a href={projetos[0].arquivos[0].link} target="_blank" rel="noreferrer" className="botao-giroteca">
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
