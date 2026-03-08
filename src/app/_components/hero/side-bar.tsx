import Image from "next/image";
import { ChevronRight } from "lucide-react";

import product from "./_assets/surface-pro-3.png";

const SIDE_BAR_ITEMS = [
  { text: "Value of the day", featured: true },
  { text: "Top 100 Offers", featured: true },
  { text: "New Arrivals", featured: true },
  { text: "Computers & Accessories", featured: false },
  { text: "Cameras, Audio & Video", featured: false },
  { text: "Mobiles & Tablets", featured: false },
  { text: "Movies, Music & Video Game", featured: false },
  { text: "TV & Audio", featured: false },
  { text: "Watches & Eyewear", featured: false },
  { text: "Car, Motorbike & Industrial", featured: false },
  { text: "Accessories", featured: false },
];

export function SideBar() {
  return (
    <ul className="divide-y divide-black/15 w-64 bg-white">
      {SIDE_BAR_ITEMS.map((item, i) => (
        <li
          key={i}
          className={`relative flex items-center justify-between text-sm ${
            item.featured ? "font-bold hover:opacity-80" : "hover:font-bold"
          } px-6 py-2.5 cursor-pointer transition-all duration-300 group`}
        >
          <span>{item.text}</span>

          {!item.featured && <ChevronRight size={16} />}

          {!item.featured && (
            <div className="absolute mt-12 lg:mt-0 lg:left-full top-0 hidden group-hover:flex flex-col md:flex-row bg-white shadow-xl border w-fit lg:w-150 p-8 gap-10 z-50">
              <ul className="text-black/80 space-y-1">
                <li className="font-bold text-black">Digital Devices</li>
                <li>Computer & Accessories</li>
                <li>Cameras, Audio & Video</li>
                <li>Mobiles & Tablets</li>
                <li>Movies, Music & Video Games</li>
                <li>TV & Audio</li>
                <li>Watches & Eyewear</li>
                <li>Mouse & Keyboards</li>
                <li>Car, Motorbike & Industrial</li>
              </ul>

              <ul className="text-black/80 space-y-1">
                <li className="font-bold text-black">Electronic Items</li>
                <li>Computer & Accessories</li>
                <li>Cameras, Audio & Video</li>
                <li>Mobiles & Tablets</li>
                <li>Movies, Music & Video Games</li>
                <li>TV & Audio</li>
                <li>Watches & Eyewear</li>
                <li>Mouse & Keyboards</li>
                <li>Car, Motorbike & Industrial</li>
              </ul>

              <div className="absolute bottom-0 right-0 aspect-square w-56 h-46 hidden lg:block">
                <Image
                  src={product}
                  alt="Product Image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
