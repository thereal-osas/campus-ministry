import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, Mail, MapPin } from "lucide-react";
import { NigeriaMap } from "../components/NigeriaMap";
import { Reveal } from "../components/Reveal";
import { chapters } from "../data/chapters";
import { galleryImages } from "../data/gallery";
import heroWorship from "../assets/hero-worship.jpg";
import heroStudy from "../assets/hero-study.jpg";
import heroPraise from "../assets/hero-praise.jpg";
import ugenius from "../assets/ugenius.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Gospel Pillars Campus Ministry — Rooted in the Word" },
    { name: "description", content: "Discover Gospel Pillars Campus Ministry, a church family growing through worship, teaching, and spiritual transformation." },
    { property: "og:title", content: "Gospel Pillars Campus Ministry" },
    { property: "og:description", content: "Rooted in the Word, at home in every community." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  const [openChapter, setOpenChapter] = useState<string | null>(null);

  return <>
    <section className="relative h-[calc(100svh-5rem)] min-h-[590px] max-h-[820px] overflow-hidden">
      <div className="absolute inset-0">
        {[heroWorship, heroStudy, heroPraise].map((src, index) => <img key={src} src={src} alt="" className="hero-slide absolute inset-0 h-full w-full object-cover" width={1920} height={1088} fetchPriority={index === 0 ? "high" : "auto"} />)}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/45 to-brand/5" />
      <div className="site-container relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
        <p className="eyebrow mb-5 text-sand/80">{chapters.length} chapters · one growing family</p>
        <h1 className="max-w-5xl font-display text-5xl leading-[1.03] text-sand md:text-7xl lg:text-[5.6rem]">Rooted in the Word,<br/><em className="font-normal text-gold">at home</em> in every community.</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#chapters" className="button-primary">Find your location <ArrowRight size={16}/></a>
          <Link to="/about" className="inline-flex items-center rounded-full border border-sand/40 px-6 py-3 text-sm font-medium text-sand transition hover:bg-sand/10">Our story</Link>
        </div>
      </div>
    </section>

    <section className="bg-sand py-20 md:py-28">
      <div className="site-container grid gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4"><p className="eyebrow text-gold">Who we are</p><h2 className="mt-4 max-w-sm font-display text-4xl leading-tight text-ink md:text-5xl">A church family growing across Nigeria.</h2></Reveal>
        <Reveal className="md:col-span-8"><p className="max-w-3xl text-xl leading-9 text-ink/80">Gospel Pillars is a church family growing through worship, teaching, and spiritual transformation. In churches, communities, and campus fellowships, our chapters create space for people to know Jesus, find family, and grow into purpose.</p>
          <div className="mt-10 grid border-y border-brand/15 sm:grid-cols-3">
            {[['01','The Word','Faithful teaching that forms a steady life.'],['02','Community','Friendships that carry you through the week.'],['03','Discipleship','Growing into the life Jesus invites.']].map(([n,t,d]) => <div key={n} className="border-brand/15 py-6 sm:border-r sm:px-6 first:pl-0 last:border-r-0"><span className="font-mono text-xl text-gold">{n}</span><h3 className="mt-3 font-display text-xl text-ink">{t}</h3><p className="mt-2 text-sm leading-6 text-ink/60">{d}</p></div>)}
          </div>
        </Reveal>
      </div>
    </section>

    <section id="chapters" className="relative overflow-hidden bg-brand py-20 md:py-28">
      <div className="site-container">
        <Reveal><p className="eyebrow text-gold">Our footprint</p><div className="mt-4 flex flex-wrap items-end justify-between gap-5"><h2 className="max-w-2xl font-display text-4xl leading-tight text-sand md:text-5xl">Find Gospel Pillars near you.</h2><span className="font-mono text-xs uppercase text-sand/50">{chapters.length} locations and growing</span></div></Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-lg border border-sand/20 bg-sand/10 p-6 backdrop-blur-xl"><div className="flex justify-between border-b border-sand/15 pb-4"><span className="text-sand">Chapter directory</span><span className="font-mono text-xs text-sand/60">{chapters.length} active</span></div><div className="chapter-list divide-y divide-sand/10">{chapters.map((chapter) => { const isOpen = openChapter === chapter.id; return <div key={chapter.id} className="chapter-item"><button type="button" className="chapter-toggle" aria-expanded={isOpen} onClick={() => setOpenChapter(isOpen ? null : chapter.id)}><span className="flex min-w-0 items-center gap-3"><MapPin size={17} className="shrink-0 text-gold"/><span className="min-w-0 text-left"><span className="block truncate text-sand">{chapter.name}</span><span className="mt-1 block font-mono text-[10px] uppercase text-sand/50">{chapter.city} · {chapter.state}</span></span></span><ChevronDown size={17} className={`shrink-0 text-sand/60 transition-transform ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <div className="chapter-details"><p><strong>Address</strong>{chapter.address}</p><p><strong>Service time</strong>{chapter.serviceTime}</p><p><strong>Contact</strong><a href={`mailto:${chapter.contact}`}><Mail size={13} />{chapter.contact}</a></p></div>}</div>; })}</div><Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">Ask about another campus <ArrowRight size={15}/></Link></Reveal>
          <Reveal className="rounded-lg border border-sand/20 bg-sand/10 p-6 backdrop-blur-xl"><div className="flex items-center justify-between"><p className="text-sand">Where we are planted</p><span className="font-mono text-[10px] uppercase text-sand/50">Nigeria</span></div><NigeriaMap /></Reveal>
        </div>
      </div>
    </section>

    <section className="bg-sand py-20 md:py-28"><div className="site-container"><Reveal><p className="eyebrow text-gold">The rhythm of campus life</p><h2 className="mt-4 max-w-2xl font-display text-4xl text-ink md:text-5xl">Gather. Grow. Go.</h2></Reveal><div className="mt-12 divide-y divide-brand/15 border-y border-brand/15">{[["Weekly","Bible study & prayer","A thoughtful space for Scripture, questions, prayer, and friendships."],["Every term","Campus praise nights","Students from across faculties gathering for worship and the Word."],["Across chapters","Leadership & outreach","Equipping students to serve their campus and carry Christ everywhere."]].map(([date,title,copy])=><Reveal key={title} className="grid gap-3 py-7 md:grid-cols-12 md:items-center"><span className="font-mono text-xs uppercase text-gold md:col-span-2">{date}</span><h3 className="font-display text-2xl text-ink md:col-span-4">{title}</h3><p className="text-sm leading-6 text-ink/60 md:col-span-6">{copy}</p></Reveal>)}</div></div></section>

    <section className="bg-verdant py-20 md:py-28"><div className="site-container grid items-center gap-10 md:grid-cols-12"><Reveal className="md:col-span-7"><p className="eyebrow text-sand/70">U-Genius</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-sand md:text-5xl">Faith, creativity and bright ideas for a new generation.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-sand/80">U-Genius celebrates student potential through learning, creativity, media and purposeful projects. It is a place for young people to discover gifts and put excellent ideas to work.</p><a href="#" className="mt-8 button-primary">Visit U-Genius <ArrowRight size={16}/></a></Reveal><Reveal className="md:col-span-5"><img src={ugenius} alt="Students working together in a creative studio" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-lg object-cover"/></Reveal></div></section>

    <section id="gallery" className="gallery-section bg-sand-deep py-20 md:py-28"><div className="site-container"><Reveal><p className="eyebrow text-gold">Gallery</p><h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Moments from the movement.</h2></Reveal></div><div className="gallery-marquee" aria-label="Gospel Pillars gallery"><div className="gallery-track">{[...galleryImages, ...galleryImages].map((image, index) => <img key={`${image.src}-${index}`} src={image.src} alt={image.alt} loading="lazy" width={1024} height={1280} className="gallery-image" />)}</div></div></section>
  </>;
}