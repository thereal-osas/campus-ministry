import { createFileRoute } from "@tanstack/react-router";
import { ContentCardGrid, ContentPage } from "../components/ContentPage";
import { missingInfo } from "../data/siteContent";
import heroPraise from "../assets/hero-praise.jpg";

export const Route = createFileRoute("/units")({ component: UnitsPage });

function UnitsPage() {
  return <ContentPage heroImage={heroPraise} eyebrow="Church units" title="Find your place to serve." intro="Church units and departments help people grow, serve, and contribute to the life of the local church.">
    <ContentCardGrid cards={[{ title: "Official units directory", label: "Units", description: "[Add each approved unit name, its brief description, and its volunteer contact.]", children: <a href="/contact" className="button-primary mt-5">Ask about joining</a> }]} />
    <p className="mt-8 text-sm text-ink/55">{missingInfo} No unit names or volunteer contacts have been invented for this page.</p>
  </ContentPage>;
}
