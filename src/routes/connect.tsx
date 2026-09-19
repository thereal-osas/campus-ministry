import { createFileRoute } from "@tanstack/react-router";
import { ContentCardGrid, ContentPage } from "../components/ContentPage";
import { socialLinks } from "../data/siteContent";
import galleryCommunity from "../assets/gallery-community.jpg";

export const Route = createFileRoute("/connect")({ component: ConnectPage });

function ConnectPage() {
  return <ContentPage heroImage={galleryCommunity} eyebrow="Connect with us" title="Stay close to the family." intro="Follow the official Gospel Pillars accounts for services, teaching, worship, ministry news, and community updates.">
    <ContentCardGrid cards={socialLinks.map((social) => ({ title: social.label, description: social.description, href: social.href, label: "Official account" }))} />
  </ContentPage>;
}
