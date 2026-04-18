import './App.css'

function App() {
  // Isso aqui cumpre o requisito de "Array de Objetos" da tarefa
  const meusProjetos = [
    {
      titulo: "Atividade de Extensão em Psicologia",
      descricao: "Ações comunitárias coordenadas em saúde mental.",
      link: "documentos/abrilazul.pdf"
    },
    {
      titulo: "Artigos Científicos Publicados",
      descricao: "Publicações sobre TDAH, Autismo e Análise do Comportamento.",
      link: "https://rbtcc.com.br/RBTCC/article/view/1207"
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Me. Lucas Lima Ribeiro</h1>
        <p>Psicólogo | Professor | Psicopedagogo</p>
      </header>

      {/* Componente 1: Formação */}
      <section>
        <h2>Formação</h2>
        <ul>
          <li>Mestre em Ciências do Comportamento (UnB)</li>
          <li>Psicólogo (UESPI)</li>
          <li>Especialista em Psicopedagogia</li>
        </ul>
      </section>

      {/* Componente 2: Projetos (Renderizados dinamicamente) */}
      <section>
        <h2>Meus Projetos</h2>
        {meusProjetos.map((projeto, index) => (
          <div key={index} className="card">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" className="btn-pdf">
              Acessar Conteúdo
            </a>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App