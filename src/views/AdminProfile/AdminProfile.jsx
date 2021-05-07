import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserEdit, faUtensils, faReceipt, faTrash, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import AdminContent from '../AdminContent/AdminContent';
import EditAdmin from '../UserContent/UserData/UserData';
import AddAdmin from '../AdminContent/AddAdmin/AddAdmin';
import AddProducts from '../AdminContent/AddProduct/AddProduct';
import Orders from '../AdminContent/Orders/Orders';

const AdminProfile = () => {
    return (
        <div className="profile">
            <div className="profile-panel">
                <div className="profile-panel-center">
                    <a href="/"><div className="logo"> </div></a>
                    <div className="user-data button-panel-profile">
                        <Link to="/admin" className="link">
                            <FontAwesomeIcon icon={faHome} />
                            <em className="link">Home</em>
                        </Link>
                    </div>
                    <div className="user-data button-panel-profile">
                        <Link to="/admin/edit" className="link">
                            <FontAwesomeIcon icon={faUserEdit} />
                            <em className="link">Perfil</em>
                        </Link>
                    </div>
                    <div className="shop button-panel-profile">
                        <Link to="/admin/addAdmin" className="link">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <em className="link">Admin</em>
                        </Link>
                    </div>
                    <div className="shop button-panel-profile">
                        <Link to="/admin/addProducts" className="link">
                            <FontAwesomeIcon icon={faUtensils} />
                            <em className="link">Platos</em>
                        </Link>
                        </div>
                    <div className="order-history button-panel-profile">
                        <Link to="/admin/orders" className="link">
                            <FontAwesomeIcon icon={faReceipt} />
                            <em className="link">Pedidos</em>
                        </Link>
                        </div>
                    <div className="delete-acount">
                        <FontAwesomeIcon icon={faTrash} />
                        <em className="link">Eliminar Cuenta</em>
                        </div>
                </div>
            </div>

            <div className="profile-content">
                <Switch>
                    <Route path='/admin' exact component={AdminContent} />
                    <Route path='/admin/edit' exact component={EditAdmin} />
                    <Route path='/admin/addAdmin' exact component={AddAdmin} />
                    <Route path='/admin/addProducts' exact component={AddProducts} />
                    <Route path='/admin/orders' exact component={Orders} />
                </Switch>
            </div>

            <div className="profile-admin">
                <div className="exit"><FontAwesomeIcon icon={faSignOutAlt} /></div>
                <div className="profile-admin-panel">
                    <div className="admin-image"></div>
                    <div className="admin-name">Nombre del Admin Completo</div>
                    <div className="admin-email">admin@admin.com</div>
                </div>
                <div className="profile-admin-qr"></div>
            </div>
        </div>
    )
};

export default AdminProfile;