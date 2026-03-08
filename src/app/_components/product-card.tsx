import Image, { StaticImageData } from "next/image";
import { GitCompare, Heart, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type Product = {
  category: string;
  name: string;
  img: StaticImageData;
  originalPrice: null | number;
  price: number;
};

export function ProductCard({
  product,
  largeImage = false,
  vertical = false,
}: {
  product: Product;
  largeImage?: boolean;
  vertical?: boolean;
}) {
  return (
    <Card className="rounded overflow-hidden group hover:shadow-xl relative">
      <CardContent className="p-2 px-4 flex items-center justify-between gap-6">
        <div
          className={cn(
            "relative w-full",
            largeImage ? "h-64" : "h-40",
            vertical ? "block" : "hidden",
          )}
        >
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-3 w-full">
          {/* Category */}
          <p className="text-xs text-muted-foreground">{product.category}</p>

          {/* Name */}
          <h3 className="text-sm font-bold line-clamp-2 min-h-10 text-blue-600/95">
            {product.name}
          </h3>

          {/* Image */}
          <div
            className={cn(
              "relative w-full",
              largeImage ? "h-64" : "h-40",
              vertical ? "hidden" : "block",
            )}
          >
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Price */}
          <div className="flex products-center justify-between">
            <div className="flex flex-col gap-2">
              {product.originalPrice && (
                <span className="text-sm text-red-500 line-through">
                  ${product.originalPrice}
                </span>
              )}

              <span className="font-semibold text-base">${product.price}</span>
            </div>

            <Button size="icon" className="rounded-full hover:-translate-y-0.5">
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>
      </CardContent>

      {/* Hover Footer */}
      <div
        className="
      absolute bottom-0 left-0 w-full
      bg-background
      border-t border-gray-300/90
      px-4 py-2
      flex flex-col md:flex-row products-start md:products-center justify-between gap-1 md:gap-0
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-300
    "
      >
        <div className="flex products-center gap-2 text-xs cursor-pointer">
          <GitCompare size={16} /> Compare
        </div>
        <div className="flex products-center gap-2 text-xs cursor-pointer">
          <Heart size={16} /> Add to Wishlist
        </div>
      </div>
    </Card>
  );
}
