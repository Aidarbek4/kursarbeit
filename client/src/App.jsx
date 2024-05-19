import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Book from './pages/Book/Book';
import Menu from './pages/Menu/Menu'
import ProductDetail from './pages/ProductDetails/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/book" element={<Book/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path="/product-detail" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
