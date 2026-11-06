import Link from "next/link";
import Image from "next/image";
import Header from "@/components/landing/Header";
import SubHeroSection from "@/components/landing/SubHeroSection";
import Footer from "@/components/landing/Footer";
import { getAllPosts } from "@/lib/blog";
import Script from "next/script";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Zedger Blog",
  description: "Tips and insights for managing shared expenses",
  url: "https://www.tryzedger.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Zedger",
    logo: {
      "@type": "ImageObject",
      url: "https://www.tryzedger.com/images/logo.png",
    },
  },
};

export const POSTS_PER_PAGE = 9;

const pageHref = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

export default function BlogList({ page }: { page: number }) {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <main className="min-h-screen overflow-hidden">
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header />
      <SubHeroSection
        title="Blog"
        subtitle="Tips, insights, and guides for managing shared expenses effectively."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-coca-gray-light rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {post.coverImage && (
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readingTime}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {post.authorImage && (
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          )}
                          <span className="text-xs text-muted-foreground">
                            {post.author}
                          </span>
                        </div>
                        <time className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
                  {page > 1 ? (
                    <Link
                      href={pageHref(page - 1)}
                      rel="prev"
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground bg-coca-gray-light rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground bg-coca-gray-light rounded-lg opacity-50 cursor-not-allowed">
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </span>
                  )}

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
                      n === page ? (
                        <span
                          key={n}
                          aria-current="page"
                          className="w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg bg-primary text-primary-foreground"
                        >
                          {n}
                        </span>
                      ) : (
                        <Link
                          key={n}
                          href={pageHref(n)}
                          className="w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg bg-coca-gray-light text-foreground hover:bg-gray-200 transition-colors"
                        >
                          {n}
                        </Link>
                      )
                    )}
                  </div>

                  {page < totalPages ? (
                    <Link
                      href={pageHref(page + 1)}
                      rel="next"
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground bg-coca-gray-light rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground bg-coca-gray-light rounded-lg opacity-50 cursor-not-allowed">
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </nav>
              )}

              {/* Post count */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Showing {start + 1}-{Math.min(start + POSTS_PER_PAGE, allPosts.length)} of {allPosts.length} posts
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
