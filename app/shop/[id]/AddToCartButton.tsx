"use client";

import React from "react";

type Props = {
  productId: string;
  productName: string;
};

export default function AddToCartButton({ productId, productName }: Props) {
  const handleAddToCart = () => {
    console.log(`Adding ${productName} (ID: ${productId}) to cart`);
    // Add your cart logic here
    // For example: addToCart(productId)
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-fit"
    >
      Add to Cart
    </button>
  );
}