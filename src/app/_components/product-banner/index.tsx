import camera from "./_assets/camera.png";
import laptops from "./_assets/laptops.jpg";
import desktop from "./_assets/desktop.jpg";
import cameras from "./_assets/cameras.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const BANNER_ITEMS = [
  {
    text: (
      <p className="uppercase text-base md:text-lg font-light">
        Catch big <span className="font-bold">deals</span> on the cameras
      </p>
    ),
    img: camera,
  },
  {
    text: (
      <p className="uppercase text-base md:text-lg font-light">
        Catch big <span className="font-bold">deals</span> on the cameras
      </p>
    ),
    img: laptops,
  },
  {
    text: (
      <p className="uppercase text-base md:text-lg font-light">
        Catch big <span className="font-bold">deals</span> on the cameras
      </p>
    ),
    img: desktop,
  },
  {
    text: (
      <p className="uppercase text-base md:text-lg font-light">
        Catch big <span className="font-bold">deals</span> on the cameras
      </p>
    ),
    img: cameras,
  },
];

export function ProductBanner() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-6">
      {BANNER_ITEMS.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-2 bg-gray-200/75 p-3 rounded-lg"
        >
          <Image
            src={item.img}
            alt="Product Image"
            width={200}
            height={200}
            className="size-16 sm:size-20 object-cover rounded-2xl"
          />
          <div className="space-y-1 md:space-y-4">
            {item.text}
            <Link
              href=""
              className="text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
            >
              Shop now
              <Button size="icon-xs" className="rounded-full">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
