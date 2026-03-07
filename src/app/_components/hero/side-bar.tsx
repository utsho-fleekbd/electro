import { ChevronRight } from "lucide-react";

const SIDE_BAR_ITEMS = [
  {
    text: "Value of the day",
    featured: true,
  },
  {
    text: "Top 100 Offers",
    featured: true,
  },
  {
    text: "New Arrivals",

    featured: true,
  },
  {
    text: "Computers & Accessories",
    featured: false,
  },
  {
    text: "Cameras, Audio & Video",
    featured: false,
  },
  {
    text: "Mobiles & Tablets",
    featured: false,
  },
  {
    text: "Movies, Music & Video Game",
    featured: false,
  },
  {
    text: "TV & Audio",
    featured: false,
  },
  {
    text: "Watches & Eyewear",
    featured: false,
  },
  {
    text: "Car, Motorbike & Industrial",
    featured: false,
  },
  {
    text: "Accessories",
    featured: false,
  },
];

export function SideBar() {
  return (
    <ul className="divide-y divide-black/15">
      {SIDE_BAR_ITEMS.map((item, i) => (
        <li
          key={i}
          className={`flex items-center justify-between text-sm ${
            item.featured ? "font-bold hover:opacity-80" : "hover:font-bold"
          } px-6 py-2.5 cursor-pointer transition-all duration-300`}
        >
          <span>{item.text}</span>
          {!item.featured && <ChevronRight size={16} />}
        </li>
      ))}
    </ul>
  );
}
