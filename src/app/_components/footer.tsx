import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Facebook, Instagram, Github, Headset, TwitchIcon } from "lucide-react";

export default function Footer() {
  return (
    <Container className="py-12">
      <footer className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="grid-cols-1 lg:col-span-2 space-y-4">
          <Logo />

          <div className="py-0.5" />

          <div className="flex items-center gap-2">
            <Headset size={64} />
            <div className="space-y-0.5">
              <small className="text-sm">Got questions? Call us 24/7!</small>
              <p className="">(800) 8001-8588, (0600) 874 548</p>
            </div>
          </div>

          <div className="space-y-0.5">
            <p className="font-bold">Contact ino</p>
            <p>17 Princess Road, London, UK</p>
          </div>

          <div className="flex items-center gap-6">
            <Facebook />
            <TwitchIcon />
            <Instagram />
            <Github />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xl font-bold">Find it Fast</p>
          <ul className="space-y-1">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smartphones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>TV & Audio</li>
            <li>Gadgets</li>
            <li>Car Electronics & GPS</li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-bold">More Products</p>
          <ul className="space-y-1">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smartphones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>TV & Audio</li>
            <li>Gadgets</li>
            <li>Car Electronics & GPS</li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-bold">Customer Care</p>
          <ul className="space-y-1">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smartphones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>TV & Audio</li>
            <li>Gadgets</li>
            <li>Car Electronics & GPS</li>
          </ul>
        </div>
      </footer>
    </Container>
  );
}
