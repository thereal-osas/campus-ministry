import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ContentPage } from "../components/ContentPage";
import { chapters } from "../data/chapters";
import { officialLinks, missingInfo } from "../data/siteContent";
import heroWorship from "../assets/hero-worship.jpg";

export const Route = createFileRoute("/churches")({ component: ChurchesPage });

function ChurchesPage() {
  return <ContentPage heroImage={heroWorship} eyebrow="Our churches" title="Find a Gospel Pillars church or fellowship near you." intro="This directory is the working structure for every church, community, and campus fellowship operating under Nigeria 2 Division.">
    <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-brand/15 pb-6"><p className="text-lg text-ink/75">{chapters.length} location records currently listed</p><a href={officialLinks.globalLocations} target="_blank" rel="noreferrer" className="button-primary">Global church locations</a></div>
    <div className="content-card-grid">{chapters.map((chapter) => <article key={chapter.id} className="content-card"><p className="eyebrow text-gold">{chapter.region}</p><h2 className="mt-3 font-display text-2xl text-ink">{chapter.name}</h2><p className="mt-2 text-xs uppercase tracking-[.12em] text-brand-soft">{chapter.city} · {chapter.state}</p><p className="mt-4 flex gap-2 text-sm leading-6 text-ink/70"><MapPin size={16} className="mt-1 shrink-0 text-gold" />{chapter.address}</p><p className="mt-3 text-sm text-ink/70"><strong>Service:</strong> {chapter.serviceTime}</p><a href={`mailto:${chapter.contact}`} className="mt-5 inline-flex text-sm font-semibold text-brand">{chapter.contact}</a></article>)}</div>
    <p className="mt-10 text-sm text-ink/55">{missingInfo} Please confirm each local church’s official name, address, service time, and phone number before public launch.</p>
  </ContentPage>;
}
