"use client";

import Image from "next/image";
import { GitCompare, Heart, ShoppingCart } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { shuffle } from "@/lib/utils";

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

  const renderCard = (item: any, index: number) => (
    <Card
      key={index}
      className="rounded overflow-hidden group hover:shadow-xl relative"
    >
      <CardContent className="p-1 px-4 space-y-3 pb-12">
        {/* Category */}
        <p className="text-xs text-muted-foreground">{item.category}</p>

        {/* Name */}
        <h3 className="text-sm font-medium line-clamp-2 min-h-10">
          {item.name}
        </h3>

        {/* Image */}
        <div className="relative w-full h-40">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            {item.originalPrice && (
              <span className="text-sm text-red-500 line-through">
                ${item.originalPrice}
              </span>
            )}

            <span className="font-semibold text-base">${item.price}</span>
          </div>

          <Button size="icon" className="rounded-full hover:-translate-y-0.5">
            <ShoppingCart size={18} />
          </Button>
        </div>
      </CardContent>

      {/* Hover Footer */}
      <div
        className="
      absolute bottom-0 left-0 w-full
      bg-background
      border-t border-gray-300/90
      px-4 py-2
      flex flex-col md:flex-row items-start md:items-center justify-between gap-1 md:gap-0
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-300
    "
      >
        <div className="flex items-center gap-2 text-xs cursor-pointer">
          <GitCompare size={16} /> Compare
        </div>
        <div className="flex items-center gap-2 text-xs cursor-pointer">
          <Heart size={16} /> Add to Wishlist
        </div>
      </div>
    </Card>
  );

  return (
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="border-b border-gray-300/85 w-full bg-transparent">
        <TabsTrigger value="featured">Featured</TabsTrigger>

        <TabsTrigger value="sale">On Sale</TabsTrigger>

        <TabsTrigger value="top">Top Rated</TabsTrigger>
      </TabsList>

      <TabsContent value="featured">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(renderCard)}
        </div>
      </TabsContent>

      <TabsContent value="sale">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {onSale.map(renderCard)}
        </div>
      </TabsContent>

      <TabsContent value="top">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {topRated.map(renderCard)}
        </div>
      </TabsContent>
    </Tabs>
  );
}
