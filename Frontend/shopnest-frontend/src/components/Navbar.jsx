import { useDispatch, useSelector } from "react-redux";
import { logout, clearMessage } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((s) => s.auth.token); // check login
  const cartCount = useSelector((s) =>
    token ? s.cart.items.reduce((a, b) => a + b.qty, 0) : 0
  );
  const message = useSelector((s) => s.auth.message);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => dispatch(clearMessage()), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // redirect to login
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center relative">
      <Link to={token ? "/products" : "/"} className="font-bold text-xl">
        ShopNest 🛍️
      </Link>

      <div className="flex items-center gap-6">
        {token && (
          <>
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {message && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
          {message}
        </div>
      )}
    </nav>
  );
}
