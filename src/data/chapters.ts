export type Chapter = {
  id: string;
  name: string;
  region: string;
  city: string;
  state: string;
  address: string;
  serviceTime: string;
  contact: string;
  mapX: number;
  mapY: number;
};

const placeholder = "[Add confirmed location details]";
const contactPlaceholder = "[Add confirmed church contact]";

const chapterNames = [
  ["Central Region", "Gospel Pillars Church Ugbowo", "Benin", "Edo", " Precious Palm Royal Hotel, Opp Ekosodin junction, Benin city", "Sundays: 8:30AM, Wednesdays: 6:00PM", "+234 810 040 6149,+234 701 098 5430, +234 704 192 2343"], ["Central Region", "Gospel Pillars Campus Fellowship University of Benin", "Benin", "Edo", "Festus Iyayi Hall, opp Halls of Residence", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 913 394 7184"], ["Central Region", "Gospel Pillars Campus Fellowship Igbinedion University, Okada", "Okada", "Edo", "3rd, Church street, Crown Estate Okada, Benin city", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 812 071 4926 , +234 810 712 8938"], ["Central Region", "Gospel Pillars Campus Fellowship Ambrose Alli University", "Ekpoma", "Edo", "Opposite Oil Well Restaurant, Main Campus, Ambrose Alli University, Ekpoma, Edo state", "Sundays: 8:30AM, Thursdays: 5:00PM", "+234 810 038 8940, +234 802 206 5572"], ["Central Region", "Gospel Pillars Campus Fellowship Auchi", "Auchi", "Edo", "30 Old Nepa Road behind Standard City Lodge Auchi", "Sundays: 8:30AM, Thursdays: 5:30PM", "+234 903 195 9081"],
  ["Western Region", "Gospel Pillars Church Ibadan", "Ibadan", "Oyo", "address", "service", "contact"], ["Western Region", "Gospel Pillars Campus Community Church Ilorin", "Ilorin", "Kwara", "address", "service", "contact"], ["Western Region", "Gospel Pillars Campus Fellowship University of Ibadan", "Ibadan", "Oyo", "address", "service", "contact"], ["Western Region", "Gospel Pillars Campus Fellowship Obafemi Awolowo University", "Ile-Ife", "Osun", "address", "service", "contact"], ["Western Region", "Gospel Pillars Campus Community Church Abeokuta", "Abeokuta", "Ogun", "address", "service", "contact"], ["Western Region", "Gospel Pillars Church Akure", "Akure", "Ondo", "address", "service", "contact"], ["Western Region", "Gospel Pillars Campus Fellowship The Polytechnic, Ibadan", "Ibadan", "Oyo", "address", "service", "contact"],
  ["Lagos Region", "Gospel Pillars Church Yaba", "Yaba", "Lagos", "Beverly Events Centre, 33-37 Shogbamu Street, by New Garage bus-stop, Bariga, Lagos", "Sundays: 8:30AM, Wednesdays: 7:00PM", "contact"], ["Lagos Region", "Gospel Pillars Campus Fellowship University of Lagos", "Akoka", "Lagos", "address", "service", "contact"], ["Lagos Region", "Gospel Pillars Campus Fellowship Lagos State University", "Ojo", "Lagos", "address", "service", "contact"], ["Lagos Region", "Gospel Pillars Campus Fellowship Yaba College of Technology", "Yaba", "Lagos", "address", "service", "contact"],
  ["Southern Region", "Gospel Pillars Campus Community Church Abraka", "Abraka", "Delta", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship Delta State University", "Abraka", "Delta", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship University of Port-Harcourt", "Port Harcourt", "Rivers", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship Federal University of Technology Owerri", "Owerri", "Imo", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship University of Calabar", "Calabar", "Cross River", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Felloship University of Nigeria, Nsukka", "Nsukka", "Enugu", "Roar hub, beside faculty of arts lecture theater", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship Rivers State University", "Port Harcourt", "Rivers", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship Ignatius Ajuru University of Education", "Port Harcourt", "Rivers", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship NOVENNA", "Ogume", "Delta", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship University of Uyo", "Uyo", "Akwa Ibom", "address", "service", "contact"],
  ["Northern Region", "Gospel Pillars Campus Fellowship Federal University of Technology, Minna", "Minna", "Niger", "PTDF hall engineering, opposite volleyball court , FUTMINNA", "Sundays: 8:30PM", "+234 913 160 1110"], ["Northern Region", "Gospel Pillars Campus Fellowship University of Abuja", "Abuja", "FCT", "English Department Classroom opposite Faculty of Arts, Uniabuja", "service", "contact"], ["Northern Region", "Gospel Pillars Campus Fellowship University of Jos", "Jos", "Plateau", "PG classroom 1, physical health and human Kinetics Department, University of Jos, Naragua", "service", "contact"]
] as const;

export const chapters: Chapter[] = chapterNames.map(([region, name, city = placeholder, state = placeholder, address = placeholder, serviceTime = placeholder, contact = contactPlaceholder], index) => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  region,
  city,
  state,
  address,
  serviceTime,
  contact,
  mapX: 80 + (index % 8) * 85,
  mapY: 70 + Math.floor(index / 8) * 125,
}));
