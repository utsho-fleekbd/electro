import { Container } from "@/components/ui/container";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";

export default function HomePage() {
  return (
    <Container className="space-y-8">
      <Navbar />
      <Hero />
    </Container>
  );
}
