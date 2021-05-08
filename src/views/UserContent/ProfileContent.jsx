import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../../views/Menu/Menu';

const ProfileContent = () => {
    return (
        <div className="contact">
           <Switch>
               <Route path='/user' exact component={Menu}/>
           </Switch>
        </div>
    )
};

export default ProfileContent;