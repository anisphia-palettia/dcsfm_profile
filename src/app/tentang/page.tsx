import { team } from "@/lib/data";
import { Radio, Target, Heart, Zap } from "lucide-react";

const milestones = [
  { year: "2006", label: "Pertama kali mengudara di 100.50 MHz" },
  { year: "2010", label: "Ekspansi studio dan penambahan tim penyiar" },
  { year: "2015", label: "Peluncuran streaming online pertama" },
  { year: "2020", label: "Renovasi studio dengan teknologi digital terbaru" },
  { year: "2026", label: "Merayakan 20 tahun mengudara bersama Madiun" },
];

const values = [
  {
    icon: Target,
    title: "Informatif",
    desc: "Menyajikan berita dan informasi yang akurat, terpercaya, dan relevan bagi warga Madiun.",
  },
  {
    icon: Heart,
    title: "Dekat di Hati",
    desc: "Menjadi teman setia pendengar di setiap momen — pagi, siang, sore, hingga malam.",
  },
  {
    icon: Zap,
    title: "Menginspirasi",
    desc: "Menghadirkan konten yang memotivasi, menghibur, dan memberikan nilai tambah bagi komunitas.",
  },
];

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <div className="bg-black border-b border-zinc-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-yellow-400 mx-auto mb-6">
            <Radio className="size-10 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-100 mb-4">
            Tentang DCS FM
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            DCS FM 100.50 MHz adalah radio lokal Madiun yang telah mengudara selama dua dekade.
            Kami hadir 24 jam sehari, 7 hari seminggu, untuk menemani dan menginspirasi warga Madiun.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* Values */}
        <section>
          <h2 className="text-2xl font-black text-zinc-100 mb-8">Nilai Kami</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 mb-4">
                  <Icon className="size-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-black text-zinc-100 mb-8">Perjalanan Kami</h2>
          <div className="relative pl-6 border-l border-zinc-800 space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[1.8rem] flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 border-2 border-yellow-400">
                  <div className="size-2 rounded-full bg-yellow-400" />
                </div>
                <p className="text-yellow-400 text-xs font-bold tracking-widest mb-1">{m.year}</p>
                <p className="text-zinc-300 font-medium">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-2xl font-black text-zinc-100 mb-8">Tim Kami</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 transition-colors text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-2 border-zinc-700 group-hover:border-yellow-400/50 transition-colors"
                  />
                </div>
                <h3 className="font-bold text-zinc-100 mb-0.5">{member.name}</h3>
                <p className="text-yellow-400 text-xs font-semibold tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-zinc-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "20+", label: "Tahun Mengudara" },
            { value: "24/7", label: "Siaran Non-Stop" },
            { value: "100K+", label: "Pendengar Setia" },
            { value: "500+", label: "Musisi Lokal Didukung" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center"
            >
              <p className="text-3xl font-black text-yellow-400 mb-1">{stat.value}</p>
              <p className="text-zinc-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
