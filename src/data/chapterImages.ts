import aau1 from "../assets/gallery/aau1.jpeg"
import aau2 from "../assets/gallery/aau2.jpeg"
import aau3 from "../assets/gallery/aau3.jpeg"
import aau4 from "../assets/gallery/aau4.jpeg"
import aau5 from "../assets/gallery/aau5.jpeg"
import aau6 from "../assets/gallery/aau6.jpeg"
import aau7 from "../assets/gallery/aau7.jpeg"

import abraka1 from "../assets/gallery/abraka1.jpeg";
import abraka2 from "../assets/gallery/abraka2.jpeg";
import abraka3 from "../assets/gallery/abraka3.jpeg";
import abraka4 from "../assets/gallery/abraka4.jpeg";
import abraka5 from "../assets/gallery/abraka5.jpeg";
import abraka6 from "../assets/gallery/abraka6.jpeg";
import abraka7 from "../assets/gallery/abraka7.jpeg";
import abraka8 from "../assets/gallery/abraka8.jpeg";
import abraka9 from "../assets/gallery/abraka9.jpeg";
import abraka10 from "../assets/gallery/abraka10.jpeg";
import abraka11 from "../assets/gallery/abraka11.jpeg";
import abraka12 from "../assets/gallery/abraka12.jpeg";
import abraka13 from "../assets/gallery/abraka13.jpeg";
import abraka14 from "../assets/gallery/abraka14.jpeg";
import abraka15 from "../assets/gallery/abraka15.jpeg";

import futmina1 from "../assets/gallery/futminna1.jpeg";
import futmina2 from "../assets/gallery/futminna2.jpeg";
import futmina3 from "../assets/gallery/futminna3.jpeg";
import futmina4 from "../assets/gallery/futminna4.jpeg";
import futmina5 from "../assets/gallery/futminna5.jpeg";

import ibadan1 from "../assets/gallery/ibadan1.jpeg";
import ibadan2 from "../assets/gallery/ibadan2.jpeg";
import ibadan3 from "../assets/gallery/ibadan3.jpeg";
import ibadan4 from "../assets/gallery/ibadan4.jpeg";
import ibadan5 from "../assets/gallery/ibadan5.jpeg";
import ibadan6 from "../assets/gallery/ibadan6.jpeg";
import ibadan7 from "../assets/gallery/ibadan7.jpeg";
import ibadan8 from "../assets/gallery/ibadan8.jpeg";
import ibadan9 from "../assets/gallery/ibadan9.jpeg";
import ibadan10 from "../assets/gallery/ibadan10.jpeg";
import ibadan11 from "../assets/gallery/ibadan11.jpeg";
import ibadan12 from "../assets/gallery/ibadan12.jpeg";
import ibadan13 from "../assets/gallery/ibadan13.jpeg";
import ibadan14 from "../assets/gallery/ibadan14.jpeg";
import ibadan15 from "../assets/gallery/ibadan15.jpeg";
import ibadan16 from "../assets/gallery/ibadan16.jpeg";
import ibadan17 from "../assets/gallery/ibadan17.jpeg";

import iuo1 from "../assets/gallery/iuo1.jpeg"
import iuo2 from "../assets/gallery/iuo2.jpeg"
import iuo3 from "../assets/gallery/iuo3.jpeg"
import iuo4 from "../assets/gallery/iuo4.jpeg"
import iuo5 from "../assets/gallery/iuo5.jpeg"
import iuo6 from "../assets/gallery/iuo6.jpeg"
import iuo7 from "../assets/gallery/iuo7.jpeg"
import iuo8 from "../assets/gallery/iuo8.jpeg"
import iuo9 from "../assets/gallery/iuo9.jpeg"


import ugbowo1 from "../assets/gallery/ugbowo1.jpeg";
import ugbowo2 from "../assets/gallery/ugbowo2.jpeg";
import ugbowo3 from "../assets/gallery/ugbowo3.jpeg";
import ugbowo4 from "../assets/gallery/ugbowo4.jpeg";
import ugbowo5 from "../assets/gallery/ugbowo5.jpeg";
import ugbowo6 from "../assets/gallery/ugbowo6.jpeg";
import ugbowo7 from "../assets/gallery/ugbowo7.jpeg";
import ugbowo8 from "../assets/gallery/ugbowo8.jpeg";
import ugbowo9 from "../assets/gallery/ugbowo9.jpeg";
import ugbowo10 from "../assets/gallery/ugbowo10.jpeg";
import ugbowo11 from "../assets/gallery/ugbowo11.jpeg";
import ugbowo12 from "../assets/gallery/ugbowo12.jpeg";

