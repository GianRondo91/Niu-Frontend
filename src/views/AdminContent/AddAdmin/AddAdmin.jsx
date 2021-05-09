import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import classNames from "classnames";

import { validateField, validateFields } from '../../../utils';

const AddAdmin = (props) => {

    // const [state, setState] = useState({
    //     open: false
    // });
    let history = useHistory();

    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    const [dataRegister, setRegister] = useState({
        name: '',
        surname1: '',
        surname2: '',
        phone: '',
        email: '',
        password: '',
        genre: '',
        address: '',
        city: '',
        state: '',
        cp: '',
        birth: '',
        isAdmin: true
    })

    useEffect(() => {
        console.log('Componente montado en el registro!');
    }, []);

    const handleState = (event) => {
        let data = { ...dataRegister, [event.target.name]: event.target.value };

        setRegister(data);

        setValidationResult({
            ...validationResult,
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };

    const btnRegisterAdmin = async () => {
        
        let validationResult = validateFields(dataRegister);

        setValidationResult({
            ...validationResult,
            validated: true
        });


        try {
            await axios.post('https://niubackend.herokuapp.com/users', dataRegister, {headers: { authorization: props.token}});
            
            alert('Usuario registrado con exito');

        } catch (error) {
                alert('Error al registrarse');
        };
    };

     //ver si esta logeado
     if (!props.token) {
        setTimeout(() => {
            history.push('/');
        }, 200);

        return null;
    }

    return (
        <div className="user-data">
            <div className="data-title">AGREGAR NUEVO ADMINISTRADOR</div>
            <form action="" className="form-data">
                <div className="form-data-center">
                <div className="form-data-left">
                        <label htmlFor="">Nombre *</label>
                        <input
                            title={validationResult.name}
                            type="name"
                            name="name"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.name, invalid: validationResult.validated && validationResult.name })}
                            onChange={handleState}
                        />
                        <div className="fieldError">{validationResult.date}</div>
                        <label htmlFor="">Primer Apelido *</label>
                        <input
                            title={validationResult.surname1}
                            type="surname"
                            name="surname1"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.surname1, invalid: validationResult.validated && validationResult.surname1 })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Segundo Apelido *</label>
                        <input
                            title={validationResult.surname2} 
                            type="surname"
                            name="surname2"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.surname2, invalid: validationResult.validated && validationResult.surname2 })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Fecha de nacimiento</label>
                        <input
                            title={validationResult.birth}
                            type="date"
                            name="birth"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.birth, invalid: validationResult.validated && validationResult.birth })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Edad</label>
                        <input
                            title={validationResult.age}
                            type="number"
                            name="age"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.age, invalid: validationResult.validated && validationResult.age })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Email *</label>
                        <input
                            title={validationResult.email}
                            type="email"
                            name="email"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.email, invalid: validationResult.validated && validationResult.email })}
                            onChange={handleState}
                        />
                    </div>
                    
                    <div className="form-data-right">
                        <label htmlFor="">Provincia</label>
                        <input
                            title={validationResult.state}
                            type="text"
                            name="state"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.state, invalid: validationResult.validated && validationResult.state })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Ciudad</label>
                        <input
                            title={validationResult.city}
                            type="city"
                            name="city"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.city, invalid: validationResult.validated && validationResult.city })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Dirección</label>
                        <input
                            title={validationResult.address}
                            type="address"
                            name="address"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.address, invalid: validationResult.validated && validationResult.address })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Código postal</label>
                        <input
                            title={validationResult.cp}
                            type="zip"
                            name="cp"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.cp, invalid: validationResult.validated && validationResult.cp })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Teléfono</label>
                        <input
                            title={validationResult.phone}
                            type="tel"
                            name="phone"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.phone, invalid: validationResult.validated && validationResult.phone })}
                            onChange={handleState}
                        />
                        <label htmlFor="">Contraseña *</label>
                        <input
                            title={validationResult.gender}
                            type="text"
                            name="gender"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.gender, invalid: validationResult.validated && validationResult.gender })}
                            onChange={handleState}
                        />
                    </div>
                </div>

                <input type="button" value="CREAR NUEVO ADMINISTRADOR" className="button-update" onClick={btnRegisterAdmin}/>
            </form>
            <p className="conditions">En NIU nos tomamos muy en serio tu privacidad y estamos comprometidos con la protección de tus datos personales. Conoce más sobre de cómo cuidamos y usamos tus datos en nuestra <em>Política de privacidad</em></p>
        </div>


    )
};
const mapStateToProps = state => {
    return {
        token: state.userReducer.token
    }
};

export default connect(mapStateToProps)(AddAdmin);