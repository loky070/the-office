import './style.css'import { fundo } from'../assets/fundo.webp'
        


export default function Hero(){
    return(
    <section>
        <div>
            <p className='hero-subtitulo'>SCRANTON, PENSILVÂNIA · 2005–2013</p>
            <h1 className='hero-titulo'>Um escritório de papel. Nove temporadas de puro caos.</h1>

            <p className='hero-texto'>Conheça os funcionários da filial de Scranton, os episódios que viraram clássicos e as cenas que todo fã sabe de cor.</p>

            <div>
                <a href='#id-da-secao' className="botao-primario">Conheça a série</a>
                <a href='#id-da-secao2' className="botao-secundario">Melhores episódios</a>
            </div>
        </div>
        <img className='hero-imagem' src="f" alt="" />
    </section>
    )
}
    