import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "../components/ContentPage";
import { officialLinks } from "../data/siteContent";
import prophet from "../assets/prophet_official.png";
import apstBarney from "../assets/apst_barney_full.jpeg";

export const Route = createFileRoute("/leadership")({ component: LeadershipPage });

function LeadershipPage() {
  return <ContentPage heroImage={prophet} eyebrow="Leadership" title="Serving the Church and the next generation." intro="Meet the approved leadership profiles currently available for Gospel Pillars International and Nigeria 2 Division.">
    <div className="profile-grid">
      <article className="profile-card"><img src={prophet} alt="Prophet Isaiah Macwealth" /><div><p className="eyebrow text-gold">Senior Pastor · Gospel Pillars International</p><h2 className="mt-3 font-display text-3xl text-ink">Prophet Isaiah Macwealth</h2><p className="mt-4 text-sm leading-7 text-ink/70">A lover of Jesus, renowned author, philanthropist, and Senior Pastor of Gospel Pillars International Churches worldwide. He is also the founder of OneSound Revival Fellowship.</p><div className="mt-5 flex flex-wrap gap-4"><a href="https://isaiahmacwealth.org/" target="_blank" rel="noreferrer" className="button-primary">Learn more</a><a href={officialLinks.globalSite} target="_blank" rel="noreferrer" className="button-outline">GospelPillars.org</a></div></div></article>
      <article className="profile-card"><img src={apstBarney} alt="Apostle Barney Bashorun" /><div><p className="eyebrow text-gold">Nigeria 2 Division</p><h2 className="mt-3 font-display text-3xl text-ink">Apostle Barney Bashorun</h2><p className="mt-2 font-mono text-xs uppercase tracking-[.14em] text-brand-soft">Divisional Head</p><p className="mt-4 text-sm leading-7 text-ink/70">Apostle Barney Bashorun leads the churches, communities, and fellowships entrusted to Nigeria 2 Division, strengthening leaders and carrying the ministry’s vision into new communities.</p></div></article>
    </div>
  </ContentPage>;
}
