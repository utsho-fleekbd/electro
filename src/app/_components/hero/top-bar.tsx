import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, List } from "lucide-react";

export function TopBar() {
  return (
    <div className="grid grid-cols-12 gap-6 items-center text-sm">
      <Button className="col-span-3 w-full p-6 gap-2 justify-start text-sm font-semibold rounded-none rounded-t-lg">
        <List size={18} /> All Departments
      </Button>

      <ul className="col-span-6 flex items-center gap-8 font-semibold">
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-bold text-secondary hover:opacity-80 transition-opacity duration-300 cursor-pointer flex items-center gap-2">
              Super Deals <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full flex justify-between gap-12 py-4 px-12">
              {/* Home & Static */}
              <DropdownMenuGroup className="text-black/80">
                <DropdownMenuItem className="font-bold text-black/95">
                  Home & Static Pages
                </DropdownMenuItem>
                <DropdownMenuItem>Home v1</DropdownMenuItem>
                <DropdownMenuItem>Home v2</DropdownMenuItem>
                <DropdownMenuItem>Home v3</DropdownMenuItem>
                <DropdownMenuItem>Home Electronics</DropdownMenuItem>
                <DropdownMenuItem>Home Fashion</DropdownMenuItem>
                <DropdownMenuItem>Home Marketplace</DropdownMenuItem>
                <DropdownMenuItem>About Us</DropdownMenuItem>
                <DropdownMenuItem>Contact Us</DropdownMenuItem>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
                <DropdownMenuItem>Store Locator</DropdownMenuItem>
                <DropdownMenuItem>Careers</DropdownMenuItem>
                <DropdownMenuItem>Terms & Conditions</DropdownMenuItem>
                <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                <DropdownMenuItem>404 Page</DropdownMenuItem>
              </DropdownMenuGroup>

              {/* Shop */}
              <DropdownMenuGroup className="text-black/80">
                <DropdownMenuItem className="font-bold text-black/95">
                  Shop Pages
                </DropdownMenuItem>
                <DropdownMenuItem>Shop Grid</DropdownMenuItem>
                <DropdownMenuItem>Shop Grid Extended</DropdownMenuItem>
                <DropdownMenuItem>Shop List View</DropdownMenuItem>
                <DropdownMenuItem>Shop Left Sidebar</DropdownMenuItem>
                <DropdownMenuItem>Shop Right Sidebar</DropdownMenuItem>
                <DropdownMenuItem>Shop Fullwidth</DropdownMenuItem>
                <DropdownMenuItem>Shop Categories</DropdownMenuItem>
                <DropdownMenuItem>Shop Deals</DropdownMenuItem>
                <DropdownMenuItem>Flash Sale</DropdownMenuItem>
                <DropdownMenuItem>New Arrivals</DropdownMenuItem>
                <DropdownMenuItem>Best Sellers</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                <DropdownMenuItem>Compare Products</DropdownMenuItem>
              </DropdownMenuGroup>

              {/* Product */}
              <DropdownMenuGroup className="text-black/80">
                <DropdownMenuItem className="font-bold text-black/95">
                  Single Product Pages
                </DropdownMenuItem>
                <DropdownMenuItem>Product Default</DropdownMenuItem>
                <DropdownMenuItem>Product Extended</DropdownMenuItem>
                <DropdownMenuItem>Product Fullwidth</DropdownMenuItem>
                <DropdownMenuItem>Product With Video</DropdownMenuItem>
                <DropdownMenuItem>Product With 360° View</DropdownMenuItem>
                <DropdownMenuItem>Grouped Product</DropdownMenuItem>
                <DropdownMenuItem>Variable Product</DropdownMenuItem>
                <DropdownMenuItem>Digital Product</DropdownMenuItem>
                <DropdownMenuItem>Affiliate Product</DropdownMenuItem>
                <DropdownMenuItem>Product Reviews</DropdownMenuItem>
                <DropdownMenuItem>Product Q&A</DropdownMenuItem>
              </DropdownMenuGroup>

              {/* Blog */}
              <DropdownMenuGroup className="text-black/80">
                <DropdownMenuItem className="font-bold text-black/95">
                  Blog Posts
                </DropdownMenuItem>
                <DropdownMenuItem>Blog Classic</DropdownMenuItem>
                <DropdownMenuItem>Blog Grid</DropdownMenuItem>
                <DropdownMenuItem>Blog List</DropdownMenuItem>
                <DropdownMenuItem>Blog Masonry</DropdownMenuItem>
                <DropdownMenuItem>Blog With Sidebar</DropdownMenuItem>
                <DropdownMenuItem>Single Blog Post</DropdownMenuItem>
                <DropdownMenuItem>Author Page</DropdownMenuItem>
                <DropdownMenuItem>Blog Categories</DropdownMenuItem>
                <DropdownMenuItem>Tag Archive</DropdownMenuItem>
                <DropdownMenuItem>Latest News</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>{" "}
          </DropdownMenu>
        </li>
        <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
          Featured Brands
        </li>
        <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
          Trending Styles
        </li>
        <li className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
          Gift Cards
        </li>
      </ul>

      <p className="col-span-3 text-end text-black/70">
        Free Shipping on Orders $50+
      </p>
    </div>
  );
}
