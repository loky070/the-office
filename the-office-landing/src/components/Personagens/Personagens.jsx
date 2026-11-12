import "./Personagens.css"
import personagens from "../../data/personagens.js"
import CardPersonagem from "../CardPersonagem/CardPersonagem.jsx"

// Componente Personagens é responsável por exibir a seção de personagens da página, incluindo um título, subtítulo e uma lista de cartões de personagens. Ele importa os dados dos personagens de um arquivo externo e utiliza o componente CardPersonagem para renderizar cada personagem individualmente.

export default function Personagens() {
    return(
        <section className="personagens" id="personagens">
            <div className="personagens-container">

                <p className="personagens-subtitulo">02 · PERSONAGENS</p>
                <h2 className="personagens-titulo">Quem trabalha aqui</h2>

                <div className="personagens-lista">
                    {/*1- "algumacoisa.map - o "algumacoisa é o nome do array que foi importado ali em cima, nesse caso, "personagens" de "personagens.js" */}
                    {/*2- .map serve para percorrer o array de personagens e renderizar um CardPersonagem para cada um */}
                    {/*3- O "personagem" dentro do parêntese é o elemento atual sendo processado no loop, pode ser qualquer nome, e tem que ser passado como prop da forma que foi escrita: personagem.nome, personagem.cargo, etc.*/}
                    {personagens.map((personagem) => (
                        <CardPersonagem
                        key={personagem.id} /* Identificação especial do React*/ 
                        nome={personagem.nome} /* Prop */
                        cargo={personagem.cargo} /* Prop */
                        descricao={personagem.descricao} /* Prop */
                        imagem={personagem.imagem} /* Prop */
                        />))}
                </div>

            </div>
        </section>
    )}