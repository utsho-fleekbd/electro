"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="bg-primary">
      <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-black">
        <div className="flex items-center gap-3">
          <Send size={44} strokeWidth={1.3} />
          <h3 className="text-xl">Sign up to Newsletter</h3>
        </div>

        <p>
          ...and receive{" "}
          <span className="font-bold">$200 coupon for first shopping.</span>
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed");
          }}
          className="relative w-full md:w-1/3"
        >
          <Input
            className="bg-white rounded-full p-5"
            placeholder="Enter your email"
          />
          <Button className="absolute right-0 -bottom-1/2 -translate-y-1/2 bg-slate-900 rounded-none rounded-r-full h-full px-5 hover:bg-gray-800 transition-colors duration-300">
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
}
