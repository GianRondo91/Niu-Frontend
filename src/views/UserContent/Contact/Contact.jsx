import React from 'react';

const History = () => {
    return (
        <div className="contact">

            <div className="info info-top">
                <div className="logo">
                    <p className="logo-name">niu</p>
                    <p className="logo-name">bistro</p>
                </div>

                <p className="phone">960 41 84 90</p>
                <p className="email">info@niubistro.com</p>
            </div>
            
            <div className="info">
                <div className="hours">
                    <p className="title-info">Horario de atención:</p>
                    <p>12:00 - 16:00</p>
                    /
                    <p>20:00 - 23:00</p>
                </div>

                <p>Avenida Antiguo, Av. del Regne de Valencia, 16, 46005 Valencia</p>
            </div>
            <div className="mapa"></div>
        </div>
    )
};

export default History;