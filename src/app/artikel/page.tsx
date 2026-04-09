import { articles } from "@/lib/data";
import { ArticleCard, categoryColors } from "@/components/ArticlesSection";
import { Tag } from "lucide-react";

const categories = ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function ArtikelPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="bg-black border-b border-zinc-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Artikel & Berita
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-100 mb-4">
            Semua Artikel
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Informasi, hiburan, dan cerita terbaru dari DCS FM dan Kota Madiun.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
                cat === "Semua"
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : (categoryColors[cat] ?? "bg-zinc-800 text-zinc-400 border-zinc-700") +
                    " hover:border-yellow-400/50"
              }`}
            >
              {cat !== "Semua" && <Tag className="size-3" />}
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
