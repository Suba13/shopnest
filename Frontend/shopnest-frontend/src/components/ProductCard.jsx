import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`); // navigate to detail page
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleClick} // click image navigates
      />
      <div className="p-4">
        <h2
          className="font-bold text-lg text-gray-800 cursor-pointer"
          onClick={handleClick} // click name navigates
        >
          {product.name}
        </h2>
        <p className="text-gray-600 mt-2 font-semibold">${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
