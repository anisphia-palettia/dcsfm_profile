"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Contoh No. 1, Kota Madiun\nJawa Timur 63100",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "(0351) 000-0000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dcsfm.id",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin–Jumat: 08.00–17.00 WIB\nSiaran: 24 jam non-stop",
  },
];

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ganti dengan logika pengiriman form yang sebenarnya
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="bg-black border-b border-zinc-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Hubungi Kami
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-100 mb-4">Kontak</h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Ada pertanyaan, saran, atau ingin berkolaborasi? Kami senang mendengar dari Anda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-zinc-100">Informasi Kontak</h2>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-4 p-5 rounded-xl bg-zinc-900 border border-zinc-800"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 shrink-0">
                    <Icon className="size-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-semibold tracking-wide uppercase mb-1">
                      {label}
                    </p>
                    <p className="text-zinc-300 text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick contact */}
            <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
              <p className="text-green-400 font-semibold text-sm mb-1">Request Lagu via WhatsApp</p>
              <p className="text-zinc-500 text-sm">
                Kirim nama lagu dan artis ke{" "}
                <span className="text-zinc-300 font-medium">0812-0000-0000</span> dan kami akan
                putarkan di siaran berikutnya!
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-zinc-100 mb-6">Kirim Pesan</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center rounded-xl bg-zinc-900 border border-zinc-800">
                <CheckCircle className="size-12 text-yellow-400" />
                <h3 className="text-xl font-bold text-zinc-100">Pesan Terkirim!</h3>
                <p className="text-zinc-500 text-sm max-w-xs">
                  Terima kasih telah menghubungi kami. Tim DCS FM akan membalas dalam 1–2 hari kerja.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                      Nama
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nama lengkap"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                    Subjek
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                  >
                    <option value="" disabled>Pilih subjek...</option>
                    <option>Kerja Sama / Iklan</option>
                    <option>Kirim Lagu</option>
                    <option>Saran Program</option>
                    <option>Pertanyaan Umum</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold"
                >
                  <Send className="size-4" />
                  Kirim Pesan
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
