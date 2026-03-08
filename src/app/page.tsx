import { Container } from "@/components/ui/container";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { MobileNavbar } from "./_components/navbar/mobile-navbar";
import { ProductBanner } from "./_components/product-banner";
import { Offer } from "./_components/offer";
import { ProductShowcase } from "./_components/product-showcase";
import { BestSeller } from "./_components/best-seller";
import { DiscountBanner } from "./_components/discount-banner";
import { RecentlyViewed } from "./_components/recently-viewed";

export default function HomePage() {
  return (
    <Container className="space-y-8">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <Hero />
      <ProductBanner />
      <Offer />
      <div className="py-3" />
      <ProductShowcase />
      <div className="py-3" />
      <BestSeller />
      <div className="py-3" />
      <DiscountBanner />
      <div className="py-3" />
      <RecentlyViewed />
    </Container>
  );
}
