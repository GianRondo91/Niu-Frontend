import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { validateField, validateFields, isValid } from '../../utils';

import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, FormFeedback } from 'reactstrap';

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

    const history = useHistory();

    const toggleLogin = () => {
        if(props.token){
            if(props.isAdmin){
                return setTimeout(() => { history.push('/admin') }, 200);
            }
            history.push('/user');
            return;
        }
        setState({ open: !state.open });
    }
    
    const [dataLogin, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleState = (event) => {
        let data = { ...dataLogin, [event.target.name]: event.target.value };

        setLogin(data);

        setValidationResult({
            ...validationResult,
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };


    const btnLogin = async () => {

        let validationResult = validateFields(dataLogin);

        setValidationResult({
            ...validationResult,
            validated: true
        });

        if(!isValid(validationResult)){
            return;
        };

        try {
            let result = await axios.post('https://niubackend.herokuapp.com/users/login', dataLogin);
            props.dispatch({ type: LOGIN, payload: result.data });

            if(result.data.isAdmin){
                return setTimeout(() => { history.push('/admin') }, 200);
            }

            return setTimeout(() => { history.push('/user') }, 200);

        } catch (error) {
            if (error.isAxiosError & error.response?.status === 403) {
                alert('El usuario no existe');
            }
        }
    }

    return (
        <div className="login" >
            <div className="button-login" onClick={toggleLogin}>
                <em>{props.name}</em>
                <FontAwesomeIcon icon={faUser} />
            </div>

            <Modal isOpen={state.open}>
                <Button color='secundary' onClick={toggleLogin}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>

                <ModalHeader>Iniciar Sesión</ModalHeader>
                
                <ModalBody>
                    <FormGroup>
                        <Label form='email'>Email</Label>
                        <Input type='text' id='user' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Contraseña</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' ><Register/></Button>
                    <Button color='primary' onClick={btnLogin}>Entrar</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
};

const mapStateToProps = state => {
    return {
        token: state.userReducer.token,
        order: state.orderReducer.order,
        isAdmin: state.userReducer.isAdmin,
        name: state.userReducer.name
    }
};

export default connect(mapStateToProps)(Login);