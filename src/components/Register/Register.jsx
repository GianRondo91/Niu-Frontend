import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { validateField, validateFields, isValid } from '../../utils';

import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, FormFeedback } from 'reactstrap';

//Redux
import { connect } from 'react-redux';

const Register = (props) => {

    const [state, setState] = useState({
        open: false
    });

    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    const toggleRegister = () => {

        setValidationResult({
            validated: false,
            name: null
        });

        setState({ open: !state.open });
    }

    //const history = useHistory();

    const [dataRegister, setRegister] = useState({
        name: '',
        surname1: '',
        surname2: '',
        phone: '',
        email: '',
        password: ''
    })

    //UseEffect
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


    //Función para traer los datos del backend
    const btnRegister = async () => {

        let validationResult = validateFields(dataRegister);

        setValidationResult({
            ...validationResult,
            validated: true
        });

        if(!isValid(validationResult)){
            return;
        };

        try {
            await axios.post('https://niubackend.herokuapp.com/users', dataRegister);

            alert('Usuario registrado con exito');
            
            toggleRegister();

        } catch (error) {
            if(error.response?.data?.message){
                alert(error.response.data.message);
            } else {
                alert('Error al registrarse');
            }
        };
    }
    return (
        <div className="register" >
            <div className="button-register" onClick={toggleRegister}>
                {/* <FontAwesomeIcon icon={faUser} /> */}REGISTER
            </div>

            <Modal isOpen={state.open}>
                <Button color='secundary' onClick={toggleRegister}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>

                <ModalHeader>Registrarse</ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label form='name'>Nombre</Label>
                        <Input type='text' id='name' name='name' onChange={handleState} valid={validationResult.validated && !validationResult.name} invalid={validationResult.validated && validationResult.name} />
                        <FormFeedback>{validationResult.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='surname1'>Primer Apellido</Label>
                        <Input type='text' id='surname1' name='surname1' onChange={handleState} valid={validationResult.validated && !validationResult.surname1} invalid={validationResult.validated && validationResult.surname1} />
                        <FormFeedback>{validationResult.surname1}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='surname1'>Segundo Apellido</Label>
                        <Input type='text' id='surname2' name='surname2' onChange={handleState} valid={validationResult.validated && !validationResult.surname2} invalid={validationResult.validated && validationResult.surname2} />
                        <FormFeedback>{validationResult.surname2}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='email'>Email</Label>
                        <Input type='text' id='email' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='phone'>Telefono</Label>
                        <Input type='phone' id='phone' name='phone' onChange={handleState} valid={validationResult.validated && !validationResult.phone} invalid={validationResult.validated && validationResult.phone} />
                        <FormFeedback>{validationResult.phone}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Contraseña</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={btnRegister}>Registrarse</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
};

export default connect()(Register);