import { createFileRoute } from "@tanstack/react-router";
import { ContentCardGrid, ContentPage } from "../components/ContentPage";
import { missingInfo } from "../data/siteContent";
import events from "../assets/events.jpeg"

export const Route = createFileRoute("/events")({ component: EventsPage });

function EventsPage() {
  return <ContentPage heroImage={events} eyebrow="Events" title="Gatherings that move the mission forward." intro="Use this calendar to publish confirmed programmes, conferences, special services, and divisional activities.">
    <ContentCardGrid cards={[{ title: "Upcoming programmes", description: "[Add confirmed programme name, date, venue, and registration link.]", label: "Calendar" }, { title: "Conferences and special services", description: "[Add confirmed conference or special-service information here.]", label: "Programme details" }]} />
  </ContentPage>;
}