import uniben1 from "../assets/gallery/uniben1.jpeg";
import uniben2 from "../assets/gallery/uniben2.jpeg";
import uniben3 from "../assets/gallery/uniben3.jpeg";
import uniben4 from "../assets/gallery/uniben4.jpeg";
import uniben5 from "../assets/gallery/uniben5.jpeg";
import uniben6 from "../assets/gallery/uniben6.jpeg";
import uniben7 from "../assets/gallery/uniben7.jpeg";
import uniben8 from "../assets/gallery/uniben8.jpeg";
import uniben9 from "../assets/gallery/uniben9.jpeg";
import uniben10 from "../assets/gallery/uniben10.jpeg";
import uniben11 from "../assets/gallery/uniben11.jpeg";
import uniben12 from "../assets/gallery/uniben12.jpeg";
import uniben13 from "../assets/gallery/uniben13.jpeg";
import uniben14 from "../assets/gallery/uniben14.jpeg";
import uniben15 from "../assets/gallery/uniben15.jpeg";
import uniben16 from "../assets/gallery/uniben16.jpeg";
import uniben17 from "../assets/gallery/uniben17.jpeg";
import uniben18 from "../assets/gallery/uniben18.jpeg";
import uniben19 from "../assets/gallery/uniben19.jpeg";
import uniben20 from "../assets/gallery/uniben20.jpeg";

import uniport1 from "../assets/gallery/uniport1.jpeg"
import uniport2 from "../assets/gallery/uniport2.jpeg"
import uniport3 from "../assets/gallery/uniport3.jpeg"
import uniport4 from "../assets/gallery/uniport4.jpeg"

import yaba1 from "../assets/gallery/yaba1.jpeg";
import yaba2 from "../assets/gallery/yaba2.jpeg";
import yaba3 from "../assets/gallery/yaba3.jpeg";
import yaba4 from "../assets/gallery/yaba4.jpeg";
import yaba5 from "../assets/gallery/yaba5.jpeg";
import yaba6 from "../assets/gallery/yaba6.jpeg";
import yaba7 from "../assets/gallery/yaba7.jpeg";
import yaba8 from "../assets/gallery/yaba8.jpeg";
import yaba9 from "../assets/gallery/yaba9.jpeg";
import yaba10 from "../assets/gallery/yaba10.jpeg";
import yaba11 from "../assets/gallery/yaba11.jpeg";
import yaba12 from "../assets/gallery/yaba12.jpeg";

