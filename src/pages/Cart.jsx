import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.new_price * item.quantity, 0);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-indigo-600 font-bold">
                    ₹{item.new_price.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total: ₹{totalPrice.toFixed(2)}
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
