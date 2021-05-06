import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faStore, faReceipt, faTrash, faSignOutAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

//import ProfileContent from '../ProfileContent';
import ProfileContent from '../ProfileContent/ProfileContent';
import UserData from '../ProfileContent/UserData/UserData';
import Shop from '../ProfileContent/Shop/Shop';
import History from '../ProfileContent/OrderHistory/OrderHistory';
import Contact from '../ProfileContent/Contact/Contact';


const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-panel">
                <div className="profile-panel-center">
                    <a href="/"><div className="logo"> </div></a>
                    <div className="user-data button-panel-profile"><FontAwesomeIcon icon={faHome} /><Link to="/profile" className="link">Home</Link></div>
                    <div className="user-data button-panel-profile"><FontAwesomeIcon icon={faUser} /><Link to="/profile/user" className="link">Perfil</Link></div>
                    <div className="shop button-panel-profile"><FontAwesomeIcon icon={faStore} /><Link to="/profile/shop" className="link">Tienda</Link></div>
                    <div className="order-history button-panel-profile"><FontAwesomeIcon icon={faReceipt} /><Link to="/profile/history" className="link">Historial</Link></div>
                    <div className="contact button-panel-profile"><FontAwesomeIcon icon={faMapMarkedAlt} /><Link to="/profile/contact" className="link">Contacto</Link></div>
                    <div className="delete-acount"><FontAwesomeIcon icon={faTrash} /><em className="link">Eliminar Cuenta</em></div>
                </div>
            </div>

            <div className="profile-content">
                    <Switch>
                        <Route path='/profile' exact component={ProfileContent} />
                        <Route path='/profile/user' exact component={UserData} />
                        <Route path='/profile/shop' exact component={Shop} />
                        <Route path='/profile/history' exact component={History} />
                        <Route path='/profile/contact' exact component={Contact} />
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

export default Profile;