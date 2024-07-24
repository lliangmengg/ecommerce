import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import '../src/components/Navbar/Navbar';
import Navbar from '../src/components/Navbar/Navbar';
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path="/mens" element = {<ShopCategory banner = {men_banner} category ="men"/>}/>
      <Route path="/womens" element = {<ShopCategory  banner = {women_banner}category ="women"/>}/>
      <Route path="/kids" element = {<ShopCategory banner = {kids_banner} category ="kid"/>}/>
      <Route path="/products/:id" element = {<Product/>}/> 
     <Route path ="/cart" element ={<Cart/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<SignUp/>}/>
     </Routes>
     <Footer/>
    </div>
   
  );
}

export default App;
