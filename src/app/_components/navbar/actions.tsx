import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { GitCompare, Handbag, Heart } from "lucide-react";
import Link from "next/link";

const ACTION_ITEMS = [
  {
    name: "Compare",
    action: (
      <Link href="/compare">
        <GitCompare size={20} />
      </Link>
    ),
  },
  {
    name: "Favorites",
    action: (
      <Link href="/favorites">
        <Heart size={20} />
      </Link>
    ),
  },
  {
    name: "Cart",
    action: <Handbag size={20} />,
  },
];

export function Actions() {
  return (
    <ul className="flex items-center justify-between gap-2">
      {ACTION_ITEMS.map((item, i) => (
        <li key={i}>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer flex items-center">
              {item.action}
            </TooltipTrigger>
            <TooltipContent>{item.name}</TooltipContent>
          </Tooltip>
        </li>
      ))}
      <li className="hidden lg:block text-base font-bold">$1785.00</li>
    </ul>
  );
}
