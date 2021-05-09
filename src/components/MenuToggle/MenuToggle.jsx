import React, { useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMobileAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';

const MenuTogle = (props) => {

    let [state, setState] = useState({
        isOpen: false
    });

    const toggleMenu = () => {
        setState({ isOpen: !state.isOpen });        
    };

    return (
        <div className="menu-toggle">
            <div className="menu-toggle-icon" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></div>
            <div className={classNames("sidebar", { "is-open": state.isOpen})}>
                <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} className="close-icon"/>
                <Nav>
                    <NavItem>
                        <div className="logo">
                            <p className="logo-name">niu</p>
                            <p className="logo-name">bistro</p>
                        </div>
                    </NavItem>
                    
                    <NavItem>
                        <FontAwesomeIcon icon={faMobileAlt} />
                        <p className="phone">960 41 84 90</p>
                    </NavItem>
                    <NavItem>
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <div className="hour-days">
                            <p>12:00 - 16:00</p>
                            <p className="and">y</p>
                            <p>20:00 - 23:00</p>
                        </div>
                    </NavItem>
                    <NavItem>
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <p className="address">Avenida Antiguo, Av. del Regne de Valencia, 16, 46005 Valencia</p>
                    </NavItem>
                    <NavItem className="instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem> */}
                </Nav>
            </div>
            <div className="sidebar">&nbsp;</div>
        </div>
    );
}

export default MenuTogle;