import { Slider } from "./slider";

export function BestSeller() {
  return (
    <div className="space-y-6">
      <div className="px-6 lg:px-0 relative pb-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b border-b-gray-400/65">
        <h2 className="text-2xl pb-1 lg:pb-0 border-b lg:border-none border-b-primary">
          Bestsellers
        </h2>

        <ul className="flex w-full lg:w-auto items-center gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          <li className="shrink-0 py-1.5 px-5 rounded-full border border-primary hover:bg-primary font-bold transition-colors duration-300 cursor-pointer">
            Top 20
          </li>

          <li className="shrink-0 cursor-pointer hover:font-bold transition-all duration-300">
            Phones & Tablets
          </li>

          <li className="shrink-0 cursor-pointer hover:font-bold transition-all duration-300">
            Laptops & Computers
          </li>

          <li className="shrink-0 cursor-pointer hover:font-bold transition-all duration-300">
            Video Cameras
          </li>
        </ul>

        <div className="hidden lg:block absolute -bottom-0.5 left-0 w-32 h-0.5 bg-primary z-10"></div>
      </div>

      <Slider />
    </div>
  );
}
