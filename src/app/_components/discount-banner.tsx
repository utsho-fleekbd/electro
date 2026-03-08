import { Button } from "@/components/ui/button";

export function DiscountBanner() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-200 flex items-center justify-center">
      <div className="flex items-center gap-6">
        <h2 className="uppercase text-2xl font-light">
          Shop and <span className="font-bold">save big</span> on hottest
          tablets
        </h2>
        <Button className="px-10 h-20 uppercase font-light flex-col text-black gap-0">
          <p>starting at</p>
          <p className="text-xl font-bold flex items-start">
            $<span className="text-3xl">79</span>99
          </p>
        </Button>
      </div>
    </div>
  );
}
