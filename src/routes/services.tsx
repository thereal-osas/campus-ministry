import { createFileRoute } from "@tanstack/react-router";
import { ContentCardGrid, ContentPage } from "../components/ContentPage";
import { chapters } from "../data/chapters";
import heroStudy from "../assets/hero-study.jpg";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return <ContentPage heroImage={heroStudy} eyebrow="Services" title="Worship, teaching, and life together." intro="Service information is organized by location so each church can publish its current times, address, and directions.">
    <ContentCardGrid cards={[{ title: "Sunday worship", label: "Weekly", description: "[Add confirmed Sunday service days, times, addresses, and directions by location.]", children: <p className="mt-4 font-display text-xl text-brand">[Add Sunday details]</p> }, { title: "Midweek service", label: "Weekly", description: "[Add confirmed midweek gathering days, times, addresses, and directions by location.]", children: <p className="mt-4 font-display text-xl text-brand">[Add midweek details]</p> }]} />
    <div className="mt-12"><h2 className="font-display text-3xl text-ink">Location service information</h2><div className="mt-6 grid gap-3">{chapters.map((chapter) => <div key={chapter.id} className="flex flex-wrap justify-between gap-3 border-b border-brand/15 py-4 text-sm"><span className="font-semibold text-ink">{chapter.name}</span><span className="text-ink/65">{chapter.serviceTime} · {chapter.address}</span></div>)}</div></div>
  </ContentPage>;
}
