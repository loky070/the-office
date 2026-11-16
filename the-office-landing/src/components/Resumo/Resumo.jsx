import './Resumo.css'
import netflixLogo from '../../assets/img/netflix.png';
import hboLogo from '../../assets/img/hbo.png';

export default function Resumo() {
    return (
        <section className='resumo'>
            <div className='resumo-conteudo'>
                <div className='texto'>
                    <span className='tag'>01 · RESUMO</span>
                    <h2 className='titulo'>Sobre a série</h2>
                    <div className='paragrafo'>
                        <p>
                            Em formato de falso documentário, The Office acompanha o dia a dia dos funcionários da Dunder Mifflin, uma distribuidora de papel em Scranton. No centro de tudo está Michael Scott, um gerente que quer ser amado por todos e quase sempre faz exatamente o contrário.
                        </p>
                        <p>
                            É a adaptação americana da série britânica de mesmo nome, desenvolvida por Greg Daniels e exibida pela NBC.
                        </p>
                    </div>   
                </div>

                <div className='dados'>
                    <div className='nota-container'>
                        <div className='nota-conteudo'>
                            <span>NOTA IMDb</span>
                            <p><strong>9,0</strong>/10</p>
                        </div>
                    </div>
                    <div className='temps-container'>
                        <div className='temps-conteudo'>
                           <strong>9</strong>
                           <span>temporadas</span>
                        </div>
                    </div>
                    <div className='eps-container'>
                        <div className='eps-conteudo'>
                            <strong>201</strong>
                            <span>episódios</span>
                        </div>
                    </div>
                    <div className='onde-assistir-container'>
                        <div className='onde-assistir-conteudo'>
                            <span>Onde assistir</span>
                            <ul className='streamings'>
                                <li>
                                    <a href="https://www.netflix.com/title/70136120">
                                        <img className='logo' src={netflixLogo} alt="" />
                                        Netflix
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.hbomax.com/br/pt/show/78e15665-f6c8-4b58-8786-e0d9e2b65ced?utm_source=universal_search">
                                        <img className='logo' src={hboLogo} alt="" />
                                        <span>HBO Max</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
                
        </section>
    )
}