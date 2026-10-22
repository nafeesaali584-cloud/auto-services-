import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import { getPost, posts, blogCategories } from "@/data/blog";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img } from "@/data/images";
import { site, waMessages, disclaimers } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer, YellowButton, WhatsAppButton } from "@/components/site/primitives";

const dateFmt = (d) =>
  new Date(d).toLocaleDateString("en-AE", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  usePageMeta(
    post ? `${post.title} | Apex Auto Services Dubai` : "Article Not Found | Apex Auto Services Dubai",
    post
      ? `${post.excerpt} Written by the technicians at Apex Auto Services, Al Quoz Industrial 4, Dubai.`
      : "This article could not be found. Browse the technical automotive blog from Apex Auto Services, Al Quoz Industrial 4, Dubai."
  );

  if (!post) {
    return (
      <section className="bg-ink bg-blueprint">
        <div className="mx-auto max-w-3xl px-5 py-32 text-center lg:px-10">
          <h1 className="text-3xl text-white">Article not found</h1>
          <p className="mt-4 text-white/70">We could not find that guide. Browse all {posts.length} technical articles.</p>
          <div className="mt-8 flex justify-center">
            <YellowButton to="/blog">All articles</YellowButton>
          </div>
        </div>
      </section>
    );
  }

  const crumb = [{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.category }];
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shown = related.length ? related : fallback;

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema(crumb),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            articleSection: post.category,
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name },
            mainEntityOfPage: `https://www.apexauto.ae/blog/${post.slug}`,
          },
        ]}
      />

      <PageHero
        crumb={crumb}
        eyebrow={post.category}
        title={post.title}
        sub={post.excerpt}
        image={img.diagnostics}
        imageAlt="Diagnostic equipment in use at Apex Auto Services workshop in Al Quoz, Dubai"
        primaryCta={{ to: "/appointment", label: "Book Free Inspection" }}
        waMessage={waMessages.service(post.category)}
      />

      <section className="border-b border-white/10 bg-ink-deep">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-6 px-5 py-5 lg:px-10">
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/55">
            <CalendarDays className="h-3.5 w-3.5 text-gear" /> {dateFmt(post.date)}
          </span>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/55">
            <Clock className="h-3.5 w-3.5 text-gear" /> {post.readTime}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/55">
            By Apex Auto Technical Team
          </span>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.7fr)]">
            <Reveal>
              <article className="max-w-3xl">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="mt-12 font-heading text-2xl font-extrabold leading-tight tracking-tight text-ink">
                        {children}
                      </h2>
                    ),
                    p: ({ children }) => (
                      <p className="mt-5 text-[15.5px] leading-[1.75] text-copymuted">{children}</p>
                    ),
                    ul: ({ children }) => <ul className="mt-5 space-y-3">{children}</ul>,
                    li: ({ children }) => (
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed text-copymuted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gear" />
                        <span>{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => <strong className="font-bold text-ink">{children}</strong>,
                    a: ({ children, href }) => (
                      <Link to={href || "/"} className="font-semibold text-ink underline decoration-gear decoration-2 underline-offset-4">
                        {children}
                      </Link>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>

                <div className="mt-14 flex flex-wrap items-center gap-3 rounded-2xl border border-black/[0.08] bg-stone-warm p-6">
                  <p className="flex-1 text-[14px] leading-relaxed text-copymuted">
                    Recognised your car in this guide? Book a free inspection — free upon approval of your repair
                    estimate — and we will confirm the fault with measurements before quoting.
                  </p>
                  <YellowButton to="/appointment">Book Free Inspection</YellowButton>
                  <WhatsAppButton message={waMessages.service(post.category)} label="Ask a technician" />
                </div>

                <div className="mt-8 space-y-2">
                  <Disclaimer tone="light">{disclaimers.diagnostic}</Disclaimer>
                  <Disclaimer tone="light">{disclaimers.pickup}</Disclaimer>
                </div>
              </article>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.06}>
                <LeadForm
                  source={`blog-${post.slug}`}
                  heading="Book A Diagnostic"
                  eyebrow="60-Minute Response"
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-black/[0.08] bg-stone-warm p-6">
                  <Eyebrow tone="light">Keep Reading</Eyebrow>
                  <ul className="mt-5 space-y-4">
                    {shown.map((p) => (
                      <li key={p.slug}>
                        <Link to={`/blog/${p.slug}`} className="group block">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-gear">
                            {p.category}
                          </span>
                          <p className="mt-1.5 font-heading text-[14px] font-bold leading-snug text-ink group-hover:text-ink/70">
                            {p.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/blog"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-ink hover:text-ink/60"
                  >
                    All {posts.length} guides <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="rounded-2xl border border-black/[0.08] bg-white p-6">
                  <Eyebrow tone="light">Browse Categories</Eyebrow>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {blogCategories.map((c) => (
                      <Link
                        key={c}
                        to="/blog"
                        className="rounded-full border border-black/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ink/60 hover:border-gear hover:text-ink"
                      >
                        {c}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}