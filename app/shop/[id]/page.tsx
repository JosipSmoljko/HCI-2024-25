import { client } from "@/sanity/client";

type Props = {
  params: { id: string } | Promise<{ id: string }>; // allow Promise
};

export default async function ProductPage({ params }: Props) {
  // await params if it's a Promise
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const product = await client.fetch(
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

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <main className="flex flex-col items-center min-h-screen max-w-4xl m-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.imageUrl || "/placeholder.png"}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-start p-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-2">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="mt-4 text-sm text-gray-400">Category: {product.animal}</p>
        </div>
      </div>
    </main>
  );
}
