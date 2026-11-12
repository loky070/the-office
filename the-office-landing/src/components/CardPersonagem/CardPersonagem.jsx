import './CardPersonagem.css'
// Componente CardPersonagem é responsável por exibir as informações de cada personagem individualmente, incluindo sua foto, cargo, nome, descrição e um botão para ver mais detalhes. Ele recebe essas informações como props e as renderiza dentro de uma estrutura de cartão estilizada.

export default function CardPersonagem ({nome, cargo, descricao, imagem}) {
    return (
        <div className="card-personagem">
            <img className="card-personagem-foto" src={imagem} alt={nome} />

            <div className="card-personagem-corpo">
                <p className="card-personagem-cargo">{cargo}</p>
                <h3 className="card-personagem-nome">{nome}</h3>
                <p className="card-personagem-descricao">{descricao}</p>
                <a className="card-personagem-botao" href="#">Ver detalhes</a>
            </div>
        </div>
    )

}
