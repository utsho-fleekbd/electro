import { Logo } from "@/components/ui/logo";
import { SideBar } from "./side-bar";
import { SearchBar } from "./search-bar";
import { Actions } from "./actions";

export function Navbar() {
  return (
    <nav className="grid grid-cols-12 gap-6 items-center">
      <div className="col-span-3 flex items-center justify-between">
        <Logo />
        <SideBar />
      </div>
      <div className="col-span-7">
        <SearchBar />
      </div>
      <div className="col-span-2">
        <Actions />
      </div>
    </nav>
  );
}
