import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <span className="icon-align"><FontAwesomeIcon icon={faBars} /></span>
            </div>

            <div className="header-center">
                <ul className="header-center-ul">
                    <li className="header-center-ul-li ul-li">Home</li>
                    <li className="header-center-ul-li ul-li">Carta</li>
                    <li className="header-center-ul-li ul-li">Delivery</li>
                    <li className="header-center-ul-li menu-logo"></li>
                    <li className="header-center-ul-li ul-li">Cocina</li>
                    <li className="header-center-ul-li ul-li">Equipo</li>
                    <li className="header-center-ul-li ul-li">Contacto</li>
                </ul>
            </div>

            <div className="header-right">
                <span className="icon-align"><FontAwesomeIcon icon={faUser} /></span>
                <span className="icon-align icon-align-left"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </div>
        </div>
    )
};

export default Header;