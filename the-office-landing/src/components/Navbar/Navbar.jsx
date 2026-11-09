import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    function alternarMenu() {
        setMenuAberto(!menuAberto);
    }

    return (
        <header>
            <div className='header-conteudo'>
                <a href="/" className='logo'>
                    the office
                </a>

                <button className='menu-hamburguer' onClick={alternarMenu}>
                    <span className='linha'></span>
                    <span className='linha'></span>
                    <span className='linha'></span>
                </button>

                <nav className={menuAberto ? 'ativo' : ''}>
                    <ul className='links'>
                        <li><a href="/">Resumo</a></li>
                        <li><a href="/">Personagens</a></li>
                        <li><a href="/">Episódios</a></li>
                        <li><a href="/">Cenas</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )    
}