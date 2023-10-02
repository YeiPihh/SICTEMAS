import React from "react";
import { Link } from 'react-router-dom';

const navBarDefault = () => {
    return (
        <header className="navBar">
            <div className="logoContainer">
                <div className="logoSictemas">
                    <img src="https://sictemas.com/wp-content/uploads/2023/03/logo-sictemas-300x51.png" alt="logoSictemas" />
                </div>
            </div>
            <div className="mainNavigation">
                <Link to="#"><div className="menuItem nuestraEmpresa">La empresa</div></Link>
                <Link to="#"><div className="menuItem Servicios">Servicios</div></Link>
                <Link to="#"><div className="menuItem Clientes">Clientes</div></Link>
                <Link to="#"><div className="menuItem Noticias">Noticias</div></Link>
                <Link to="#"><div className="menuItem Contacto">Contacto</div></Link>
            </div>
        </header>
    )
};

export default navBarDefault;