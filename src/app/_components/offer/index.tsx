import { OfferTabs } from "./offer-tabs";
import { SpecialOffer } from "./special-offer";

export function Offer() {
  return (
    <div className="grid grid-cols-9 gap-2">
      <div className="col-span-3">
        <SpecialOffer />
      </div>
      <div className="col-span-6">
        <OfferTabs />
      </div>
    </div>
  );
}
