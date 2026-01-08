import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    alert("Order placed successfully! 🎉");
    dispatch(clearCart());
    navigate("/products");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout 💳</h2>

      <div className="bg-white shadow rounded p-6 space-y-3 border">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-lg">
            <span>{item.name} (x{item.qty})</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}

        <hr className="my-3" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button
          onClick={placeOrder}
          className="w-full bg-blue-600 text-white py-3 rounded mt-5 hover:bg-blue-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
