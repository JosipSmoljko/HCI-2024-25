import Link from "next/link";
import type { Metadata } from "next";

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};


export const metadata: Metadata = {
  title: "Products",
};


export const BASE_API_URL = "https://jsonplaceholder.typicode.com";

async function getPhotos(): Promise<Photo[]> {
  const data = await fetch(`${BASE_API_URL}/photos?_limit=50`);
  return data.json();
}

export default async function ShopPage() {
  const photos = await getPhotos();

  return  (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">Shop Index Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-lg">
            <Link href={`shop/${photo.id}`}>
              
                <img src={photo.url} alt={photo.title} className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-4">
                  <span className="text-xl text-zinc-600 hover:underline">{photo.title}</span>
                </div>
             
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}