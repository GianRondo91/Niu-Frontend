import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faShoppingCart, faBars} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <div className="header">
            <div className="header-left">
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="header-center">
                <ul className="header-center-ul">
                    <li className="header-center-ul-li">Home</li>
                    <li className="header-center-ul-li">Carta</li>
                    <li className="header-center-ul-li">Delivery</li>
                    <li className="header-center-ul-li menu-logo">LOGO</li>
                    <li className="header-center-ul-li">Cocina</li>
                    <li className="header-center-ul-li">Equipo</li>
                    <li className="header-center-ul-li">Contacto</li>
                </ul>
            </div>

            <div className="header-right">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    )
};

export default Header;