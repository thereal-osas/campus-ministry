import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, MapPin, Phone, Share2, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { chapters } from "../../data/chapters";
import { getChapterPhotos, type ChapterPhoto } from "../../data/chapterImages";

export const Route = createFileRoute("/churches/$chapterId")({
  component: ChapterDetailPage,
});

function ChapterDetailPage() {
  const { chapterId } = Route.useParams();
  const chapter = chapters.find((c) => c.id === chapterId);
  const [activePhoto, setActivePhoto] = useState<ChapterPhoto | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!chapter) {
    return (
      <div className="site-container py-24 text-center">
        <h1 className="font-display text-4xl text-ink">Chapter Not Found</h1>
        <p className="mt-4 text-ink/70">The location record you requested could not be located in our directory.</p>
        <Link to="/churches" className="button-primary mt-8 inline-flex">
          Return to all locations
        </Link>
      </div>
    );
  }

  const photos = getChapterPhotos(chapter.id, chapter.name);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: chapter.name,
          text: `Find details and photos for ${chapter.name} (${chapter.city}, ${chapter.state})`,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Ignored
    }
  };

  return (
    <div className="bg-sand-deep min-h-screen py-12 md:py-16">
      <div className="site-container">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand/15 pb-6">
          <Link
            to="/churches"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} /> Back to all churches &amp; campuses
          </Link>
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-white/70 px-4 py-2 text-xs font-semibold text-ink shadow-sm hover:bg-white transition"
          >
            <Share2 size={14} className="text-gold" />
            {copiedLink ? "Link copied!" : "Share location"}
          </button>
        </div>

        {/* Chapter Header */}
        <header className="mt-8">
          <span className="eyebrow inline-block rounded-full bg-gold/15 px-3.5 py-1 text-gold">
            {chapter.region}
          </span>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl lg:text-6xl">
            {chapter.name}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-brand-soft font-mono">
            {chapter.city} · {chapter.state} State, Nigeria
          </p>
        </header>

        {/* Quick Details Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Address Card */}
          <div className="content-card">
            <div className="flex items-center gap-2 text-gold">
              <MapPin size={20} />
              <span className="eyebrow text-gold">Physical Address</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/80">{chapter.address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${chapter.name}, ${chapter.address}, ${chapter.city}, Nigeria`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand hover:text-gold"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Service Times Card */}
          <div className="content-card">
            <div className="flex items-center gap-2 text-gold">
              <Clock size={20} />
              <span className="eyebrow text-gold">Service Times</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/80">{chapter.serviceTime}</p>
            <p className="mt-4 text-xs text-ink/60">
              Arrive 15 minutes early for pre-service prayer and welcoming.
            </p>
          </div>

          {/* Contact Card */}
          <div className="content-card">
            <div className="flex items-center gap-2 text-gold">
              <Phone size={20} />
              <span className="eyebrow text-gold">Contact / Inquiries</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/80 break-words">{chapter.contact}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand hover:text-gold"
              >
                Send a message →
              </Link>
            </div>
          </div>
        </div>

        {/* Chapter Photo Gallery */}
        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-brand/15 pb-4">
            <div>
              <p className="eyebrow text-gold">Moments &amp; Fellowship</p>
              <h2 className="mt-1 font-display text-3xl text-ink">Chapter Gallery</h2>
            </div>
            <span className="font-mono text-xs uppercase text-ink/50">
              {photos.length} photos available
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <figure
                key={index}
                onClick={() => setActivePhoto(photo)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-brand/10 bg-brand/5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-brand/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow">
                    <ZoomIn size={14} /> View full photo
                  </span>
                </div>

              </figure>
            ))}
          </div>
        </section>

        {/* Next Steps / Connect Banner */}
        <div className="mt-16 rounded-2xl bg-brand p-8 text-sand md:p-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Join the movement</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">
              Make {chapter.name} your home church.
            </h3>
            <p className="mt-4 text-sm leading-7 text-sand/80">
              Whether you are a fresher arriving on campus or looking for a vibrant spiritual family,
              there is a seat saved for you this week.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="button-primary">
                Connect with chapter leader
              </Link>
              <Link to="/units" className="button-outline">
                Explore units to join
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute -top-12 right-0 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition"
              aria-label="Close photo"
            >
              <X size={24} />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            {activePhoto.caption && (
              <p className="mt-3 text-center text-sm font-mono text-sand/80">
                {activePhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
