import { Radio, MapPin, Phone, Mail, Share2, Tv, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-14 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-400">
                <Radio className="size-5 text-black" />
              </div>
              <div>
                <span className="block text-yellow-400 font-black text-xl">DCS FM</span>
                <span className="block text-zinc-500 text-xs tracking-widest uppercase">
                  100.50 Madiun
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Radio lokal Madiun yang mengudara 24 jam sehari, 7 hari seminggu.
              Informatif, menghibur, dan menginspirasi bersama komunitas Madiun.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Share2, label: "Instagram" },
                { icon: Tv, label: "Facebook" },
                { icon: PlayCircle, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-zinc-100 font-semibold mb-4">Navigasi</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Beranda", href: "/" },
                { label: "Artikel", href: "/artikel" },
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Kontak", href: "/kontak" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-500 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-zinc-100 font-semibold mb-4">Hubungi Kami</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                <MapPin className="size-4 text-yellow-400/70 shrink-0 mt-0.5" />
                <span>Jl. Contoh No. 1, Kota Madiun, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-zinc-500">
                <Phone className="size-4 text-yellow-400/70 shrink-0" />
                <span>(0351) 000-0000</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-zinc-500">
                <Mail className="size-4 text-yellow-400/70 shrink-0" />
                <span>info@dcsfm.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
          <span>&copy; {new Date().getFullYear()} DCS FM 100.50 Madiun. Hak cipta dilindungi.</span>
          <span>Dibuat dengan ❤ di Madiun</span>
        </div>
      </div>
    </footer>
  );
}
