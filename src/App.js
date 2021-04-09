import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      	<BrowserRouter>
		      <Switch>
            <Route path='/' component={Home}/>
		      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
