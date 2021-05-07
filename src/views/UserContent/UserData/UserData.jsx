import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import classNames from "classnames";

import { validateField, validateFields, isValid } from '../../../utils';

const UserData = (props) => {

    let history = useHistory();

    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {

            let id = props.userId;
            let token = props.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`http://localhost:3001/users/${id}`, { headers: { authorization: token } });

            setUser(result.data);
        }
        getUser();
    }, []);

    const handleState = (event) => {
        let newUser = { ...user, [event.target.name]: event.target.value };
        setUser(newUser);

        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };

    const updateUser = async () => {
        let validationResult = validateFields(user);

        setValidationResult({
            ...validationResult,
            validated: true
        });

        if (!isValid(validationResult)) {
            return;
        };

        try {

            let id = props.userId;
            let token = props.token;

            if (!token) {
                return;
            }

            await axios.put(`http://localhost:3001/users/${id}`, user, { headers: { authorization: token } });

            alert('Guardado con éxito!!!')
        } catch (error) {
            console.log(error);
        }
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
            <div className="data-title">DATOS PERSONALES</div>
            <form action="" className="form-data">
                <div className="form-data-center">
                    <div className="form-data-left">
                        <label htmlFor="">Nombre *</label>
                        <input
                            title={validationResult.name}
                            type="name"
                            name="name"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.name, invalid: validationResult.validated && validationResult.name })}
                            value={user.name}
                            onChange={handleState}
                        />
                        <div className="fieldError">{validationResult.date}</div>
                        <label htmlFor="">Primer Apelido *</label>
                        <input
                            title={validationResult.surname1}
                            type="surname"
                            name="surname1"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.surname1, invalid: validationResult.validated && validationResult.surname1 })}
                            value={user.surname1}
                            onChange={handleState}
                        />
                        <label htmlFor="">Segundo Apelido *</label>
                        <input
                            title={validationResult.surname2} 
                            type="surname"
                            name="surname2"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.surname2, invalid: validationResult.validated && validationResult.surname2 })}
                            value={user.surname2}
                            onChange={handleState}
                        />
                        <label htmlFor="">Fecha de nacimiento</label>
                        <input
                            title={validationResult.birth}
                            type="date"
                            name="birth"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.birth, invalid: validationResult.validated && validationResult.birth })}
                            value={user.birth?.substring(0,10)}
                            onChange={handleState}
                        />
                        <label htmlFor="">Edad</label>
                        <input
                            title={validationResult.age}
                            type="age"
                            name="age"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.age, invalid: validationResult.validated && validationResult.age })}
                            value={user.age}
                            onChange={handleState}
                        />
                        <label htmlFor="">Genero</label>
                        <input
                            title={validationResult.gender}
                            type="text"
                            name="gender"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.gender, invalid: validationResult.validated && validationResult.gender })}
                            value={user.gender}
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
                            value={user.state}
                            onChange={handleState}
                        />
                        <label htmlFor="">Ciudad</label>
                        <input
                            title={validationResult.city}
                            type="city"
                            name="city"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.city, invalid: validationResult.validated && validationResult.city })}
                            value={user.city}
                            onChange={handleState}
                        />
                        <label htmlFor="">Dirección</label>
                        <input
                            title={validationResult.address}
                            type="address"
                            name="address"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.address, invalid: validationResult.validated && validationResult.address })}
                            value={user.address}
                            onChange={handleState}
                        />
                        <label htmlFor="">Código postal</label>
                        <input
                            title={validationResult.cp}
                            type="zip"
                            name="cp"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.cp, invalid: validationResult.validated && validationResult.cp })}
                            value={user.cp}
                            onChange={handleState}
                        />
                        <label htmlFor="">Teléfono</label>
                        <input
                            title={validationResult.phone}
                            type="tel"
                            name="phone"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.phone, invalid: validationResult.validated && validationResult.phone })}
                            value={user.phone}
                            onChange={handleState}
                        />
                        <label htmlFor="">email</label>
                        <input
                            title={validationResult.email}
                            type="email"
                            name="email"
                            className={classNames("input", { valid: validationResult.validated && !validationResult.email, invalid: validationResult.validated && validationResult.email })}
                            value={user.email}
                            onChange={handleState}
                        />
                    </div>
                </div>

                <input type="button" value="ACTUALIZAR DATOS PERSONALES" className="button-update" onClick={updateUser}/>
            </form>
            <p className="conditions">En NIU nos tomamos muy en serio tu privacidad y estamos comprometidos con la protección de tus datos personales. Conoce más sobre de cómo cuidamos y usamos tus datos en nuestra <em>Política de privacidad</em></p>
        </div>


    )
};
const mapStateToProps = state => {
    return {
        userId: state.userReducer.userId,
        token: state.userReducer.token
    }
};

export default connect(mapStateToProps)(UserData);