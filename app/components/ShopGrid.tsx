"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  animal: string;
  imageUrl?: string;
};

type Props = {
  products: Product[];
};

export default function ShopGrid({ products }: Props) {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter ? products.filter((p) => p.animal === filter) : products),
    [filter, products]
  );

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-8">
        {["cat", "dog", "bird", "fish"].map((animal) => (
          <button
            key={animal}
            className={`px-4 py-2 rounded text-white transition ${
              filter === animal ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={() => setFilter(filter === animal ? null : animal)}
          >
            {animal.charAt(0).toUpperCase() + animal.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <Link href={`/shop/${p._id}`}>
              <img
                src={p.imageUrl || "/placeholder.png"}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
                <p className="text-gray-500 mt-1">${p.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
