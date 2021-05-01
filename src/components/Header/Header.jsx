import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login';

const Header = () => {

    // let state = {
    //     open: false,
    // };

    // let openLogin = () => {
    //     setState({ open: !state.open});
    // }
    // openRegister = () => {
    //     this.setState({ open: !this.state.open});
    // }

    return (
        <div className="header">
            <div className="header-left">
                <span className="icon-align"><FontAwesomeIcon icon={faBars} /></span>
            </div>

            <div className="header-center">
                <ul className="header-center-ul">
                    <li className="header-center-ul-li ul-li ul-li-left">Home</li>
                    <li className="header-center-ul-li ul-li ul-li-left">Carta</li>
                    <li className="header-center-ul-li ul-li ul-li-left">Delivery</li>
                    <li className="header-center-ul-li menu-logo"></li>
                    <li className="header-center-ul-li ul-li ul-li-right">Cocina</li>
                    <li className="header-center-ul-li ul-li ul-li-right">Equipo</li>
                    <li className="header-center-ul-li ul-li ul-li-right">Contacto</li>
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