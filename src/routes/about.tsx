import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import heroStudy from "../assets/hero-study.jpg";
import galleryChoir from "../assets/gallery-choir.jpg";
import prophetOfficial from "../assets/prophet_official.png";
// import galleryCommunity from "../assets/gallery-community.jpg";
import apstBarney from "../assets/apst_barney_cropped.jpeg";
import { officialLinks } from "../data/siteContent";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gospel Pillars Campus Ministry" },
      {
        name: "description",
        content:
          "Learn about the vision, leadership, and chapters of Gospel Pillars Campus Ministry (Nigeria 2 Division) , a church family growing through worship, teaching, and spiritual transformation.",
      },
      {
        property: "og:title",
        content: "About Gospel Pillars Campus Ministry",
      },
      {
        property: "og:description",
        content:
          "A church family rooted in worship, teaching, and spiritual transformation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section
        className="page-intro"
        style={{
          backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--brand) 88%, transparent), color-mix(in oklab, var(--brand) 38%, transparent)), url(${heroStudy})`,
        }}
      >
        <div className="site-container">
          <p className="eyebrow text-gold">About us</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
            Building pillars of faith in churches, communities, and campuses.
          </h1>
        </div>
      </section>
      <section className="bg-sand py-20 md:py-28">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img
              src={heroStudy}
              alt="Gospel Pillars members studying the Bible together"
              width={1920}
              height={1088}
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow text-gold">Our calling</p>
            <h2 className="mt-4 font-display text-4xl text-ink">
              A church family growing through worship, teaching, and spiritual
              transformation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Gospel Pillars is more than a church. It is a movement of people
              learning to know Jesus, live the Gospel, and make room for God to
              transform communities.
            </p>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              Our churches and campus fellowships carry that same heartbeat
              through Scripture, prayer, worship, friendship, and purposeful
              service.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="bg-sand-deep py-20 md:py-28">
        <div className="site-container">
          <p className="eyebrow text-gold">Vision, mission &amp; purpose</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl text-ink md:text-5xl">A global church family rooted in the presence of God.</h2>
          <div className="content-card-grid mt-12">
            <article className="content-card"><p className="eyebrow text-gold">Vision</p><p className="mt-3 text-sm leading-7 text-ink/70">To reveal JEHOVAH as Almighty — all seeing, all knowing and all powerful — and YESHUA His Son as the only way to God and to Salvation.</p></article>
            <article className="content-card"><p className="eyebrow text-gold">Mission</p><p className="mt-3 text-sm leading-7 text-ink/70">Holiness, sanctification and consecration to God.</p></article>
            <article className="content-card"><p className="eyebrow text-gold">Purpose</p><p className="mt-3 text-sm leading-7 text-ink/70">To reveal the knowledge of the glory of God to the nations as the waters cover the seas, leading to the restoration of the fear of God and the salvation of this Generation.</p></article>
          </div>
          <a href={officialLinks.globalSite} target="_blank" rel="noreferrer" className="button-primary mt-10">Visit GospelPillars.org</a>
        </div>
      </section>
      <section className="bg-brand py-20 md:py-28">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-gold">Leadership</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl text-sand md:text-5xl">
              A life given to revival, teaching, and the next generation.
            </h2>
          </Reveal>
          <div className="mt-12 grid items-stretch gap-8 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-5">
              <img
                src={prophetOfficial}
                alt="Prophet Isaiah Macwealth, Senior Pastor of Gospel Pillars International"
                loading="lazy"
                width="819"
                height="1024"
                className="h-full max-h-[38rem] w-full rounded-lg object-cover object-top"
              />
            </Reveal>
            <Reveal className="md:col-span-7">
              <p className="eyebrow text-gold">Prophet Isaiah Macwealth</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[.16em] text-sand/55">
                Senior Pastor · Gospel Pillars International
              </p>
              <div className="mt-8 space-y-5 text-lg leading-8 text-sand/75">
                <p>
                  Dr. Isaiah Macwealth, also known as Isaiah Wealth, is a lover
                  of Jesus, a renowned author, philanthropist, and Senior Pastor
                  of Gospel Pillars International Churches worldwide.
                </p>
                <p>
                  He is the founder of OneSound Revival Fellowship, a ministry
                  expressed through television, Bible education, and practical
                  charity. His ministry carries a strong call to revival,
                  revelatory teaching, church planting, and raising people who
                  live out the Gospel with courage.
                </p>
                <p>
                  Through missions across Africa, the United Kingdom, Europe,
                  and beyond, Prophet Isaiah Macwealth continues to serve the
                  Church and prepare a generation to make Christ known.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="mt-20 border-t border-sand/15 pt-12">
            <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
              <Reveal className="md:col-span-5">
                <img
                  src={apstBarney}
                  alt="Gospel Pillars members fellowshipping together"
                  loading="lazy"
                  width="1024"
                  height="1280"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              </Reveal>
              <Reveal className="md:col-span-7">
                <p className="eyebrow text-gold">Nigeria 2 Division</p>
                <h3 className="mt-4 font-display text-3xl text-sand md:text-4xl">
                  Divisional leadership for a growing family.
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[.16em] text-sand/55">
                  Apostle Barney Bashorun · Divisional Head
                </p>
                <div className="mt-7 space-y-4 text-lg leading-8 text-sand/75">
                  <p>
                    Apostle Barney Bashorun leads Gospel Pillars Campus Ministry (Nigeria 2 Division), serving the churches, communities, and fellowships entrusted to this growing expression of the ministry. His role is to provide pastoral direction, strengthen leaders, and help carry the ministry’s vision into new communities, from local churches to campus fellowships. Under his leadership, Nigeria 2 Division continues to grow through worship, teaching, fellowship, and spiritual transformation.
                    
                  </p>
                  <p>
                    His role is to provide pastoral direction, strengthen
                    leaders, and help carry the ministry’s vision into new
                    communities, from local churches to campus fellowships.
                    Under his leadership, Nigeria 2 Division continues to grow
                    through worship, teaching, fellowship, and spiritual
                    transformation.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sand-deep py-20">
        <div className="site-container grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <img
              src={galleryChoir}
              alt="Gospel Pillars members worshipping together"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
          </Reveal>
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-gold">There is room for you</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
              Find family in your community.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70">
              Whether you are looking for a church, a campus fellowship, or a
              place to help establish a new chapter, we would love to hear from
              you.
            </p>
            <Link to="/contact" className="mt-8 button-primary">
              Connect with us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
