import { SideBar } from "./side-bar";
import { Slider } from "./slider";
import { TopBar } from "./top-bar";

export function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <TopBar />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <SideBar />
          </div>

          <div className="col-span-9">
            <Slider />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:hidden">
        <Slider />
      </div>
    </>
  );
}
