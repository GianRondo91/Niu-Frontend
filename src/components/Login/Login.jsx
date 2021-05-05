import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { validateField, validateFields, isValid } from '../../uti';

import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

//Redux
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userType';

import Register from '../Register/Register';

const Login = (props) => {

    const [state, setState] = useState({
        open: false
    });

    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    const toggleLogin = () => {
        setState({ open: !state.open });
    }

    const history = useHistory();

    const [dataLogin, setLogin] = useState({
        email: '',
        password: '',
        role: 'user'
    })

    const handleState = (event) => {
        let data = { ...dataLogin, [event.target.name]: event.target.value };

        setLogin(data);

        setValidationResult({
            ...validationResult,
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };


    const sendData = async () => {

        let validationResult = validateFields(dataLogin);

        setValidationResult({
            ...validationResult,
            validated: true
        });


        try {
            let result = await axios.post('http://localhost:3001/user/login', dataLogin);
            if (dataLogin.role === 'user') {
                props.dispatch({ type: LOGIN, payload: result.data });
                return setTimeout(() => { history.push('/home-user') }, 200);
            } else if (dataLogin.role === 'admin') {
                props.dispatch({ type: LOGIN, payload: result.data })
                return setTimeout(() => { history.push('/home-admin') }, 200);
            }

        } catch (error) {
            if (error.isAxiosError & error.response?.status === 403) {
                alert('El usuario no existe');
            }
        }
    }
    return (
        <div className="login" >
            <div className="button-login" onClick={toggleLogin}>
                <FontAwesomeIcon icon={faUser} />
            </div>

            <Modal isOpen={state.open}>
                <Button color='secundary' onClick={toggleLogin}><FontAwesomeIcon icon={faTimesCircle} /></Button>
                <ModalHeader>Iniciar Sesión</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label form='email'>Email</Label>
                        <Input type='text' id='user' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Contraseña</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' ><Register/></Button>
                    <Button color='info' >GOOGLE LOGIN</Button>
                    <Button color='primary' onClick={sendData}>Entrar</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
};

export default connect()(Login);