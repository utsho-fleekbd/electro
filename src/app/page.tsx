import { Container } from "@/components/ui/container";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { MobileNavbar } from "./_components/navbar/mobile-navbar";

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
    </Container>
  );
}
