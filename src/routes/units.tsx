import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clapperboard, Flame, HeartHandshake, Mic2, Shield, Smile } from "lucide-react";
import { ContentPage } from "../components/ContentPage";
import heroPraise from "../assets/hero-praise.jpg";

export const Route = createFileRoute("/units")({ component: UnitsPage });

const churchUnits = [
  {
    id: "choir",
    name: "Choir (Levites / Music Ministry)",
    eyebrow: "Praise & Worship",
    icon: Mic2,
    description:
      "A dedicated company of vocalists and instrumentalists anointed to usher the congregation into the manifest presence of God. The choir ministers through spiritual songs, scriptural praise, and excellence in musicianship.",
    responsibilities: [
      "Leading weekly praise, worship, and choral ministrations",
      "Vocal and instrumental rehearsals before Sunday and midweek services",
      "Special song ministrations for conferences, vigils, and campus outreaches",
    ],
  },
  {
    id: "ushering",
    name: "Ushering Department",
    eyebrow: "Order & Protocol",
    icon: Shield,
    description:
      "Gatekeepers of the sanctuary committed to maintaining godly order, reverent decorum, and seamless service flow. The ushering unit ensures every worshipper experiences a serene and distraction-free atmosphere.",
    responsibilities: [
      "Congregation seating arrangement and crowd coordination",
      "Offering, communion, and document distribution during services",
      "Maintaining sanctuary orderliness, safety, and comfort",
    ],
  },
  {
    id: "greeters",
    name: "Greeters Department",
    eyebrow: "Hospitality & Welcome",
    icon: Smile,
    description:
      "The warm, smiling first point of contact for everyone stepping through our doors. Greeters minister Christ's love through cordial reception, welcoming first-timers, providing direction, and making everyone feel at home.",
    responsibilities: [
      "Warmly receiving members, students, and first-time guests at all entrances",
      "Providing service programs, orientation, and directions within church premises",
      "Connecting first-timers with the follow-up and pastoral care team",
    ],
  },
  {
    id: "prayer",
    name: "Prayer Ministry",
    eyebrow: "Intercession & Spiritual Covering",
    icon: Flame,
    description:
      "The power engine of the church, standing in the gap through fervent, continuous intercession. This unit covers the leadership, chapters, students, campus awake revivals, and community breakthroughs in prayer.",
    responsibilities: [
      "Pre-service prayer watches and intercessory coverage",
      "Weekly prayer vigils and campus prayer chains",
      "Praying over personal prayer requests submitted by worshippers",
    ],
  },
  {
    id: "welfare",
    name: "Welfare Department",
    eyebrow: "Care & Benevolence",
    icon: HeartHandshake,
    description:
      "The hands and feet of Jesus expressing practical love and benevolence. The welfare department supports students and members through practical assistance, campus food banks, hospital visits, and academic encouragement.",
    responsibilities: [
      "Identifying and discreetly supporting brethren with welfare needs",
      "Student campus support, exam-season encouragement, and care packages",
      "Hospital visitations, home check-ins, and benevolence outreaches",
    ],
  },
  {
    id: "media",
    name: "Media Department",
    eyebrow: "Audio, Visual & Digital",
    icon: Clapperboard,
    description:
      "The creative force behind Gospel Pillars' broadcast and digital presence. The media unit captures, produces, and distributes the Word through sound, photography, video, live streaming, and social media — ensuring no soul misses a message.",
    responsibilities: [
      "Live sound engineering, audio mixing, and PA system management",
      "Service photography, videography, and post-production editing",
      "Live stream management and digital content publishing across platforms",
    ],
  },
];

function UnitsPage() {
  return (
    <ContentPage
      heroImage={heroPraise}
      eyebrow="Church units & departments"
      title="Find your place to serve."
      intro="Every believer is gifted to serve. Join a unit in your local chapter to grow spiritually, build meaningful friendships, and advance the work of God on your campus."
    >
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-brand/15 pb-6">
        <div>
          <p className="text-lg text-ink/75">
            <strong>{churchUnits.length} official departments</strong> active across Nigeria 2 Division
          </p>
        </div>
        <Link to="/contact" className="button-primary">
          Ask about joining a unit
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {churchUnits.map((unit) => {
          const Icon = unit.icon;
          return (
            <article
              key={unit.id}
              className="content-card flex flex-col justify-between transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon size={24} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-soft">
                    {unit.eyebrow}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-2xl text-ink">{unit.name}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/75">{unit.description}</p>

                <div className="mt-5 border-t border-brand/10 pt-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gold">
                    Key responsibilities:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-ink/70">
                    {unit.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand/10">
                <Link
                  to="/contact"
                  search={{ unit: unit.id }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand hover:text-gold transition-colors"
                >
                  Join this unit <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </ContentPage>
  );
}
