import { OfferTabs } from "./offer-tabs";
import { SpecialOffer } from "./special-offer";

export function Offer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 lg:gap-2 px-6 md:px-0">
      <div className="col-span-1 md:col-span-3">
        <SpecialOffer />
      </div>
      <div className="col-span-1 md:col-span-6">
        <OfferTabs />
      </div>
    </div>
  );
}
