import image01 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.08.25 AM.jpeg";
// import image02 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.07.33 AM.jpeg";
import image03 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.07.14 AM.jpeg";
import image04 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.07.14 AM (1).jpeg";
import image05 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.07.13 AM.jpeg";
// import image06 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.07.13 AM (2).jpeg";
import image07 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.07.13 AM (1).jpeg";
import image08 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.06.36 AM.jpeg";
// import image09 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.06.36 AM (1).jpeg";
import image10 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.06.35 AM.jpeg";
import image11 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.06.35 AM (1).jpeg";
import image12 from "../assets/gallery/yaba2.jpeg";
import image13 from "../assets/gallery/WhatsApp Image 2026-09-19 at 9.06.34 AM (1).jpeg";
import image14 from "../assets/gallery/WhatsApp Image 2026-09-19 at 8.10.07 AM.jpeg";
import image15 from "../assets/gallery/WhatsApp Image 2026-09-19 at 8.10.06 AM.jpeg";
import image16 from "../assets/gallery/WhatsApp Image 2026-09-19 at 7.00.26 AM.jpeg";
import image17 from "../assets/gallery/WhatsApp Image 2026-09-19 at 7.00.26 AM (1).jpeg";
import image18 from "../assets/gallery/WhatsApp Image 2026-09-19 at 7.00.25 AM.jpeg";
import image19 from "../assets/gallery/WhatsApp Image 2026-09-19 at 7.00.25 AM (1).jpeg";
import image20 from "../assets/gallery/WhatsApp Image 2026-09-19 at 7.00.24 AM.jpeg";

export const galleryImages = [
  image01, image12, image03, image04, image20,
  image07, image08, image13, image10,
  image11, image12, image17, image14, image15,
  image16, image05, image18, image19, image20,
].map((src, index) => ({ src, alt: `Gospel Pillars community moment ${index + 1}` }));

const galleryFiles = import.meta.glob("../assets/gallery/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

export const allGalleryImages = Object.entries(galleryFiles)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([filePath, src], index) => ({
    src,
    alt: `Gospel Pillars gallery moment ${index + 1}`,
    filePath,
  }));
