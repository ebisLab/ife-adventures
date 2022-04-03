import './App.css';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import BooksInSeries from './pages/BooksInSeries';
import BibleInspiration from './pages/BibleInspiration';


function App() {
  return (
    <Route>
    <div className="App">
      <Menu  />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/books-in-series">
        <BooksInSeries/>
      </Route>
      <Route path="/biblical-inspiration">
        <BibleInspiration/>
      </Route>

      </Switch>
      <Footer />
    </div>
    </Route>
  );
}

export default App;
