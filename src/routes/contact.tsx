import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { Reveal } from "../components/Reveal";
import heroPraise from "../assets/hero-praise.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gospel Pillars Campus Ministry" },
      {
        name: "description",
        content:
          "Contact Gospel Pillars Campus Ministry or ask about a church or fellowship near you.",
      },
      {
        property: "og:title",
        content: "Contact Gospel Pillars Campus Ministry",
      },
      {
        property: "og:description",
        content: "Ask about a church, fellowship, or starting a new chapter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactDetails: Array<[LucideIcon, string, string]> = [
  [Mail, "Email", "[Add confirmed divisional email]"],
  [Phone, "Phone", "Add your phone number"],
  [MapPin, "Location", "Nigeria · serving campuses nationwide"],
];

function ContactPage() {
  return (
    <>
      <section
        className="page-intro"
        style={{
          backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--brand) 88%, transparent), color-mix(in oklab, var(--brand) 38%, transparent)), url(${heroPraise})`,
        }}
      >
        <div className="site-container">
          <p className="eyebrow text-gold">Contact</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
            Your community could be the next chapter.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sand/70">
            Ask about a church or fellowship near you, arrange a visit, or tell
            us you would like to help start something new.
          </p>
        </div>
      </section>
      <section className="bg-sand py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-gold">Let’s talk</p>
            <h2 className="mt-4 font-display text-4xl text-ink">
              We would love to hear from you.
            </h2>
            <div className="mt-9 grid gap-6">
              {contactDetails.map(([Icon, label, value]) => (
                <div
                  key={label}
                  className="flex gap-4 border-b border-brand/15 pb-6"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-sand">
                    <Icon size={17} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-gold">
                      {label}
                    </p>
                    <p className="mt-1 text-ink/75">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <form
              className="rounded-lg border border-brand/15 bg-sand-deep p-6 md:p-9"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-ink">
                  Full name
                  <input
                    className="h-12 rounded-md border border-brand/20 bg-sand px-4 outline-none focus:border-gold"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm text-ink">
                  Email address
                  <input
                    type="email"
                    className="h-12 rounded-md border border-brand/20 bg-sand px-4 outline-none focus:border-gold"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-6 grid gap-2 text-sm text-ink">
                Church, community, or campus
                <input
                  className="h-12 rounded-md border border-brand/20 bg-sand px-4 outline-none focus:border-gold"
                  placeholder="Your campus"
                />
              </label>
              <label className="mt-6 grid gap-2 text-sm text-ink">
                How can we help?
                <textarea
                  className="min-h-36 resize-y rounded-md border border-brand/20 bg-sand p-4 outline-none focus:border-gold"
                  placeholder="Tell us what you would like to know"
                />
              </label>
              <button type="submit" className="mt-7 button-primary">
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
