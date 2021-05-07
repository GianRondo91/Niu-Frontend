import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserEdit, faStore, faReceipt, faTrash, faSignOutAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

//import ProfileContent from '../ProfileContent';
import ProfileContent from '../UserContent/ProfileContent';
import Edit from '../UserContent/UserData/UserData';
import Shop from '../UserContent/Shop/Shop';
import History from '../UserContent/OrderHistory/OrderHistory';
import Contact from '../UserContent/Contact/Contact';

const UserProfile = () => {
    return (
        <div className="profile">
            <div className="profile-panel">
                <div className="profile-panel-center">
                    <a href="/"><div className="logo"> </div></a>
                    <div className="user-data button-panel-profile">
                        <FontAwesomeIcon icon={faHome} />
                        <Link to="/user" className="link">Home</Link>
                    </div>
                    <div className="user-data button-panel-profile">
                        <FontAwesomeIcon icon={faUserEdit} />
                        <Link to="/user/edit" className="link">Perfil</Link>
                    </div>
                    <div className="shop button-panel-profile">
                        <FontAwesomeIcon icon={faStore} />
                        <Link to="/user/shop" className="link">Tienda</Link>
                    </div>
                    <div className="order-history button-panel-profile">
                        <FontAwesomeIcon icon={faReceipt} />
                        <Link to="/user/history" className="link">Historial</Link>
                    </div>
                    <div className="contact button-panel-profile">
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <Link to="/user/contact" className="link">Contacto</Link>
                    </div>
                    <div className="delete-acount">
                        <FontAwesomeIcon icon={faTrash} />
                        <em className="link">Eliminar Cuenta</em>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                    <Switch>
                        <Route path='/user' exact component={ProfileContent} />
                        <Route path='/user/edit' exact component={Edit} />
                        <Route path='/user/shop' exact component={Shop} />
                        <Route path='/user/history' exact component={History} />
                        <Route path='/user/contact' exact component={Contact} />
                    </Switch>
            </div>

            <div className="profile-user">
                <div className="exit"><FontAwesomeIcon icon={faSignOutAlt} /></div>
                <div className="profile-user-panel">
                    <div className="user-image"></div>
                    <div className="user-name">Nombre del Usuario Completo</div>
                    <div className="user-email">email@email.com</div>
                </div>
                <div className="profile-user-qr"></div>
            </div>
        </div>
    )
};

export default UserProfile;