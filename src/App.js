import './App.css';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu/Menu';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Route>
    <div className="App">
      <Menu  />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About/>
      </Route>

      </Switch>
    </div>
    </Route>
  );
}

export default App;
