import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Artikel", href: "/artikel" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-400/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-9 h-9 rounded bg-yellow-400">
            <Radio className="size-5 text-black" />
          </div>
          <div className="leading-tight">
            <span className="block text-yellow-400 font-black text-lg tracking-tight">
              DCS FM
            </span>
            <span className="block text-zinc-400 text-[10px] tracking-widest uppercase">
              100.50 Madiun
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-1.5 text-sm text-zinc-300 hover:text-yellow-400 transition-colors rounded-md hover:bg-yellow-400/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          size="sm"
          className="hidden md:inline-flex bg-yellow-400 text-black hover:bg-yellow-300 font-semibold"
        >
          Dengarkan Live
        </Button>

        {/* Mobile menu placeholder */}
        <button className="md:hidden text-zinc-300 hover:text-yellow-400 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
