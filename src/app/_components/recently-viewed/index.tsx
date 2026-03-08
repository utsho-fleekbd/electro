import { Slider } from "./slider";

export function RecentlyViewed() {
  return (
    <div className="space-y-6">
      <div className="px-6 lg:px-0 relative pb-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b border-b-gray-400/65">
        <h2 className="text-2xl pb-1 lg:pb-0 border-b lg:border-none border-b-primary">
          Recently Viewed
        </h2>

        <div className="hidden lg:block absolute -bottom-0.5 left-0 w-48 h-0.5 bg-primary z-10"></div>
      </div>

      <Slider />
    </div>
  );
}
