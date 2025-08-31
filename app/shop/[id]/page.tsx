import { client } from "@/sanity/client";
import React from "react";
import AddToCartButton from "./AddToCartButton";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  animal: string;
  imageUrl?: string;
};

// For Next.js 15, params is a Promise in server components too
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  // Await the params
  const { id } = await params;
  
  // Fetch the product data
  const product: Product = await client.fetch(
    `*[_type=="product" && _id == $id][0]{
      _id,
      name,
      price,
      description,
      animal,
      "imageUrl": image.asset->url
    }`,
    { id }
  );

  if (!product) {
    return (
      <main className="flex flex-col items-center min-h-screen max-w-4xl m-auto p-6">
        <p className="text-center mt-10">Product not found</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen max-w-4xl m-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg"
          />
        )}
        <div className="flex flex-col justify-start p-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-2 text-xl">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="mt-4 text-sm text-gray-500">
            Category: {product.animal.charAt(0).toUpperCase() + product.animal.slice(1)}
          </p>
          <AddToCartButton productId={product._id} productName={product.name} />
        </div>
      </div>
    </main>
  );
}