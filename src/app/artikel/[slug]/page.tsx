import { articles, getArticleBySlug } from "@/lib/data";
import { categoryColors } from "@/components/ArticlesSection";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, ArrowLeft, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — DCS FM`,
    description: article.excerpt,
  };
}

// Minimal markdown-like renderer for the body field
function renderBody(body: string) {
  return body.split("\n\n").map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return (
        <h3 key={i} className="text-xl font-bold text-zinc-100 mt-6 mb-2">
          {para.replace(/\*\*/g, "")}
        </h3>
      );
    }
    // Inline bold
    const parts = para.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j} className="text-zinc-100 font-bold">{part.replace(/\*\*/g, "")}</strong>;
      }
      return part;
    });
    if (para.startsWith("- ")) {
      return (
        <ul key={i} className="list-none space-y-1 my-3">
          {para.split("\n").map((line, j) => (
            <li key={j} className="flex items-start gap-2 text-zinc-400">
              <span className="mt-1.5 size-1.5 rounded-full bg-yellow-400 shrink-0" />
              {line.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-zinc-400 leading-relaxed">
        {parts}
      </p>
    );
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero image */}
      <div className="relative h-72 sm:h-96 overflow-hidden bg-zinc-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 -mt-24 relative z-10 pb-20">
        {/* Back */}
        <Link
          href="/artikel"
          className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-yellow-400 transition-colors text-sm mb-8"
        >
          <ArrowLeft className="size-4" />
          Semua Artikel
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold border ${
              categoryColors[article.category] ?? "bg-zinc-700 text-zinc-300 border-zinc-600"
            }`}
          >
            <Tag className="size-3" />
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-zinc-600 text-xs">
            <Clock className="size-3" />
            {article.date} · {article.readTime} baca
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-100 leading-tight mb-6">
          {article.title}
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-yellow-400 pl-4 mb-8 italic">
          {article.excerpt}
        </p>

        {/* Divider */}
        <div className="border-t border-zinc-800 mb-8" />

        {/* Body */}
        <div className="space-y-4">
          {renderBody(article.body)}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-zinc-100">Artikel Terkait</h2>
              <Link
                href="/artikel"
                className="flex items-center gap-1 text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
              >
                Lihat Semua <ChevronRight className="size-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artikel/${a.slug}`}
                  className="group rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-yellow-400/30 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-zinc-600 mb-1">{a.date}</p>
                    <h3 className="text-sm font-semibold text-zinc-300 group-hover:text-yellow-400 transition-colors line-clamp-2">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
