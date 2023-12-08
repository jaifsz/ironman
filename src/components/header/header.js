import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/Design sem nome (1).png';
import Comentarios from "../../pages/comentarios/comentarios";



function Header(){
    const navigate = useNavigate
    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                    <li>Inicioo</li>
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
            </nav>
        </header>
    )
}



export default Header;
