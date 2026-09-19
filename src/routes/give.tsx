import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "../components/ContentPage";
import declaration from "../assets/declaration.png";

export const Route = createFileRoute("/give")({ component: GivePage });

function GivePage() {
  return <ContentPage heroImage={declaration} eyebrow="Give / partner" title="Partner with the work." intro="This page is ready for the division’s approved giving and partnership information.">
    <div className="content-card max-w-2xl"><p className="eyebrow text-gold">Giving information</p><h2 className="mt-3 font-display text-3xl text-ink">[Add approved giving or partnership details]</h2><p className="mt-4 text-sm leading-7 text-ink/70">[Add the approved account, platform, or partnership instructions here.]</p><a href="/contact" className="button-primary mt-6">Contact the division</a></div>
  </ContentPage>;
}
