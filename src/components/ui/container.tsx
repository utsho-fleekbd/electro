import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
}
