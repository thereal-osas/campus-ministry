import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "../components/ContentPage";
import galleryBible from "../assets/gallery-bible.jpg";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return <ContentPage heroImage={galleryBible} eyebrow="Privacy policy" title="Your information should be handled with care." intro="This page explains the basic privacy approach for this divisional website.">
    <div className="prose-content"><h2>Information we receive</h2><p>When you contact the division through a form or email, we may receive the information you choose to provide, such as your name, email address, church or community, and message.</p><h2>How information is used</h2><p>Information is used to respond to enquiries, provide church information, and support ministry communication. We do not ask for sensitive information through this website.</p><h2>Third-party links</h2><p>This website links to official Gospel Pillars and ministry platforms. Those websites have their own privacy practices, which should be reviewed when you visit them.</p><h2>Updates</h2><p>This policy will be expanded when the division confirms its appointed data contact and retention procedures.</p></div>
  </ContentPage>;
}
