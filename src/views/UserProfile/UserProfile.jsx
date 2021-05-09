import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserEdit, faStore, faReceipt, faTrash, faSignOutAlt, faMapMarkedAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/types/userType';

import ProfileContent from '../UserContent/ProfileContent';
import Edit from '../UserContent/UserData/UserData';
import Shop from '../UserContent/Shop/Shop';
import History from '../UserContent/OrderHistory/OrderHistory';
import Contact from '../UserContent/Contact/Contact';
import Cart from '../UserContent/Cart/Cart';

const UserProfile = (props) => {

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
    if (!props.token || props.isAdmin) {
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
                    <div className="user-data button-panel-profile">
                        <Link to="/user" className="link">
                            <FontAwesomeIcon icon={faHome} />
                            <em className="link">Home</em>
                        </Link>
                    </div>
                    <div className="user-data button-panel-profile">
                        <Link to="/user/edit" className="link">
                            <FontAwesomeIcon icon={faUserEdit} />
                            <em className="link">Perfil</em>
                        </Link>
                    </div>
                    <div className="shop button-panel-profile">
                        <Link to="/user/shop/starters" className="link">
                            <FontAwesomeIcon icon={faStore} />
                            <em className="link">Tienda</em>
                        </Link>
                    </div>
                    <div className="order-history button-panel-profile">
                        <Link to="/user/history" className="link">
                            <FontAwesomeIcon icon={faReceipt} />
                            <em className="link">Historial</em>
                        </Link>
                    </div>
                    <div className="contact button-panel-profile">
                        <Link to="/user/contact" className="link">
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                            <em className="link">Contacto</em>
                        </Link>
                    </div>
                    <div className="delete-acount" onClick={deleteUser}>
                        <FontAwesomeIcon icon={faTrash} />
                        <em className="link">Eliminar Cuenta</em>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                <Switch>
                    <Route path='/user' exact component={ProfileContent} />
                    <Route path='/user/edit' exact component={Edit} />
                    <Route path='/user/shop' component={Shop} />
                    <Route path='/user/history' exact component={History} />
                    <Route path='/user/contact' exact component={Contact} />
                    <Route path='/user/cart' exact component={Cart}/>
                </Switch>
            </div>

            <div className="profile-user">
                <div className="cartShop">
                    <Link to="/user/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />{props.itemCount}
                    </Link>
                </div>
                <div className="exit">
                    <FontAwesomeIcon icon={faSignOutAlt} onClick={logOut}/>
                </div>
                <div className="profile-user-panel">
                    <div className="user-image"></div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                </div>
                <div className="profile-user-qr"></div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userId: state.userReducer.userId,
        token: state.userReducer.token,
        itemCount: state.orderReducer.order.productCount,
        isAdmin: state.userReducer.isAdmin
    }
};

export default connect(mapStateToProps)(UserProfile);
