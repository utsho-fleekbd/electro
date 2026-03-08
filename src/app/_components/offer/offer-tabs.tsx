"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { shuffle } from "@/lib/utils";
import { Product, ProductCard } from "../product-card";

import mic from "./_assets/mic.jpg";
import tablet from "./_assets/tablet.jpg";
import headphone from "./_assets/headphone.jpg";
import smartphone from "./_assets/smart-phone.jpg";
import camera from "./_assets/camera.jpg";
import printer from "./_assets/printer.jpg";

const items = [
  {
    category: "Audio",
    name: "Wireless Audio System Multiroom 360 degree",
    img: mic,
    originalPrice: null,
    price: 685,
  },
  {
    category: "Smart Devices",
    name: "Tablet White EliteBook Revolve 810 G2",
    img: tablet,
    originalPrice: 2299,
    price: 1999,
  },
  {
    category: "Audio",
    name: "Purple Solo 2 Wireless",
    img: headphone,
    originalPrice: null,
    price: 685,
  },
  {
    category: "Smart Devices",
    name: "Smartphone 6S 32GB LTE",
    img: smartphone,
    originalPrice: null,
    price: 525,
  },
  {
    category: "Smart Devices",
    name: "Widescreen NX Mini F1 Smart NX",
    img: camera,
    originalPrice: null,
    price: 525,
  },
  {
    category: "Office",
    name: "Full Color Leserjet Pro M452dn",
    img: printer,
    originalPrice: null,
    price: 2499,
  },
];

export function OfferTabs() {
  const featured = shuffle(items);
  const onSale = shuffle(items);
  const topRated = shuffle(items);

  const renderCard = (product: Product, index: number) => (
    <ProductCard key={index} product={product} />
  );

  return (
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger
          value="featured"
          className="data-[state=active]:bg-red-500"
        >
          Featured
        </TabsTrigger>

        <TabsTrigger value="sale">On Sale</TabsTrigger>

        <TabsTrigger value="top">Top Rated</TabsTrigger>
      </TabsList>

      <TabsContent value="featured">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(renderCard)}
        </div>
      </TabsContent>

      <TabsContent value="sale">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {onSale.map(renderCard)}
        </div>
      </TabsContent>

      <TabsContent value="top">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRated.map(renderCard)}
        </div>
      </TabsContent>
    </Tabs>
  );
}
