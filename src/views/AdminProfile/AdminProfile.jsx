import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faReceipt, faTrash, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types/userType';

import EditAdmin from '../UserContent/UserData/UserData';
import AddAdmin from '../AdminContent/AddAdmin/AddAdmin';
import Orders from '../AdminContent/Orders/Orders';
import OrderHistory from '../AdminContent/OrderHistory/OrderHistory';

const AdminProfile = (props) => {

    let history = useHistory();

    const [user, setUser] = useState({});

    const logOut = () => {
        let confirmar = window.confirm('¿Seguro que quires salir de tu perfil?');
        if (confirmar) {
            setTimeout(() => {
                props.dispatch({ type: LOGOUT, payload: {} });
                history.push('/');
            }, 1000);
        };
    };

    useEffect(() => {
        const getUser = async () => {

            let id = props.userId;
            let token = props.token;

            if (!token) {
                return;
            }

            let result = await axios.get(`https://niubackend.herokuapp.com/users/${id}`, { headers: { authorization: token } });

            setUser(result.data);
        }
        getUser();
    }, []);

    useEffect(() => { }, [props.itemCount]);

    const deleteUser = async () => {

        let confirmar = window.confirm('¿Seguro que quieres eliminar el usuario (no hay vuelta atras)?');
        if (!confirmar) {
            return;
        };
        
        let result = await axios.delete(`https://niubackend.herokuapp.com/users/${props.userId}`, { headers: { authorization: props.token } });
        
        if(result.status === 200){
            props.dispatch({ type: LOGOUT, payload: {}});
            
            setTimeout(() => {
                history.push('/');
            }, 200);            
        }
    };

    //ver si esta logeado
    if (!props.token || !props.isAdmin) {
        setTimeout(() => {
            history.push('/');
        }, 200);

        return null;
    }

    return (
        <div className="profile">
            <div className="profile-panel">
                <div className="profile-panel-center">
                    <a href="/"><div className="logo"> </div></a>
                        <Link to="/admin" className="link">
                        <div className="order-history button-panel-profile">
                            <FontAwesomeIcon icon={faReceipt} />
                            <em className="link-em">Pedidos</em>
                            </div>
                        </Link>
                        <Link to="/admin/history" className="link">
                        <div className="order-history button-panel-profile">
                            <FontAwesomeIcon icon={faReceipt} />
                            <em className="link-em">Historial</em>
                            </div>
                        </Link>
                        <Link to="/admin/edit" className="link">
                            <div className="user-data button-panel-profile">
                            <FontAwesomeIcon icon={faUserEdit} />
                            <em className="link-em">Perfil</em>
                            </div>
                        </Link>
                        <Link to="/admin/addAdmin" className="link">
                        <div className="shop button-panel-profile">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <em className="link-em">Admin</em>
                            </div>
                        </Link>
                    <div className="delete-acount" onClick={deleteUser}>
                        <FontAwesomeIcon icon={faTrash} />
                        <em className="link-em">Eliminar Cuenta</em>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                <Switch>
                    <Route path='/admin' exact component={Orders} />
                    <Route path='/admin/edit' exact component={EditAdmin} />
                    <Route path='/admin/addAdmin' exact component={AddAdmin} />
                    <Route path='/admin/history' exact component={OrderHistory} />
                </Switch>
            </div>
            
            <div className="profile-admin">
                <div className="exit">
                        <FontAwesomeIcon icon={faSignOutAlt} onClick={logOut} />
                </div>
                <div className="profile-admin-panel">
                    <div className="admin-welcome admin-data">Bienvenido</div>
                    <div className="admin-image"></div>
                    <div className="admin-name admin-data">{user.name} {user.surname1} {user.surname2}</div>
                    <div className="admin-email admin-data">{user.email}</div>
                    <div className="admin-phone admin-data">{user.phone}</div>
                </div>
                <div className="profile-admin-qr"></div>
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        userId: state.userReducer.userId,
        token: state.userReducer.token,
        isAdmin: state.userReducer.isAdmin
    }
};

export default connect(mapStateToProps)(AdminProfile);