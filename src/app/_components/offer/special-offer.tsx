import Image from "next/image";
import controller from "./_assets/controller.jpg";

export function SpecialOffer() {
  return (
    <div className="p-4 rounded-xl border-2 border-primary w-full max-w-md mx-auto lg:mx-0 flex flex-col items-center gap-4">
      {/* Header */}
      <div className="w-full flex items-center justify-between text-center">
        <h3 className="text-3xl text-left tracking-tight">
          Special <br /> Offer
        </h3>
        <div className="rounded-full bg-primary p-5">
          <span className="text-xs">Save</span>
          <h3 className="text-xl font-bold">$120</h3>
        </div>
      </div>

      {/* Image */}
      <Image
        src={controller}
        alt="Product Image"
        width={400}
        height={400}
        className="aspect-square w-full h-auto object-cover"
      />

      {/* Product Info */}
      <h1 className="text-blue-800 font-bold max-w-64">
        Game Console Controller + USB 3.0 Cable
      </h1>

      <div className="flex gap-1">
        <p className="line-through text-lg">$99,00</p>
        <p className="text-red-600 text-3xl">$79,00</p>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="text-sm">
          Available: <span className="font-bold">6</span>
        </div>
        <div className="text-sm">
          Already Sold: <span className="font-bold">24</span>
        </div>
      </div>

      <div className="w-full h-5 relative bg-gray-300/90 rounded-4xl">
        <div className="absolute inset-0 w-1/4 h-full bg-primary z-10 rounded-4xl"></div>
      </div>

      <h3 className="text-lg font-thin">Hurry Up! Offer ends in:</h3>

      <div className="flex gap-px">
        <div className="flex flex-col justify-center items-center">
          <div className="size-16 bg-gray-300/90 text-3xl flex items-center justify-center rounded-xs">
            00
          </div>
          <span className="text-sm uppercase">hours</span>
        </div>
        <div className="text-3xl h-16 flex items-center justify-center">:</div>
        <div className="flex flex-col justify-center items-center">
          <div className="size-16 bg-gray-300/90 text-3xl flex items-center justify-center rounded-xs">
            00
          </div>
          <span className="text-sm uppercase">mins</span>
        </div>
        <div className="text-3xl h-16 flex items-center justify-center">:</div>
        <div className="flex flex-col justify-center items-center">
          <div className="size-16 bg-gray-300/90 text-3xl flex items-center justify-center rounded-xs">
            00
          </div>
          <span className="text-sm uppercase">secs</span>
        </div>
      </div>
    </div>
  );
}
