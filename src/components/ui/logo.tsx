import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="font-black text-4xl lg:text-5xl tracking-tighter">
      electro<span className="text-primary">.</span>
    </Link>
  );
}
