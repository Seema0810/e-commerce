import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import Women from './Components/Products/Women';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Payment from './Components/Payment';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>        
        <Route  path="/singleproduct/:productId" element={<SingleProduct/>}/>
        <Route  path="/women" element={<Women/>}/>
        <Route  path="/cart" element={<Cart/>}/> 
        <Route  path="/login" element={<Login/>}/>     
        <Route  path="/signup" element={<Signup/>}/>     
        <Route  path="/payment" element={<Payment/>}/>        
    </Routes>
    </Router>
  );
}

export default App;
