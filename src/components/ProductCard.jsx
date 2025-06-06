import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();
  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-48 flex items-center justify-center bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>
        <h2 className="mt-2 font-medium text-sm truncate text-gray-800">
          {product.name}
        </h2>
      </Link>

      <p className="text-indigo-600 font-bold text-sm mt-1">
        ₹{product.new_price.toFixed(2)}
      </p>

      <div className="min-h-[40px] mt-2">
        {inCart ? (
          <div className="flex items-center justify-between bg-indigo-600 text-white py-1 px-2 rounded">
            <button onClick={() => decreaseQty(product.id)}>−</button>
            <span>{inCart.quantity}</span>
            <button onClick={() => increaseQty(product.id)}>+</button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-indigo-600 text-white py-2 text-sm rounded-md hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
