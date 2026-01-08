import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((s) => s.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => navigate("/checkout");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart 🛒</h2>

      {items.length === 0 ? (
        <div className="text-center p-10 border rounded bg-gray-50 shadow">
          <p className="text-xl text-gray-600 mb-3">Your cart is empty 😞</p>
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Go Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow rounded flex flex-col md:flex-row items-center md:justify-between p-4 gap-4 border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-40 h-40 object-cover rounded"
                />

                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-700">${item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.qty}</span>
                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-600 font-semibold hover:underline ml-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total + Checkout */}
          <div className="mt-6 p-5 bg-gray-100 rounded shadow flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">
              Total: ${total.toFixed(2)}
            </div>

            <div className="flex gap-3 mt-4 md:mt-0 w-full md:w-auto">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 flex-1 md:flex-none"
              >
                Clear Cart
              </button>

              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 flex-1 md:flex-none"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
