import { Locate, Truck, DollarSign, User, ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";

const TOP_BAR_ITEMS = [
  { icon: Locate, text: "Store Locator" },
  { icon: Truck, text: "Track Your Order" },
  {
    icon: DollarSign,
    text: (
      <DropdownMenu>
        <DropdownMenuTrigger openOnHover>
          <span className="flex items-center gap-2">
            Dollar (US) <ChevronDown size={16} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup className="text-black/70">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Dutch</DropdownMenuItem>
            <DropdownMenuItem>Spanish</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    icon: User,
    text: (
      <p>
        Register <span>or</span> Sign in
      </p>
    ),
  },
];

export function TopBar() {
  return (
    <div className="py-2 border-b border-b-black/15 text-sm">
      <Container className="flex items-center justify-between">
        <h2 className="text-slate-800">
          Welcome to Worldwide Electronics Store
        </h2>

        <ul className="flex items-center gap-2">
          {TOP_BAR_ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 tracking-tighter pr-2 border-r-2 border-r-black/20 last:border-none"
            >
              <item.icon size={16} />
              {item.text}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
