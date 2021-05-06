import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';

import AdminProfile from './views/AdminProfile/AdminProfile';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Shop from './views/Shop/Shop';

function App() {
  return (
    <div className="App">
      	<BrowserRouter>
		      <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/admin' component={AdminProfile}/>
            <Route path='/shop' component={Shop}/> 
		      </Switch>
        </BrowserRouter>
    </div>
  );
};

export default App;