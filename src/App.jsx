import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import ProductDetails from './pages/ProductDetails';
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
      <Footer />
    </>
  );
}

export default App;
