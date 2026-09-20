import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContentPage } from "../components/ContentPage";
import { socialLinks } from "../data/siteContent";
import { FacebookLogo, InstagramLogo, YouTubeLogo } from "../components/SocialLogos";
import galleryCommunity from "../assets/gallery-community.jpg";

export const Route = createFileRoute("/connect")({ component: ConnectPage });

function getPlatformIcon(label: string) {
  const normalized = label.toLowerCase();
  if (normalized.includes("instagram")) return <InstagramLogo className="h-10 w-10 shrink-0" />;
  if (normalized.includes("facebook")) return <FacebookLogo className="h-10 w-10 shrink-0" />;
  if (normalized.includes("youtube")) return <YouTubeLogo className="h-10 w-10 shrink-0" />;
  return null;
}

function ConnectPage() {
  return (
    <ContentPage
      heroImage={galleryCommunity}
      eyebrow="Connect with us"
      title="Stay close to the family."
      intro="Follow the official Gospel Pillars accounts for services, teaching, worship, ministry news, and community updates."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {socialLinks.map((social) => {
          const icon = getPlatformIcon(social.label);
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card group flex flex-col justify-between transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {icon}
                    <div>
                      <p className="eyebrow text-gold">Official account</p>
                      <h3 className="font-display text-2xl text-ink group-hover:text-brand">{social.label}</h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gold opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
                <p className="mt-4 text-sm leading-6 text-ink/75">{social.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                Connect on {social.label} →
              </span>
            </a>
          );
        })}
      </div>
    </ContentPage>
  );
}
