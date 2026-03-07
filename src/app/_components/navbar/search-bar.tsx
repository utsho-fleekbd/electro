"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SearchBar() {
  const [searchCategory, setSearchCategory] = useState("All Categories");

  return (
    <div className="relative w-full">
      <Input
        placeholder="Search for Product"
        className="text-black/50 w-full rounded-full border-2 border-primary p-5"
      />

      <div className="h-full absolute top-1/2 right-0 -translate-y-1/2 text-sm text-black/50 flex items-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="flex items-center gap-2">
              {searchCategory} <ChevronDown size={16} />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup className="text-black/50">
              <DropdownMenuItem
                onClick={() => setSearchCategory("All Categories")}
              >
                All Categories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchCategory("Two")}>
                Two
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchCategory("Three")}>
                Three
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchCategory("Four")}>
                Four
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="default"
          className="h-full px-5 rounded-none rounded-r-full"
        >
          <Search size={32} />
        </Button>
      </div>
    </div>
  );
}
