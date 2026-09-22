import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { NigeriaMap } from "../components/NigeriaMap";
import { Reveal } from "../components/Reveal";
import { chapters } from "../data/chapters";
import { galleryImages } from "../data/gallery";
import apst from "../assets/apst.jpeg"
import prophet4 from "../assets/prophet4.png"
import prophetOfficial from "../assets/prophet_official.png"
import yaba2 from "../assets/gallery/yaba2.jpeg";
import yaba3 from "../assets/yaba3.jpeg";
import ibadan13 from "../assets/gallery/ibadan13.jpeg"
import ugenius from "../assets/ugenius.jpg";
import declaration from "../assets/declaration.png";
import gloryOverflowDominion from "../assets/glory-overflow-dominion.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gospel Pillars Campus Ministry — Rooted in the Word" },
      { name: "description", content: "Discover Gospel Pillars Campus Ministry, a church family growing through worship, teaching, and spiritual transformation." },
      { property: "og:title", content: "Gospel Pillars Campus Ministry" },
      { property: "og:description", content: "Rooted in the Word, community and discipleship." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ]
  }), component: HomePage,
});

const regions = ["All", ...Array.from(new Set(chapters.map((c) => c.region)))];

function contactHref(contact: string) {
  if (contact.includes("@")) return `mailto:${contact}`;
  const first = (contact.split(",")[0] ?? contact).trim();
  const digits = first.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "#";
}

