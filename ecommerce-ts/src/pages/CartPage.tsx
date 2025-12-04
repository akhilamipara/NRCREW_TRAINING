import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cart, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    alert(`🎉 Order placed successfully!\n\n💰 Total: ₹${getCartTotal().toFixed(2)}\n\n✅ Thank you for your purchase!`);
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          🛒 Shopping Cart
        </h2>
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <div className="text-6xl mb-4">🛍️</div>
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <p className="text-gray-500 mt-2">Add some products to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        🛒 Shopping Cart
        <span className="text-lg font-normal text-gray-600">({cart.length} item{cart.length !== 1 ? 's' : ''})</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg sticky top-4 border-2 border-blue-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📋 Order Summary
            </h3>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span className="font-semibold">₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span className="font-semibold text-green-600">Free 🎁</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax:</span>
                <span className="font-semibold">₹0.00</span>
              </div>
              <div className="border-t-2 border-blue-200 pt-3 mt-3">
                <div className="flex justify-between text-2xl font-bold text-gray-800">
                  <span>Total:</span>
                  <span className="text-blue-600">₹{getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              💳 Proceed to Checkout
            </button>
            <div className="mt-4 text-center text-sm text-gray-500">
              🔒 Secure checkout guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
