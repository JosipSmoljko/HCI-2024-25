
import { client } from "@/sanity/client";
import React from "react";
import ShopGrid from "../components/ShopGrid";

export default async function ShopPage() {
  const products = await client.fetch(`*[_type=="product"]{
    _id,
    name,
    price,
    description,
    animal,
    "imageUrl": image.asset->url
  }`);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-6xl m-auto p-6">
      <h1 className="text-4xl font-bold mb-10">Pet Store</h1>
      <ShopGrid key="shop-grid" products={products} />
    </main>
  );
}
