import React from 'react';

const UserData = () => {
    return (
        <div className="user-data">
            <div className="data-title">DATOS PERSONALES</div>
                <form action="" className="form-data">
                    <div className="form-data-center">
                        <div className="form-data-left">
                            <label htmlFor="">Nombre *</label>
                            <input type="name" name="name" className="input"/>
                            <label htmlFor="">Primer Apelido *</label>
                            <input type="surname" name="surname1" className="input"/>
                            <label htmlFor="">Segundo Apelido *</label>
                            <input type="surname" name="surname1" className="input"/>
                            <label htmlFor="">Fecha de nacimiento</label>
                            <input type="date" name="birth" className="input"/>
                            <label htmlFor="">Edad</label>
                            <input type="age" name="age" className="input"/>
                            <label htmlFor="">Genero</label>
                            <input type="text" name="gender" className="input"/>
                        </div>
                        <div className="form-data-right">
                            <label htmlFor="">Provincia</label>
                            <input type="text" name="state" className="input"/>
                            <label htmlFor="">Ciudad</label>
                            <input type="city" name="city" className="input"/>
                            <label htmlFor="">Dirección</label>
                            <input type="address" name="address" className="input"/>
                            <label htmlFor="">Código postal</label>
                            <input type="zip" name="cp" className="input"/>
                            <label htmlFor="">Teléfono</label>
                            <input type="tel" name="phone" className="input"/>
                            <label htmlFor="">email</label>
                            <input type="email" name="email" className="input"/>
                        </div>
                    </div>

                    <input type="button" value="ACTUALIZAR DATOS PERSONALES" className="button-update"/>
                </form>
                <p className="conditions">En NIU nos tomamos muy en serio tu privacidad y estamos comprometidos con la protección de tus datos personales. Conoce más sobre de cómo cuidamos y usamos tus datos en nuestra <em>Política de privacidad</em></p>
        </div>


    )
};

export default UserData;