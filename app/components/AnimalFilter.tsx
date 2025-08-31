"use client"; // <-- makes this a Client Component

import React from "react";

type Props = {
  onFilter: (animal: string) => void;
};

export default function AnimalFilter({ onFilter }: Props) {
  const animals = ["cat", "dog", "bird", "fish"];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {animals.map((animal) => (
        <button
          key={animal}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          onClick={() => onFilter(animal)}
        >
          {animal.charAt(0).toUpperCase() + animal.slice(1)}
        </button>
      ))}
    </div>
  );
}
