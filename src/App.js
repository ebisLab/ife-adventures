import './App.css';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import BooksInSeries from './pages/BooksInSeries';
import BibleInspiration from './pages/BibleInspiration';
import Contact from './pages/Contact';
import Products from './pages/Products/Products';
import HardCoverBooks from './pages/Products/HardCoverBooks';
import ColoringBooks from './pages/Products/ColoringBooks';
import Diary from './pages/Diary';


function App() {
  return (
    <div className="App">
      <Menu  />
      <Routes>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/books-in-series" element={<BooksInSeries />} />
      <Route path="/biblical-inspiration" element={<BibleInspiration/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ife-diary" element={<Diary />} />
      <Route path="/products" element={<Products/>}>
        <Route index element={<HardCoverBooks/>} />
        <Route path="coloring-books" element={<ColoringBooks />} />
      </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
