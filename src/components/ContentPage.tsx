import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export type ContentCard = {
  title: string;
  description: string;
  href?: string;
  label?: string;
  children?: ReactNode;
  image?: string;
};

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  children: ReactNode;
};

export function ContentPage({ eyebrow, title, intro, heroImage, children }: ContentPageProps) {
  return (
    <>
      <section className="page-intro" style={{ backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--brand) 90%, transparent), color-mix(in oklab, var(--brand) 46%, transparent)), url(${heroImage})` }}>
        <div className="site-container">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl leading-tight md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sand/75">{intro}</p>
        </div>
      </section>
      <main className="bg-sand py-20 md:py-28">
        <div className="site-container">{children}</div>
      </main>
    </>
  );
}

export function ContentCardGrid({ cards }: { cards: ContentCard[] }) {
  return (
    <div className="content-card-grid">
      {cards.map((card) => (
        <article key={card.title} className="content-card">
          {card.image && (
            <div className="content-card-media">
              <img src={card.image} alt="" className="content-card-image" />
            </div>
          )}
          <div className="content-card-body">
            {card.label && <p className="eyebrow text-gold">{card.label}</p>}
            <h2 className="mt-3 font-display text-2xl text-ink">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/70">{card.description}</p>
            {card.children}
            {card.href && (
              <a href={card.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Learn more <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
