import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';

import AdminProfile from './views/AdminProfile/AdminProfile';
import Home from './views/Home/Home';
import UserProfile from './views/UserProfile/UserProfile';
import Blog from './views/Blog/Blog';

function App() {
  return (
    <div className="App">
      	<BrowserRouter>
		      <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/blog' exact component={Blog}/>
            <Route path='/user' component={UserProfile}/>
            <Route path='/admin' component={AdminProfile}/>
		      </Switch>
        </BrowserRouter>
    </div>
  );
};

export default App;