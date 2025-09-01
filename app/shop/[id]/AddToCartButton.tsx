"use client";

import React, { useState } from "react";

type Props = {
  productId: string;
  productName: string;
};

export default function AddToCartButton({ productId, productName }: Props) {
  const [messageVisible, setMessageVisible] = useState(false);

  const handleAddToCart = () => {
    console.log(`Adding ${productName} (ID: ${productId}) to cart`);
    // Show fake message
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 2000); // hide after 2s
  };

  return (
    <div className="relative">
      <button
        onClick={handleAddToCart}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-fit"
      >
        Add to Cart
      </button>

      {messageVisible && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-green-500 text-white rounded shadow-lg text-sm">
          Added to cart!
        </div>
      )}
    </div>
  );
}
