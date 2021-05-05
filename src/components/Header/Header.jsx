import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login';
import MenuTogle from '../MenuToggle/MenuToggle';

import Menu from '../../views/Menu/Menu';
import Delivery from '../../views/Delivery/Delivery';
import Team from '../../views/Team/Team';
import Gallery from '../../views/Gallery/Gallery';
import Contact from '../../views/Contact/Contact';

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
                <span className="icon-align" onClick={MenuTogle}><FontAwesomeIcon icon={faBars} /></span>
            </div>

            <div className="header-center">
                <ul className="header-center-ul">
                    <li className="header-center-ul-li ul-li ul-li-left" href="/">Home</li>
                    <li className="header-center-ul-li ul-li ul-li-left" onClick={Menu}>Carta</li>
                    <li className="header-center-ul-li ul-li ul-li-left" onClick={Delivery}>Delivery</li>
                    <li className="header-center-ul-li menu-logo" href="/"></li>
                    <li className="header-center-ul-li ul-li ul-li-right" onClick={Gallery}>Cocina</li>
                    <li className="header-center-ul-li ul-li ul-li-right" onClick={Team}>Equipo</li>
                    <li className="header-center-ul-li ul-li ul-li-right" onClick={Contact}>Contacto</li>
                </ul>
            </div>

            <div className="header-right">
                <span className="icon-align" onClick={Login}><Login/></span>
                <span className="icon-align icon-align-left"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </div>
        </div>
    )
};

export default Header;