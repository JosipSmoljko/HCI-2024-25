<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> 04c396cb04654b7e0fc58329ce3bb4927c17399b
import { Metadata } from "next";
import { BASE_API_URL } from "../page";

export const metadata: Metadata = {
  title: "Product Details",
<<<<<<< HEAD
};

type PhotoPageProps = {
  params: { itemId: string };
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const getPhoto = async (id: string): Promise<Photo> => {
  const data = await fetch(`${BASE_API_URL}/photos/${id}`);
  return data.json();
};

export default async function ShopPost({ params }: PhotoPageProps) {
  const { itemId } = params;
  const photo = await getPhoto(itemId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      {photo && (
=======
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

// Dynamic route type
export default async function ShopPost({ params }: { params: { itemId: string } }) {
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
>>>>>>> 04c396cb04654b7e0fc58329ce3bb4927c17399b
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
