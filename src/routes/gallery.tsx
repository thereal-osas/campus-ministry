import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { ContentPage } from "../components/ContentPage";
import { allGalleryImages } from "../data/gallery";
import ibadan from "../assets/ibadan.jpeg"

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = next[i]!;
    next[i] = next[j]!;
    next[j] = current;
  }
  return next;
}

function GalleryPage() {
  const images = useMemo(() => shuffle(allGalleryImages), []);

  return <ContentPage heroImage={ibadan} eyebrow="Gallery" title="Moments from the movement." intro="A visual record of worship, fellowship, service, and the life of Gospel Pillars communities.">
    <div className="bento-gallery">{images.map((image, index) => <figure key={image.filePath} className={`bento-item bento-item-${index % 8}`}><img src={image.src} alt={image.alt} loading={index < 4 ? "eager" : "lazy"} /><figcaption>Gospel Pillars · {String(index + 1).padStart(2, "0")}</figcaption></figure>)}</div>
  </ContentPage>;
}
