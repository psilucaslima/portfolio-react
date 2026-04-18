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
      <header className="header-nav">
        <h1>Me. Lucas Lima Ribeiro (Psicólogo|Professor)</h1>
        <nav className="menu">
          <a href="#sobre">SOBRE</a>
          <a href="#portfolio">PORTFÓLIO</a>
          <a href="#artigos">ARTIGOS</a>
        </nav>
      </header>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href="https://wa.me/5586999286646" 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-float"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      <section className="container" id="sobre">
        <div className="sobre-content">
          <img src="/lucasminhafoto.jpeg" alt="Foto de Lucas Lima" className="perfil-foto" />
          <div className="curriculo-texto">
            <h2>Currículo</h2>
            <h3 className="nome-secao">Formação:</h3>
            <ul>
                <li>Bacharel, Licenciado e Formado em Psicologia (UESPI).</li>
                <li>Mestre em Ciências do Comportamento (UnB).</li>
                <li>Especialista em Psicopedagogia Clínica e Institucional.</li>
                <li>Graduando em Sistemas para Internet (UESPI) e Pedagogia (Unifahe).</li>
            </ul>

            <h3 className="nome-secao">Atuação:</h3>
            <ul>
                <li>Psicopedagogo na Secretaria Municipal de Educação de Teresina (SEMEC).</li>
                <li>Professor Temporário na UESPI e Professor na FAESPI.</li>
                <li>Professor Psicólogo (CRP21/04438).</li>
            </ul>

            <h3 className="nome-secao">Experiência:</h3>
            <ul>
                <li>Ex-Coordenador do Curso de Psicologia (FAESPI).</li>
                <li>Integrante do Núcleo de Acessibilidade da UEMA.</li>
                <li>Experiência como Acompanhante Terapêutico (AT).</li>
            </ul>

            <h3 className="nome-secao">Grupos de estudo:</h3>
            <ul>
                <li>Integrante do Núcleo de Estudos e Pesquisas em Psicologia do Desenvolvimento e Intervenções Humanas (NEPEX PSIDIHN).</li>
            </ul>

            <h3 className="nome-secao">Disciplinas ministradas nas áreas:</h3>
            <ul>
                <li>Psicopatologia, Processos Grupais, Processos Psicológicos Básicos, Investigação Científica, Análise do Comportamento, Supervisão Clínica em Análise do Comportamento e Educação.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container" id="portfolio">
        <h2>Portfólio de Projetos e Extensão</h2>
        <div className="lista-projetos">
          {projetos.slice(0, 2).map((projeto, index) => (
            <div key={index} className="card">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <div className="pdf-grid">
                {projeto.arquivos.map((arq, idx) => (
                  <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="btn-pdf">
                    {arq.nome}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id="artigos">
        <h2>Artigos Científicos</h2>
        <div className="lista-projetos">
          <div className="card">
            <p>Acesse minhas publicações acadêmicas:</p>
            <div className="pdf-grid">
              {projetos[2].arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="btn-pdf">
                  {arq.nome}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
         <p>© 2026 - Me. Lucas Lima Ribeiro | Psicólogo e Professor</p>
         <p>Psicólogo (CRP21/04438), Psicopedagogo e Professor</p>
      </footer>
    </div>
  )
}

export default App
