import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { ContentPage } from "../../components/ContentPage";
import { chapters } from "../../data/chapters";
import { officialLinks } from "../../data/siteContent";
import heroLocation from "../../assets/hero_location.jpeg";

export const Route = createFileRoute("/churches")({ component: ChurchesPage });

function ChurchesPage() {
  return (
    <ContentPage
      heroImage={heroLocation}
      eyebrow="Our churches & fellowships"
      title="Find a Gospel Pillars church or fellowship near you."
      intro="This directory is the working structure for every church, community, and campus fellowship operating under Nigeria 2 Division."
    >
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-brand/15 pb-6">
        <p className="text-lg text-ink/75">
          <strong>{chapters.length} location records</strong> currently listed
        </p>
        <a href={officialLinks.globalLocations} target="_blank" rel="noreferrer" className="button-primary">
          Global church locations
        </a>
      </div>

      <div className="content-card-grid">
        {chapters.map((chapter) => (
          <article key={chapter.id} className="content-card flex flex-col justify-between">
            <div>
              <p className="eyebrow text-gold">{chapter.region}</p>
              <h2 className="mt-3 font-display text-2xl text-ink">{chapter.name}</h2>
              <p className="mt-2 text-xs uppercase tracking-[.12em] text-brand-soft">
                {chapter.city} · {chapter.state}
              </p>
              <p className="mt-4 flex gap-2 text-sm leading-6 text-ink/70">
                <MapPin size={16} className="mt-1 shrink-0 text-gold" />
                <span className="break-words">{chapter.address}</span>
              </p>
              <p className="mt-3 flex gap-2 text-sm leading-6 text-ink/70">
                <Clock size={16} className="mt-1 shrink-0 text-gold" />
                <span>{chapter.serviceTime}</span>
              </p>
              <p className="mt-3 flex gap-2 text-sm leading-6 text-ink/70">
                <Phone size={16} className="mt-1 shrink-0 text-gold" />
                <span className="break-words">{chapter.contact}</span>
              </p>
            </div>

            <div className="mt-6 border-t border-brand/10 pt-4">
              <Link
                to="/churches/$chapterId"
                params={{ chapterId: chapter.id }}
                className="button-outline flex w-full items-center justify-center gap-2 text-center text-xs"
              >
                View chapter &amp; photos <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}
