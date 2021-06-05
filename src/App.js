import {BrowserRouter as Router,Route,Switch  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/watchlist'>
            <Watchlist/>
        </Route>
        <Route path='/contact'>
            <Contact/>
        </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
