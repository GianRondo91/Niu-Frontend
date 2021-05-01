import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label,FormFeedback } from 'reactstrap';
// import {validateField, validateFields, isValid } from '../../uti';

//Redux
// import { LOGIN } from '../../redux/types/userType';
// import { connect } from 'react-redux';

const Login = (props) => {

    // //Estado del Modal
    // const [state, setState] = useState({
    //     open: false
    // });

    // const [validationResult, setValidationResult] = useState({
    //     validated: false,
    //     name: null
    // });

    // const toggleLogin = () => {
    //     setState({ open: !state.open });
    // }

    // const history = useHistory();

    // //Hook -> Estado del Login
    // const [dataLogin, setLogin] = useState({
    //     email: '',
    //     password: '',
    //     userType: ''
    // })

    // //Handlers
    // const handleState = (event) => {
    //     let data = { ...dataLogin, [event.target.name]: event.target.value };
    //     setLogin(data);

    //     setValidationResult({
    //         ...validationResult,
    //         [event.target.name]: validateField(event.target.name, event.target.value)
    //     });
    // };

    // //Effect
    // useEffect(() => {
    //     console.log('Soy el componente montado de LOGIN!')
    // }, []);

    // const enter = async () => {
    //     let validationResult = validateFields(dataLogin);

    //     //Setea el estado de validación
    //     setValidationResult({
    //         ...validationResult,
    //         validated: true
    //     });

    //     if(!isValid(validationResult)){
    //         return;
    //     };
        
    //     let role = dataLogin.userType === 'Patient' ? 'patients' : 'employees';
           
    //     try {

    //         let result = await axios.post(`http://localhost:3001/${role}/login`, dataLogin);

    //         result.data.userType = dataLogin.userType;

    //         //Mandamos los datos de Login por Redux a store
    //         props.dispatch({ type: LOGIN, payload: result.data });


    //         //Redireccionamos según el perfil elegido
    //         return setTimeout(() => {
    //             if (dataLogin.userType === 'Patient') {
    //                 history.push('/patient');
    //             } else if (dataLogin.userType === 'Employee') {
    //                 history.push('/employee');
    //             } else {
    //                 alert('Eres un intruso!');
    //             }
    //         }, 200)
                        
    //     } catch (error) {
    //         if(error.isAxiosError & error.response?.status === 403){
    //             alert('El usuario no existe');  
    //         }
    //     }
    // };
    
    return (
        //<div className="login" onClick={toggleLogin}>
        <div className="login">
            <div className="button-login">
               <FontAwesomeIcon icon={faUser} />
            </div>

            {/* <Modal isOpen={StaticRange.open}>
                <ModalHeader>Iniciar Sesión</ModalHeader>
            </Modal>
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
                <FormGroup>
                    <Label for='select'>Rango</Label>
                    <Input type='select' name='userType' id='selecrRango' onChange={handleState} valid={validationResult.validated && !validationResult.userType} invalid={validationResult.validated && validationResult.userType}>
                        <option></option>
                        <option>Patient</option>
                        <option>Employee</option>
                    </Input>
                    <FormFeedback>{validationResult.userType}</FormFeedback>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' >GOOGLE LOGIN</Button>
                <Button color='primary' onClick={enter}>Entrar</Button>
                <Button color='secundary' onClick={toggleLogin}><FontAwesomeIcon icon={faTimesCircle} /></Button>
            </ModalFooter> */}
        </div>
    )
};

export default Login;
// export default connect()(Login);