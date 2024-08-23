import { CabecalhoProps } from "../types"

export default function Cabecalho({ titulo, cap, aviso }: CabecalhoProps) {

    const paragr = {
        color: 'blue',
        fontSize: '20px'
    }

    return (
        <div className="div1">
            <h1>{cap} - {titulo} </h1>
            <p style={{ color: 'red', backgroundColor: '#fcc' }}>Exemplo interno</p>
            <p style={paragr}>Segundo Paragrafo</p>
            <button onClick={aviso}>Ler aviso</button>
        </div>
    )
}