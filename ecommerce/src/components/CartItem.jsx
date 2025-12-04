import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-bold text-gray-700"
          >
            −
          </button>
          <span className="w-10 text-center font-bold text-gray-800">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-bold text-gray-700"
          >
            +
          </button>
        </div>
        <p className="text-lg font-bold text-blue-600">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>
        <button 
          onClick={() => removeFromCart(item.id)} 
          className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors flex items-center gap-1"
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
