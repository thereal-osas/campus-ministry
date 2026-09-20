import futmina1 from "../assets/futmina1.jpeg";
import futmina2 from "../assets/futmina2.jpeg";
import futmina3 from "../assets/futmina3.jpeg";
import yaba2 from "../assets/yaba2.jpeg";
import altar from "../assets/altar.jpeg";
import entrance from "../assets/entrance.jpeg";
import freshers from "../assets/freshers.jpeg";
import heroWorship from "../assets/hero-worship.jpg";
import heroPraise from "../assets/hero-praise.jpg";
import heroStudy from "../assets/hero-study.jpg";
import { allGalleryImages } from "./gallery";

export type ChapterPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

// Map known chapter IDs to specific photo collections
const specificChapterPhotos: Record<string, ChapterPhoto[]> = {
  "gospel-pillars-campus-fellowship-federal-university-of-technology-minna": [
    { src: futmina1, alt: "GPCF FUTMINNA Fellowship Service", caption: "Sunday Service at PTDF Hall Engineering" },
    { src: futmina2, alt: "GPCF FUTMINNA Students Worship", caption: "Worship and ministry of the Word" },
    { src: futmina3, alt: "GPCF FUTMINNA Community Gathering", caption: "Students gathering in unity" },
    { src: freshers, alt: "Freshers Welcome & Outreach", caption: "Freshers orientation and welcoming students" },
  ],
  "gospel-pillars-church-yaba": [
    { src: yaba2, alt: "GPC Yaba Service Gathering", caption: "Service at Beverly Events Centre, Bariga" },
    { src: altar, alt: "Altar and Prayer", caption: "Deep worship and ministry of the Word" },
    { src: entrance, alt: "Sanctuary entrance", caption: "Welcoming worshippers to fellowship" },
  ],
  "gospel-pillars-church-ugbowo": [
    { src: altar, alt: "GPC Ugbowo Worship Service", caption: "Sunday Service at Precious Palm Royal Hotel" },
    { src: heroWorship, alt: "Praise & Worship", caption: "Atmosphere of worship and praise" },
    { src: freshers, alt: "Campus Outreach", caption: "Outreach to students and community" },
  ],
  "gospel-pillars-campus-fellowship-university-of-benin": [
    { src: entrance, alt: "GPCF UNIBEN Fellowship", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: heroStudy, alt: "Bible Study and Discipleship", caption: "Rooted in the Word of God" },
    { src: freshers, alt: "Campus Awake", caption: "Student evangelism and campus awakening" },
  ],
};

/**
 * Returns a list of photos for a chapter.
 * Uses specific photos if available, or derives a deterministic selection
 * from the rich divisional gallery so every chapter has photos.
 */
export function getChapterPhotos(chapterId: string, chapterName: string): ChapterPhoto[] {
  if (specificChapterPhotos[chapterId]) {
    return specificChapterPhotos[chapterId];
  }

  // Derive deterministic 4-6 photos from gallery for any other chapter
  const hash = chapterId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const total = allGalleryImages.length;

  if (total === 0) {
    return [
      { src: heroWorship, alt: `${chapterName} Worship`, caption: "Worship Service" },
      { src: heroPraise, alt: `${chapterName} Fellowship`, caption: "Fellowship Gathering" },
      { src: heroStudy, alt: `${chapterName} Study`, caption: "Word and Prayer" },
    ];
  }

  const selectedIndices = [
    hash % total,
    (hash + 7) % total,
    (hash + 13) % total,
    (hash + 23) % total,
    (hash + 37) % total,
  ];

  return selectedIndices.map((idx, i) => {
    const item = allGalleryImages[idx];
    return {
      src: item ? item.src : heroWorship,
      alt: item ? item.alt : `${chapterName} moment ${i + 1}`,
      caption: `${chapterName} · Fellowship & Worship`,
    };
  });
}
