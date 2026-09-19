import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "../components/ContentPage";
import { galleryImages } from "../data/gallery";
import heroWorship from "../assets/hero-worship.jpg";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

function GalleryPage() {
  return <ContentPage heroImage={heroWorship} eyebrow="Gallery" title="Moments from the movement." intro="A visual record of worship, fellowship, service, and the life of Gospel Pillars communities.">
    <div className="bento-gallery">{galleryImages.map((image, index) => <figure key={image.src} className={`bento-item bento-item-${index % 8}`}><img src={image.src} alt={image.alt} loading={index < 4 ? "eager" : "lazy"} /><figcaption>Gospel Pillars · {String(index + 1).padStart(2, "0")}</figcaption></figure>)}</div>
  </ContentPage>;
}
