import { Clock, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { articles } from "@/lib/data";
import type { Article } from "@/lib/data";

export const categoryColors: Record<string, string> = {
  Berita: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Program: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Lifestyle: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Hiburan: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Kuliner: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Info: "bg-green-500/10 text-green-400 border-green-500/20",
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/artikel/${article.slug}`} className="group flex flex-col rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/5">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border ${
            categoryColors[article.category] ?? "bg-zinc-700 text-zinc-300 border-zinc-600"
          }`}
        >
          <Tag className="size-3" />
          {article.category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-bold text-zinc-100 leading-snug group-hover:text-yellow-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
          <div className="flex items-center gap-1.5 text-zinc-600 text-xs">
            <Clock className="size-3" />
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} baca</span>
          </div>
          <ChevronRight className="size-4 text-yellow-400/70 group-hover:text-yellow-400 transition-colors" />
        </div>
      </div>
    </Link>
  );
}

export default function ArticlesSection() {
  const [featured, ...rest] = articles;

  return (
    <section id="artikel" className="bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
              Artikel & Berita
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-100">
              Kabar Terbaru
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex border-zinc-700 text-zinc-400 hover:border-yellow-400/50 hover:text-yellow-400 bg-transparent"
          >
            <Link href="/artikel">
              Lihat Semua
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Featured article */}
        <div className="mb-8">
          <Link
            href={`/artikel/${featured.slug}`}
            className="group grid md:grid-cols-2 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/5"
          >
            <div className="relative overflow-hidden aspect-video md:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/20 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border bg-yellow-400/10 text-yellow-400 border-yellow-400/20">
                  <Tag className="size-3" />
                  {featured.category}
                </span>
                <span className="text-zinc-600 text-xs">Artikel Utama</span>
              </div>
              <h2 className="text-2xl font-black text-zinc-100 leading-snug group-hover:text-yellow-400 transition-colors">
                {featured.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                <div className="flex items-center gap-1.5 text-zinc-600 text-xs">
                  <Clock className="size-3" />
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime} baca</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-400 text-black text-xs font-semibold group-hover:bg-yellow-300 transition-colors">
                  Baca Selengkapnya
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button
            asChild
            variant="outline"
            className="border-zinc-700 text-zinc-400 hover:border-yellow-400/50 hover:text-yellow-400 bg-transparent"
          >
            <Link href="/artikel">
              Lihat Semua Artikel
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
