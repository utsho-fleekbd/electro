import { Logo } from "@/components/ui/logo";
import { SideBar } from "./side-bar";
import { SearchBar } from "./search-bar";
import { Actions } from "./actions";

export function MobileNavbar() {
  return (
    <nav className="flex items-center justify-between bg-primary px-6 py-4">
      <div className="flex items-center gap-2">
        <SideBar />
        <Logo />
      </div>
      <div className="flex items-center gap-2">
        <SearchBar />
        <Actions />
      </div>
    </nav>
  );
}
