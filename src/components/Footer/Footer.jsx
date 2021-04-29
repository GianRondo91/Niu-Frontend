import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-center">
                <div className="footer-logo">
                    <p className="logo-name">niu</p>
                    <p className="logo-name">bistro</p>
                </div>
                <div className="footer-info">
                    <p className="address">Avenida Antiguo, Av. del Regne de Valencia, 16, 46005 Valencia</p>
                    <p className="phone">960 41 84 90</p>
                    <p className="cr">Compras y Pagos – Envíos y Devoluciones – Términos y Condiciones – Política de Privacidad – Política de Cookies</p>
                </div>
                <div className="footer-contact">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
        </div>
    )
};

export default Footer;