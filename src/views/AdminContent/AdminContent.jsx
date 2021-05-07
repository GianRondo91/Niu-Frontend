import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';

const AdminContent = () => {
    return (
        <div className="contact">
           <div className="contact-title">NOTICIAS DE NIUUUUUUUUUUU</div>
           <div className="admins">
               Cuentas existentes:
               <div className="admin">
                    <FontAwesomeIcon icon={faUserTimes} />
                    <div className="admin-img"></div>
                    <div className="admin-name">Pedro</div>
               </div>
           </div>
           <div className="promotions-add">
               Promociones a subir<br/>
               <input type="file" name="" id="" />
           </div>
        </div>
    )
};

export default AdminContent;