import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import api from "../services/api"; // <- use api instead of axios

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get(`/api/products/${id}`) // <- just the path, baseURL is in api.js
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
      />
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-2xl font-semibold text-indigo-600">
          ${product.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition w-1/2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
