import './Hero.css'

export default function Hero(){
    return(
    <section className='hero'> {/* Faixa horizontal inteira*/}

        <div className='hero-container'> {/* Segura conteúdo numa largura máxima e centraliza.*/}

            <div className='hero-conteudo'> {/* A coluna da esquerda. Empilha subtítulo, título, parágrafo e botões de cima pra baixo, com espaçamento igual entre eles.*/}

                <p className='hero-subtitulo'>SCRANTON, PENSILVÂNIA · 2005–2013</p>
                <h1 className='hero-titulo'>Um escritório de papel. Nove temporadas de puro caos.</h1>

                <p className='hero-texto'>Conheça os funcionários da filial de Scranton, os episódios que viraram clássicos e as cenas que todo fã sabe de cor.</p>

                <div className='hero-botoes'> {/* Agrupa os botões horizontalmente e aplica espaçamento entre eles.*/}
                    <a href='#id-da-secao' className="botao-primario">Conheça a série</a>
                    <a href='#id-da-secao2' className="botao-secundario">Melhores episódios</a>
                </div>
            </div>
        </div>
    </section>
    )
}
