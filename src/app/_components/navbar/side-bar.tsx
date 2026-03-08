import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Logo } from "@/components/ui/logo";
import { SideBar as SideBarContent } from "../hero/side-bar";

export function SideBar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="cursor-pointer">
        <Menu size={24} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-row items-center justify-between">
          <DrawerTitle>
            <Logo />
          </DrawerTitle>
          <DrawerClose>
            <Button variant="ghost">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <SideBarContent />
      </DrawerContent>
    </Drawer>
  );
}