function HomePage() {
  const [activeRegion, setActiveRegion] = useState("All");

  const filteredChapters = useMemo(
    () => (activeRegion === "All" ? chapters : chapters.filter((c) => c.region === activeRegion)),
    [activeRegion],
  );

  const groupedChapters = useMemo(() => {
    const groups = new Map<string, typeof chapters>();
    for (const chapter of filteredChapters) {
      const list = groups.get(chapter.region) ?? [];
      list.push(chapter);
      groups.set(chapter.region, list);
    }
    return Array.from(groups.entries());
  }, [filteredChapters]);

  return <>
    <section className="relative h-[calc(100svh-5rem)] min-h-[590px] max-h-[820px] overflow-hidden">
      <div className="absolute inset-0">
        {[prophet4, apst, ibadan13, yaba2, yaba3].map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`hero-slide hero-slide-${index + 1} absolute inset-0 h-full w-full object-cover object-center`}
            decoding={index === 0 ? "sync" : "async"}
            fetchPriority={index === 0 ? "high" : "low"}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/35 to-brand/15" />
      <div className="site-container relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
        <p className="eyebrow mb-5 text-sand/80">{chapters.length} locations · one growing family</p>
        <h1 className="max-w-5xl font-display text-5xl leading-[1.03] text-sand md:text-7xl lg:text-[5.6rem]">Rooted in the Word,<br />for the <em className="font-normal text-gold">community</em>, and <em className="font-normal text-gold">campuses</em></h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#chapters" className="button-primary">Find your location <ArrowRight size={16} /></a>
          <Link to="/about" className="inline-flex items-center rounded-full border border-sand/40 px-6 py-3 text-sm font-medium text-sand transition hover:bg-sand/10">Our story</Link>
        </div>
      </div>
    </section>

    <section className="bg-sand py-20 md:py-28">
      <div className="site-container grid items-start gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4"><p className="eyebrow text-gold">Who we are</p><div className="principles-list mt-8">{[['01', 'Our Vision', 'To reveal JEHOVAH as Almighty all seeing, all knowing and all powerful and YESHUA His Sonas the ONLY WAY to GOD and toSalvation'], ['02', 'Our Purpose', 'To reveal the knowledge of the glory of God to the nations as the waters cover the seas, leading to the restoration of the fear of God and the salvation of this Generation'], ['03', 'Our Mission', 'Holiness, sanctification and consecration to God'], ['04', 'Our Motto', 'Turning many unto righteousness while maintaining academic excellence']].map(([n, t, d]) => <div key={n} className="principle-item"><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></Reveal>
        <Reveal className="md:col-span-8"><h2 className="max-w-3xl font-display text-4xl leading-tight text-ink md:text-5xl">A church family growing across Nigeria.</h2><p className="mt-6 max-w-3xl text-xl leading-9 text-ink/80">Gospel Pillars is a church family growing through worship, teaching, and spiritual transformation. In churches, communities, and campus fellowships, our chapters create space for people to know Jesus, find family, and grow into purpose.</p><div className="service-cards mt-10 max-w-3xl"><div className="service-card"><p className="eyebrow text-gold">Sundays · 8:30 AM</p><h3>Sunday Worship Service</h3><p>Come ready for heartfelt worship, prayer, the Word, and a welcoming church family.</p></div><div className="service-card"><p className="eyebrow text-gold">Wednesdays · 7:00 PM</p><h3>Midweek Service</h3><p>Let the Word go to work in the middle of your week.</p></div></div>
        </Reveal>
      </div>
    </section>

    <section className="word-year-section bg-brand py-20 md:py-28">
      <div className="site-container">
        <Reveal><p className="eyebrow text-gold">Word for the year</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-sand md:text-6xl">Glory, Overflow &amp; Dominion.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-sand/75">A year of God, marked by declaration, praise, and the confidence to walk in the purpose He has given us.</p></Reveal>
        <div className="word-year-layout mt-12">
          <Reveal className="word-year-copy"><p className="eyebrow text-gold">The year of God</p><h3>Glory, Overflow &amp; Dominion.</h3><blockquote>“And God said, Let us make man in our image, after our likeness: and let them have dominion...”</blockquote><cite>Genesis 1:26</cite></Reveal>
          <Reveal className="word-year-art"><img src={gloryOverflowDominion} alt="2026 Word for the Year: Glory, Overflow and Dominion" width="1499" height="2000" className="word-year-image" /></Reveal>
          <Reveal className="word-year-declaration"><img src={declaration} alt="My Declaration for 2026" width="1024" height="576" className="declaration-image" /></Reveal>
        </div>
      </div>
    </section>

    <section id="chapters" className="relative bg-brand py-20 md:py-28">
      <div className="site-container">
        <Reveal>
          <p className="eyebrow text-gold">Our footprint</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="max-w-2xl font-display text-4xl leading-tight text-sand md:text-5xl">Find Gospel Pillars near you.</h2>
            <span className="font-mono text-xs uppercase text-sand/50">{chapters.length} locations and growing</span>
          </div>
        </Reveal>

        <div className="chapters-layout mt-10">
          <Reveal className="chapters-map-panel min-w-0 order-1 lg:order-2">
            <div className="chapters-map-card">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sand">Where we are planted</p>
                <span className="font-mono text-[10px] uppercase text-sand/50">Nigeria</span>
              </div>
              <NigeriaMap />
            </div>
          </Reveal>

          <Reveal className="chapters-directory min-w-0 order-2 lg:order-1">
            <div className="chapter-region-bar" role="tablist" aria-label="Filter by region">
              {regions.map((region) => {
                const count = region === "All" ? chapters.length : chapters.filter((c) => c.region === region).length;
                const short = region === "All" ? "All" : region.replace(" Region", "");
                return (
                  <button
                    key={region}
                    type="button"
                    role="tab"
                    aria-selected={activeRegion === region}
                    className={`chapter-region-chip${activeRegion === region ? " is-active" : ""}`}
                    onClick={() => setActiveRegion(region)}
                  >
                    <span>{short}</span>
                    <em>{count}</em>
                  </button>
                );
              })}
            </div>

            <div className="chapter-blocks">
              {groupedChapters.map(([region, regionChapters]) => (
                <div key={region} className="chapter-region-group">
                  {activeRegion === "All" && (
                    <p className="chapter-region-label">{region.replace(" Region", "")}</p>
                  )}
                  <div className="chapter-block-grid">
                    {regionChapters.map((chapter) => (
                      <article key={chapter.id} className="chapter-block">
                        <div className="chapter-block-top">
                          <MapPin size={16} className="shrink-0 text-gold" aria-hidden />
                          <div className="min-w-0">
                            <p className="chapter-block-place">{chapter.city} · {chapter.state}</p>
                            <h3 className="chapter-block-title">{chapter.name}</h3>
                          </div>
                        </div>
                        <ul className="chapter-block-meta">
                          <li>
                            <MapPin size={13} aria-hidden />
                            <span>{chapter.address}</span>
                          </li>
                          <li>
                            <Clock size={13} aria-hidden />
                            <span>{chapter.serviceTime}</span>
                          </li>
                          <li>
                            <Phone size={13} aria-hidden />
                            <a href={contactHref(chapter.contact)}>{chapter.contact}</a>
                          </li>
                        </ul>
                        <Link
                          to="/churches/$chapterId"
                          params={{ chapterId: chapter.id }}
                          className="chapter-block-link"
                        >
                          View chapter <ArrowRight size={13} />
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
              Ask about another campus <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="bg-sand py-20 md:py-28"><div className="site-container"><Reveal><p className="eyebrow text-gold">The rhythm of campus life</p><h2 className="mt-4 max-w-2xl font-display text-4xl text-ink md:text-5xl">Gather. Grow. Go.</h2></Reveal><div className="mt-12 divide-y divide-brand/15 border-y border-brand/15">{[["Weekly", "Bible study & prayer", "A thoughtful space for Scripture, questions, prayer, and friendships."], ["Every semester", "Campus awake", "Students from across faculties gathering for worship, empowerment and the Word."], ["Across chapters", "Leadership & outreach", "Equipping students to serve their campus and carry Christ everywhere."]].map(([date, title, copy]) => <Reveal key={title} className="grid gap-3 py-7 md:grid-cols-12 md:items-center"><span className="font-mono text-xs uppercase text-gold md:col-span-2">{date}</span><h3 className="font-display text-2xl text-ink md:col-span-4">{title}</h3><p className="text-sm leading-6 text-ink/60 md:col-span-6">{copy}</p></Reveal>)}</div></div></section>

    <section className="bg-sand-deep py-20 md:py-28">
      <div className="site-container grid items-center gap-10 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-5">
          <img
            src={prophetOfficial}
            alt="Prophet Isaiah Macwealth, Senior Pastor of Gospel Pillars International"
            loading="lazy"
            width={800}
            height={1000}
            className="aspect-[4/5] w-full rounded-lg object-cover object-top"
          />
        </Reveal>
        <Reveal className="md:col-span-7">
          <p className="eyebrow text-gold">Senior Pastor</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">Prophet Isaiah Macwealth</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
            Dr. Isaiah Macwealth, also known as Isaiah Wealth, is a lover of Jesus, a renowned author, philanthropist, and Senior Pastor of Gospel Pillars International Churches worldwide. He is also the founder of the OneSound Revival Fellowship, which runs a TV house, a Bible College, and a charity foundation.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
            A prophet of God, his daily aim is to seek alignment with Heaven to deliver revelatory teachings, prophecies, and exhortations from the heart of the Father to people, nations, tongues, and kings.
          </p>
          <a
            href="https://gospelpillars.org/about-isaiah-macwealth/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 button-primary"
          >
            Learn more <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>

    <section className="bg-brand py-20 md:py-28"><div className="site-container grid items-center gap-10 md:grid-cols-12"><Reveal className="md:col-span-7"><p className="eyebrow text-gold">U-Genius</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-sand md:text-5xl">Unlock your academic genius within.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-sand/80">U-Genius raises a generation of scholars who pursue academic excellence, lead with character, and create meaningful impact through mentorship, community, and skill-building.</p><a href="https://www.ugenius.ng/" target="_blank" rel="noreferrer" className="mt-8 button-primary">Visit U-Genius <ArrowRight size={16} /></a></Reveal><Reveal className="md:col-span-5"><img src={ugenius} alt="Students working together in a creative studio" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-lg object-cover" /></Reveal></div></section>

    <section className="bg-sand py-20 md:py-28"><div className="site-container"><Reveal><p className="eyebrow text-gold">Explore the division</p><h2 className="mt-4 max-w-3xl font-display text-4xl text-ink md:text-5xl">There is a place for you here.</h2></Reveal><div className="quick-links mt-12">{([["Our churches", "Find a church or fellowship near you.", "/churches"], ["Meet our leadership", "Learn who serves the wider family.", "/leadership"], ["View events", "See confirmed programmes and gatherings.", "/events"], ["Join a unit", "Find a way to serve when the official list is published.", "/units"], ["View resources", "Keep growing through approved media.", "/resources"], ["Contact us", "Ask a question or tell us how we can help.", "/contact"]] as const).map(([title, copy, to]) => <Link key={to} to={to} className="quick-link"><span><strong>{title}</strong><small>{copy}</small></span><ArrowRight size={17} /></Link>)}</div></div></section>

    <section id="gallery" className="gallery-section bg-sand-deep py-20 md:py-28"><div className="site-container"><Reveal><p className="eyebrow text-gold">Gallery</p><div className="flex flex-wrap items-end justify-between gap-5"><h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Moments from the movement.</h2><Link to="/gallery" className="button-outline">View full gallery <ArrowRight size={15} /></Link></div></Reveal></div><div className="gallery-marquee" aria-label="Gospel Pillars gallery"><div className="gallery-track">{[...galleryImages, ...galleryImages].map((image, index) => <img key={`${image.src}-${index}`} src={image.src} alt={image.alt} loading="lazy" width={1024} height={1280} className="gallery-image" />)}</div></div></section>
  </>;
}