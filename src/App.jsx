import './App.css'

function App() {
  const projetos = [
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
      descricao: "Estes são alguns dos artigos que publiquei ao longo da minha trajetória acadêmica",
      arquivos: [ 
        { nome: "Effects of variability requirements", link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jeab.798"},
        { nome: "Efeito do Seguro Automotivo", link: "https://rbtcc.com.br/RBTCC/article/view/1207" },
        { nome: "Psicologia Escolar Educacional no Piauí", link: "https://periodicorease.pro.br/rease/article/view/24110" },
        { nome: "O impacto do TDAH na vida adulta", link: "https://periodicorease.pro.br/rease/article/view/15094" },
        { nome: "Ambiente escolar capacitista e TEA", link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/7378" },
        { nome: "A exclusão dos docentes na inclusão", link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/7314" },
        { nome: "Desafios da inclusão escolar", link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/5789" },
      ] 
    },
    {
      titulo: "Psicopedagogia na Escola",
      descricao: "O trabalho do psicopedagogo rumo ao avançado.",
      arquivos: [ 
        { nome: "Giroteca: incentivo à leitura", link: "documentos/Giroteca.pdf" }
      ] 
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Me. Lucas Lima Ribeiro</h1>
        <p>Psicólogo | Professor | Psicopedagogo</p>
      </header>

      <section className="formacao">
        <h2>Formação</h2>
        <ul>
          <li>Mestre em Ciências do Comportamento (UnB)</li>
          <li>Psicólogo (UESPI)</li>
          <li>Especialista em Psicopedagogia clínica e institucional</li>
        </ul>
      </section>

      <section className="container-projetos">
        <h2>Portfólio de Projetos e Extensão</h2>
        {projetos.map((projeto, index) => (
          <div key={index} className="card">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="grid-botoes">
              {projeto.arquivos.map((arq, idx) => (
                <a key={idx} href={arq.link} target="_blank" rel="noreferrer" className="btn-link">
                  {arq.nome}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;