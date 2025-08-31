import { client } from "@/sanity/client";
import Link from "next/link";

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

      {/* Optional Animal Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        {["cat", "dog", "bird", "fish"].map((animal) => (
          <button
            key={animal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => console.log("Filter", animal)}
          >
            {animal.charAt(0).toUpperCase() + animal.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p: any) => (
          <div key={p._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
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
    </main>
  );
}
