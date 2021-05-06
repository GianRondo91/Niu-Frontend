import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login';
import MenuTogle from '../MenuToggle/MenuToggle';

const Header = () => {

    return (
        <div className="header">
            <div className="header-left">
                <span className="icon-align" ><MenuTogle/></span>
            </div>

            <div className="header-center">
                <ul className="header-center-ul">
                    <li className="header-center-ul-li ul-li ul-li-left" ><a href="/">Home</a></li>
                    <li className="header-center-ul-li ul-li ul-li-left" > <a href="#menu">Carta</a></li>
                    <li className="header-center-ul-li ul-li ul-li-left" ><a href="/shop">Tienda</a></li>
                    <li className="header-center-ul-li menu-logo" href="/"></li>
                    <li className="header-center-ul-li ul-li ul-li-right" ><a href="#gallery">Cocina</a></li>
                    <li className="header-center-ul-li ul-li ul-li-right" ><a href="#team">Equipo</a></li>
                    <li className="header-center-ul-li ul-li ul-li-right" ><a href="#contact">Contacto</a></li>
                </ul>
            </div>

            <div className="header-right">
                <span className="icon-align"><Login/></span>
                <span className="icon-align icon-align-left"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </div>
        </div>
    )
};

export default Header;