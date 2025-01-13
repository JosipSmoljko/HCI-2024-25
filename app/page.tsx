import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Hero image Iimport
import heroImg from "@/public/hero/hero2.png";

// featured prodct images 
import dogFoodImg from "@/public/featured/dog.jpg";
import catFoodImg from "@/public/featured/cat.jpg";
import birdFoodImg from "@/public/featured/bird.jpg";
import fishFoodImg from "@/public/featured/fish.jpg";

type HeroImageObject = {
  image: StaticImageData;
};

const images: HeroImageObject[] = [
  { image: heroImg },
];

type FeaturedProduct = {
  name: string;
  price: string;
  image: StaticImageData;
};

const featuredProducts: FeaturedProduct[] = [
  { name: "Dog Food", price: "25€", image: dogFoodImg },
  { name: "Cat Food", price: "25€", image: catFoodImg },
  { name: "Bird Food", price: "20€", image: birdFoodImg },
  { name: "Fish Food", price: "15€", image: fishFoodImg },
];

const Home = () => {
  return (
    <div className="bg-orange-50">

      {images.map((imageObj, index) => (
        <section key={index} className="container mx-auto px-6 py-12 text-center">
          <div className="flex flex-col items-center">
            <Image
              src={imageObj.image}
              alt="Pets"
              width={2000}
              height={400}
              className="w-full h-80 object-cover mb-6"
            />
            <h1 className="text-3xl font-bold text-blue-900">
              FOR THE LOVE OF <span className="text-orange-500">PETS</span>, WE'VE
              GOT YOU COVERED!
            </h1>
            <p className="mt-4 text-gray-600">
              Explore a wide range of premium pet supplies, toys, and accessories
              to keep your furry friends happy, healthy, and pampered.
            </p>
            <Link href="/shop">
              <div className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 cursor-pointer">
                VISIT SHOP
              </div>
            </Link>
          </div>
        </section>
      ))}


      <section className="bg-[#4A4242] py-8">
  <div className="container mx-auto px-6">
    <h2 className="text-2xl font-bold text-center text-orange-500">
      Top Categories
    </h2>
    <div className="flex flex-wrap justify-center space-x-12 mt-12">
      {[
        { name: "Dogs", icon: "🐶", link: "/dogs" },
        { name: "Cats", icon: "🐱", link: "/cats" },
        { name: "Fishes", icon: "🐟", link: "/fishes" },
        { name: "Reptiles", icon: "🦎", link: "/reptiles" },
        { name: "Birds", icon: "🐦", link: "/birds" },
      ].map((category) => (
        <Link key={category.name} href={category.link}>
          <div className="text-center text-orange-50 space-y-2 hover:text-orange-500 cursor-pointer flex-1 sm:flex-initial sm:w-full md:w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="text-4xl mx-auto">{category.icon}</div>
            <span className="text-lg font-semibold">{category.name}</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-blue-900">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-orange-100 shadow-md rounded-lg p-4 text-center"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="h-64 w-48 object-cover rounded-md"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold">{product.name}</h3>
              <p className="text-orange-500 font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </section>


  
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold">Services</h4>
            <ul>
              <li>Pet food</li>
              <li>Pet toys</li>
              <li>Pet hygiene</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Sitemap</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/dogs">Dogs</Link>
              </li>
              <li>
                <Link href="/cats">Cats</Link>
              </li>
              <li>
                <Link href="/birds">Birds</Link>
              </li>
              <li>
                <Link href="/reptiles">Reptiles</Link>
              </li>
              <li>
                <Link href="/fishes">Fishes</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Contact Us</h4>
            <p>pet_store@gmail.com</p>
            <p>+385 00 000 0000</p>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          Copyright © 2024 FESB. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
