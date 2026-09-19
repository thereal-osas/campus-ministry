import resourcesImage from "../assets/resources.png";
import prophet from "../assets/prophet.png";
import audioBook from "../assets/audio_book.png";
import liveService from "../assets/live_service.png";
// import galleryWorship from "../assets/gallery-worship.jpg";
import galleryBible from "../assets/gallery-bible.jpg";
import seraph from "../assets/seraph.png";
export type ResourceLink = {
  label: string;
  description: string;
  href: string;
  image?: string;
};

export const officialLinks = {
  globalSite: "https://gospelpillars.org/",
  prophetSite: "https://isaiahmacwealth.org/",
  dailyDevotional: "https://prayingthepromises.co.uk/",
  books: "https://kairosbookshop.org/",
  teaching: "https://macwealthfreestore.com/",
  audioBooks: "https://www.youtube.com/@MacwealthAudioBooks",
  music: "https://www.youtube.com/@TheSeraphMusic",
  liveServices: "https://youtube.com/@gospelpillarsinternational/Live",
  globalLocations: "https://gospelpillars.org/locations/",
};

export const resources: ResourceLink[] = [
  { label: "Daily Devotional", description: "Pray and grow with daily devotional resources.", href: officialLinks.dailyDevotional, image: galleryBible },
  { label: "Prophet's Books", description: "Explore approved books and ministry publications.", href: officialLinks.books, image: resourcesImage },
  { label: "Teaching Resources", description: "Access teaching and faith-building resources.", href: officialLinks.teaching, image: prophet },
  { label: "Audio Books", description: "Listen to approved audio book resources.", href: officialLinks.audioBooks, image: audioBook },
  { label: "Music", description: "Worship with official Gospel Pillars music resources.", href: officialLinks.music, image: seraph },
  { label: "LIVE Services", description: "Watch Gospel Pillars International services online.", href: officialLinks.liveServices, image: liveService },
];

export const socialLinks: ResourceLink[] = [
  { label: "Facebook", description: "Follow official Gospel Pillars updates.", href: "https://facebook.com/" },
  { label: "Instagram", description: "Follow the official Gospel Pillars community.", href: "https://www.instagram.com/" },
  { label: "YouTube", description: "Watch services, messages, and ministry media.", href: officialLinks.liveServices },
];

export const missingInfo = "Update this section with the division’s approved information before launch.";
