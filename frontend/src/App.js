import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import Women from './Components/Products/Women';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Payment from './Components/Payment';
import Shipping from './Components/Shipping';
import Order from './Components/Order';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UPDATE_CART } from './redux/actions/types';


function App() {
  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updatedCart = useSelector(state => state.cart);

    useEffect(() => {

      const updatedCart = JSON.parse(localStorage.getItem("updatedCart"));
      if (updatedCart) {//when user has a login active session
        dispatch({ type: UPDATE_CART, payload: updatedCart });
        // navigate("/posts");
      }
    }, []);

    return (
      <Routes>
      <Route exact path="/" element={<Home/>}/>        
      <Route  path="/singleproduct/:productId" element={<SingleProduct/>}/>
      <Route  path="/women" element={<Women/>}/>
      <Route  path="/cart" element={<Cart/>}/> 
      <Route  path="/login" element={<Login/>}/>     
      <Route  path="/signup" element={<Signup/>}/>     
      <Route  path="/choosepayment" element={<Payment/>}/>        
      <Route  path="/shipping" element={<Shipping/>}/>    
      <Route  path="/order" element={<Order/>}/>
  </Routes>
    )
  }

  return (    
    <Router>
    <Header/>
    <DynamicRouting/>
    </Router>
  
  );
}

export default App;
