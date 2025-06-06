import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <Link to="/" className="text-3xl font-extrabold text-indigo-700 tracking-wide">ShopSwift</Link>
        <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>

            <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to= "/cart" className= "text-gray-600 hover:text-indigo-600">Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;