import picPlaceholder from "../assets/pic_placeholder.jpeg"
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
  "gospel-pillars-campus-community-church-ugbowo-benin-city": [
    { src: ugbowo1, alt: "GPC Ugbowo", caption: "Sunday Service at Precious Palm Royal Hotel" },
    { src: ugbowo2, alt: "GPC Ugbowo", caption: "Atmosphere of worship and praise" },
    { src: ugbowo3, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo4, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo5, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo6, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo7, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo8, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo9, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo10, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo11, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
    { src: ugbowo12, alt: "GPC Ugbowo", caption: "Outreach to students and community" },
  ],
  "gospel-pillars-campus-fellowship-university-of-benin": [
    { src: uniben13, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben12, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben14, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben15, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben16, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben17, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben18, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben19, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben20, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben1, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben2, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben3, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben4, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben5, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben6, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben7, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben8, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben9, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben10, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
    { src: uniben11, alt: "GPCF UNIBEN", caption: "Festus Iyayi Hall, UNIBEN" },
  ],
  "gospel-pillars-campus-fellowship-igbinedion-university-okada": [
    { src: iuo1, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo2, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo3, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo4, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo5, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo6, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo7, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo8, alt: "GPCF IUO", caption: "Sunday Service" },
    { src: iuo9, alt: "GPCF IUO", caption: "Sunday Service" },
  ],
  "gospel-pillars-campus-fellowship-ambrose-alli-university": [
    { src: aau1, alt: "GPCF AAU", caption: "Sunday Service" },
    { src: aau2, alt: "GPCF AAU", caption: "Sunday Service" },
    { src: aau3, alt: "GPCF AAU", caption: "Sunday Service" },
    { src: aau4, alt: "GPCF AAU", caption: "Sunday Service" },
    { src: aau5, alt: "GPCF AAU", caption: "Sunday Service" },
    { src: aau6, alt: "GPCF AAU", caption: "Sunday Service" },
    { src: aau7, alt: "GPCF AAU", caption: "Sunday Service" },
  ],
  "gospel-pillars-campus-fellowship-auchi": [
    { src: picPlaceholder, alt: "GPCF AAU", caption: "Sunday Service" },
  ],
  "gospel-pillars-campus-community-church-ibadan": [
    { src: ibadan1, alt: "GPC Ibadan", caption: "Sunday Service" },
    { src: ibadan2, alt: "GPC Ibadan", caption: "Atmosphere of worship and praise" },
    { src: ibadan3, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan4, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan5, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan6, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan7, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan8, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan9, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan10, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan11, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan12, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan13, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan14, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan15, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan16, alt: "GPC Ibadan", caption: "Outreach to students and community" },
    { src: ibadan17, alt: "GPC Ibadan", caption: "Outreach to students and community" },
  ],
  "gospel-pillars-campus-community-church-ilorin": [
    { src: picPlaceholder, alt: "GPCC Ilorin", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-university-of-ibadan": [
    { src: picPlaceholder, alt: "GPF UI", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-obafemi-awolowo-university": [
    { src: picPlaceholder, alt: "GPF OAU", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-community-church-abeokuta": [
    { src: picPlaceholder, alt: "GPCC Abeokuta", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-community-church-akure": [
    { src: picPlaceholder, alt: "GPCC Akure", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-the-polytechnic-ibadan": [
    { src: picPlaceholder, alt: "GPCF The Polytechnic, Ibadan", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-community-church-yaba": [
    { src: yaba1, alt: "GPC Yaba", caption: "Service at Beverly Events Centre, Bariga" },
    { src: yaba2, alt: "GPC Yaba", caption: "Deep worship and ministry of the Word" },
    { src: yaba3, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba4, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba5, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba6, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba7, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba8, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba9, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba10, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba11, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
    { src: yaba12, alt: "GPC Yaba", caption: "Sanctuary at Beverly Events Centre, Bariga" },
  ],
  "gospel-pillars-campus-fellowship-university-of-lagos": [
    { src: picPlaceholder, alt: "GPCF UNILAG", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-lagos-state-university": [
    { src: picPlaceholder, alt: "GPCF LASU", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-yaba-college-of-technology": [
    { src: picPlaceholder, alt: "GPCF Yaba College of Technology", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-community-church-abraka": [
    { src: abraka1, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka2, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka3, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka4, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka5, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka6, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka7, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka8, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka9, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka10, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka11, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka12, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka13, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka14, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: abraka15, alt: "GPCC Abraka", caption: "Sunday Service" },
  ],
  "gospel-pillars-campus-fellowship-delta-state-university": [
    { src: picPlaceholder, alt: "GPCF DELSU", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-university-of-port-harcourt": [
    { src: uniport1, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: uniport2, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: uniport3, alt: "GPCC Abraka", caption: "Sunday Service" },
    { src: uniport4, alt: "GPCC Abraka", caption: "Sunday Service" },
  ],
  "gospel-pillars-campus-fellowship-federal-university-of-technology-owerri": [
    { src: picPlaceholder, alt: "GPCF FUTO", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-university-of-calabar": [
    { src: picPlaceholder, alt: "GPCF UNICAL", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-university-of-nigeria-nsukka": [
    { src: picPlaceholder, alt: "GPCF UNN", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-rivers-state-university": [
    { src: picPlaceholder, alt: "GPCF RSU", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-ignatius-ajuru-university-of-education": [
    { src: picPlaceholder, alt: "GPCF IAUE", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-novenna": [
    { src: picPlaceholder, alt: "GPCF NOVENNA", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-university-of-uyo": [
    { src: picPlaceholder, alt: "GPCF UNIUYO", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-community-church-minna": [
    { src: futmina1, alt: "GPCF FUTMINNA", caption: "Sunday Service at PTDF Hall Engineering" },
    { src: futmina4, alt: "GPCF FUTMINNA", caption: "Freshers orientation and welcoming students" },
    { src: futmina2, alt: "GPCF FUTMINNA", caption: "Worship and ministry of the Word" },
    { src: futmina3, alt: "GPCF FUTMINNA", caption: "Students gathering in unity" },
    { src: futmina5, alt: "GPCF FUTMINNA", caption: "Students gathering in unity" },
  ],
  "gospel-pillars-campus-fellowship-university-of-abuja": [
    { src: picPlaceholder, alt: "GPCF UNIABUJA", caption: "Sunday Service" }
  ],
  "gospel-pillars-campus-fellowship-university-of-jos": [
    { src: picPlaceholder, alt: "GPCF UNIJOS", caption: "Sunday Service" }
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
