import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Design sem nome (1).png';
import './styles.css'

function Footer() {
    return (
        <footer>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='Contato' >
                    <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='Fotos'>
                    <li>Fotos</li>
                    </Link>
                    <Link state={{ textDecoration: 'none'}} to={'Comentarios'}>
                    <li>Comentarios</li>
                    </Link>
                </ul>
                <span>Todos os direitos reservados©</span>
                <span>Desenvolvido por:Jaiferson Reis</span>
            </nav>
        </footer>
    )
}

export default Footer