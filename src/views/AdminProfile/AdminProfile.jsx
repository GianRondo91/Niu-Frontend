import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserEdit, faUtensils, faReceipt, faTrash, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import AdminContent from '../AdminContent/AdminContent';
import EditAdmin from '../AdminContent/EditAdmin/EditAdmin';
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
                        <FontAwesomeIcon icon={faHome} />
                        <Link to="/admin" className="link">Home</Link>
                    </div>
                    <div className="user-data button-panel-profile">
                        <FontAwesomeIcon icon={faUserEdit} />
                        <Link to="/admin/edit" className="link">Perfil</Link>
                    </div>
                    <div className="shop button-panel-profile">
                        <FontAwesomeIcon icon={faUserPlus} />
                        <Link to="/admin/addAdmin" className="link">Agregar Admin</Link>
                    </div>
                    <div className="shop button-panel-profile">
                        <FontAwesomeIcon icon={faUtensils} />
                        <Link to="/admin/addProducts" className="link">Editar Platos</Link>
                        </div>
                    <div className="order-history button-panel-profile">
                        <FontAwesomeIcon icon={faReceipt} />
                        <Link to="/admin/orders" className="link">Pedidos</Link>
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