import './App.css'
import Alunos from "./components/Alunos"
import Cabecalho from "./components/Cabecalho"
import Professores from "./components/Professores"
import { ProfessoresProps } from "./types"


function App() {

  const titulo: string = "React - Aula de Props"

  const cap: number = 15

  const aviso = () => alert('Esta aula ensina a passar valores de pai para filho')

  document.title = titulo

  const listaprof: ProfessoresProps[] = [
    { nome: 'Luis', disciplina: 'front-end', ano: 1 },
    { nome: 'Freitas', disciplina: 'Software Design', ano: 1 },
    { nome: 'Thiago Yamamoto', disciplina: 'Java Advanced', ano: 2 }
  ]


  return (
    <>
      <Cabecalho titulo={titulo} cap={cap} aviso={aviso} />
      <Alunos>
        <h2>Lista de Alunos</h2>
        <ul>
          <li>João</li>
          <li>Carlos</li>
          <li>Marcos</li>
          <li>Maria</li>
        </ul>
      </Alunos>
      {
        listaprof.map((prof, index) => (
          <Professores index={index} nome={prof.nome} disciplina={prof.disciplina} ano={prof.ano} />

        ))

      }
    </>
  )
}

export default App
