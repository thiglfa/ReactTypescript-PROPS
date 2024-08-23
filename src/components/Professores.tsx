import { ProfessoresProps } from "../types"

export default function Professores({ nome, disciplina, ano, index }: ProfessoresProps & { index: number }) {
    return (
        <div key={index}>
            <p>Nome: {nome}</p>
            <p>Disciplina:{disciplina}</p>
            <p>Ano: {ano}</p>

        </div>
    )
}