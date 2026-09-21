import image01 from "../assets/gallery/ibadan13.jpeg";
import image02 from "../assets/gallery/uniben8.jpeg";
import image03 from "../assets/gallery/ugbowo10.jpeg";
import image04 from "../assets/gallery/ugbowo4.jpeg";
import image05 from "../assets/gallery/ibadan11.jpeg";
import image06 from "../assets/gallery/yaba10.jpeg";
import image07 from "../assets/gallery/ibadan6.jpeg";
import image08 from "../assets/gallery/yaba4.jpeg";
import image09 from "../assets/gallery/ibadan12.jpeg";
import image10 from "../assets/gallery/ibadan8.jpeg";
import image11 from "../assets/gallery/ugbowo12.jpeg";
import image12 from "../assets/gallery/yaba2.jpeg";
import image13 from "../assets/gallery/ibadan17.jpeg";
import image14 from "../assets/gallery/uniben19.jpeg";
import image15 from "../assets/gallery/abraka14.jpeg";
import image16 from "../assets/gallery/yaba3.jpeg";
import image17 from "../assets/gallery/uniben18.jpeg";
import image18 from "../assets/gallery/yaba11.jpeg";
import image19 from "../assets/gallery/yaba8.jpeg";
import image20 from "../assets/gallery/yaba7.jpeg";

export const galleryImages = [
  image01, image02, image03, image04, image05,
  image06, image07, image08, image09, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20,
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
