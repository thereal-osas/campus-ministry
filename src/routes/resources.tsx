import { createFileRoute } from "@tanstack/react-router";
import { ContentCardGrid, ContentPage } from "../components/ContentPage";
import { resources } from "../data/siteContent";
import resourcesImage from "../assets/resources.png";

export const Route = createFileRoute("/resources")({ component: ResourcesPage });

function ResourcesPage() {
  return <ContentPage heroImage={resourcesImage} eyebrow="Resources / media" title="Keep growing beyond the gathering." intro="Access approved devotional, teaching, book, music, audio, and live-service resources from Gospel Pillars International and its ministry platforms.">
    <ContentCardGrid cards={resources.map((resource) => ({ title: resource.label, description: resource.description, href: resource.href, label: "Official resource", image: resource.image || resourcesImage }))} />
  </ContentPage>;
}
