import React from 'react';

const History = () => {
    return (
        <div className="contact">
            <div className="info">
                <div className="logo">
                    <p className="logo-name">niu</p>
                    <p className="logo-name">bistro</p>
                </div>

                <p className="phone">960 41 84 90</p>

                <div className="hours">
                    Horaru¡io de atención
                    <p>12:00 - 16:00</p>
                    /
                    <p>20:00 - 23:00</p>
                </div>
                <p className="email">info@niubistro.com</p>
                <p>Avenida Antiguo, Av. del Regne de Valencia, 16, 46005 Valencia</p>
            </div>

            <form action="" className="form-contact">
                <label htmlFor="">Nombre Completo</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Mensaje</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                </textarea>
                <input type="submit" value="ACTUALIZAR DATOS PERSONALES" className="button-update" />
            </form>

            <div className="mapa"></div>
        </div>
    )
};

export default History;