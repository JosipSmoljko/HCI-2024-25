"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import notFound from "@/public/not_found/not_found.jpg";

export default function NotFoundPage() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mt-2">
        <Image
          src={notFound} 
          alt="Page Not Found"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-xl text-gray-700 mt-4">The page you're looking for doesn't exist.</p>
      <button
        onClick={goHome}
        className="mt-6 px-6 py-2 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-400"
      >
        Go Back to Home
      </button>
    </main>
  );
}
