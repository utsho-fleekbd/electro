"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { shuffle } from "@/lib/utils";

import mic from "./_assets/mic.jpg";
import tablet from "./_assets/tablet.jpg";
import headphone from "./_assets/headphone.jpg";
import smartphone from "./_assets/smart-phone.jpg";
import camera from "./_assets/camera.jpg";
import printer from "./_assets/printer.jpg";
import { Product, ProductCard } from "../product-card";

const items: Array<Product> = [
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
    originalPrice: null,
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

export function ProductShowcase() {
  const deals = shuffle(items);
  const tv = shuffle(items);
  const cameras = shuffle(items);
  const audio = shuffle(items);
  const smartphones = shuffle(items);
  const gps = shuffle(items);
  const computers = shuffle(items);
  const accessories = shuffle(items);
  const others = shuffle(items);

  const renderCards = (products: Product[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => {
        const span = index % 3 === 1 ? "col-span-1 lg:col-span-2" : "";

        return (
          <div key={index} className={span}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );

  return (
    <Tabs defaultValue="deals" className="w-full">
      <div className="w-full overflow-x-auto no-scrollbar">
        <TabsList className="w-max">
          <TabsTrigger value="deals">Best Deals</TabsTrigger>
          <TabsTrigger value="tv">TV & Video</TabsTrigger>
          <TabsTrigger value="cameras">Cameras</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
          <TabsTrigger value="smartphones">Smartphones</TabsTrigger>
          <TabsTrigger value="gps">GPS & Navi</TabsTrigger>
          <TabsTrigger value="computers">Computers</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="deals">{renderCards(deals)}</TabsContent>
      <TabsContent value="tv">{renderCards(tv)}</TabsContent>
      <TabsContent value="cameras">{renderCards(cameras)}</TabsContent>
      <TabsContent value="audio">{renderCards(audio)}</TabsContent>
      <TabsContent value="smartphones">{renderCards(smartphones)}</TabsContent>
      <TabsContent value="gps">{renderCards(gps)}</TabsContent>
      <TabsContent value="computers">{renderCards(computers)}</TabsContent>
      <TabsContent value="accessories">{renderCards(accessories)}</TabsContent>
      <TabsContent value="others">{renderCards(others)}</TabsContent>
    </Tabs>
  );
}
