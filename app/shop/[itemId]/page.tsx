import Link from "next/link";
import { Metadata } from "next";
import { BASE_API_URL } from "../page";

export const metadata: Metadata = {
  title: "Product Details",
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const getPhoto = async (id: string): Promise<Photo> => {
  const response = await fetch(`${BASE_API_URL}/photos/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch photo");
  }
  return response.json();
};

type ShopPostProps = {
  params: { itemId: string };
};

export default async function ShopPost({ params }: ShopPostProps) {
  const { itemId } = params;

  let photo: Photo | null = null;

  try {
    photo = await getPhoto(itemId);
  } catch (error) {
    console.error("Error fetching photo:", error);
  }

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      {photo ? (
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <img src={photo.url} alt={photo.title} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl text-zinc-700 font-bold capitalize">
              <span className="text-neutral-400">photo {photo.id}:</span> {photo.title}
            </h1>
            <p className="text-xl p-4">{photo.title}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500">Failed to load photo details.</p>
      )}
    </main>
  );
}
