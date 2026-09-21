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
  ["Central Region", "Gospel Pillars Campus Community Church Ugbowo, Benin City", "Benin", "Edo", " Precious Palm Royal Hotel, Opp Ekosodin junction, Benin city", "Sundays: 8:30AM, Wednesdays: 6:00PM", "+234 810 040 6149, +234 701 098 5430"], ["Central Region", "Gospel Pillars Campus Fellowship University of Benin", "Benin", "Edo", "Festus Iyayi Hall, opp Halls of Residence", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 913 394 7184"], ["Central Region", "Gospel Pillars Campus Fellowship Igbinedion University, Okada", "Okada", "Edo", "3rd, Church street, Crown Estate Okada, Benin city", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 812 071 4926 , +234 810 712 8938"], ["Central Region", "Gospel Pillars Campus Fellowship Ambrose Alli University", "Ekpoma", "Edo", "Opposite Oil Well Restaurant, Main Campus, Ambrose Alli University, Ekpoma, Edo state", "Sundays: 8:30AM, Thursdays: 5:00PM", "+234 810 038 8940, +234 802 206 5572"], ["Central Region", "Gospel Pillars Campus Fellowship Auchi", "Auchi", "Edo", "30 Old Nepa Road behind Standard City Lodge Auchi", "Sundays: 8:30AM, Thursdays: 5:30PM", "+234 903 195 9081"],
  ["Western Region", "Gospel Pillars Campus Community Church, Ibadan", "Ibadan", "Oyo", "Gospel pillars church the Raven Hub No116 Obafemi Awolowo way, Aweni Arena Oke Ado Road Ibadan", "Sundays: 8:30AM, Wednesdays: 6:00PM", "contact"], ["Western Region", "Gospel Pillars Campus Community Church Ilorin", "Ilorin", "Kwara", "Bekadims, Oke-odo, Ilorin, Kwara State", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 818 524 5295"], ["Western Region", "Gospel Pillars Campus Fellowship University of Ibadan", "Ibadan", "Oyo", "address", "service", "contact"], ["Western Region", "Gospel Pillars Campus Fellowship Obafemi Awolowo University", "Ile-Ife", "Osun", "Students Union Building(SUB, last Hall upstairs. OAU, ile ife, Osun State", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 901 352 6288, +234 805 981 0352, +234 816 252 9785"], ["Western Region", "Gospel Pillars Campus Community Church Abeokuta", "Abeokuta", "Ogun", "BG Hotel and Suites Opposite MTN Camp Junction Ogun State", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 916 071 7643, +234 812 849 1415"], ["Western Region", "Gospel Pillars Campus Community Church Akure", "Akure", "Ondo", "ETF 750 Capacity hall, North gate FUTA. Akure ", "Sundays: 9:00AM, Wednesdays: 6:00PM", "+234 813 622 8681, +234 816 754 3622, +234 907 157 9540"], ["Western Region", "Gospel Pillars Campus Fellowship The Polytechnic, Ibadan", "Ibadan", "Oyo", "address", "service", "contact"],
  ["Lagos Region", "Gospel Pillars Campus Community Church, Yaba", "Yaba", "Lagos", "Beverly Events Centre, 33-37 Shogbamu Street, by New Garage bus-stop, Bariga, Lagos", "Sundays: 8:30AM, Wednesdays: 7:00PM", "contact"], ["Lagos Region", "Gospel Pillars Campus Fellowship University of Lagos", "Akoka", "Lagos", "Function Room, Unilag Guest House, Unilversity of Lagos", "Sundays: 8:30AM, Thursdays: 6:00PM", "contact"], ["Lagos Region", "Gospel Pillars Campus Fellowship Lagos State University", "Ojo", "Lagos", "Faculty of Education, Theatre2, LASU Ojo", "Sundays: 9:00AM, Thursdays: 5:30PM", "+234 904 469 2078, +234 915 843 8840"], ["Lagos Region", "Gospel Pillars Campus Fellowship Yaba College of Technology", "Yaba", "Lagos", "address", "service", "contact"],
  ["Southern Region", "Gospel Pillars Campus Community Church Abraka", "Abraka", "Delta", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship Delta State University", "Abraka", "Delta", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship University of Port-Harcourt", "Port Harcourt", "Rivers", "Wing D7, TETFUND by Senate  Building, Abuja Campus, Choba", "Sundays: 9:00AM, Wednesdays: 5:30PM", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship Federal University of Technology Owerri", "Owerri", "Imo", "Federal University of Technology Owerri, Futo Guest House", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 903 227 9577"], ["Southern Region", "Gospel Pillars Campus Fellowship University of Calabar", "Calabar", "Cross River", "54 School Road, Satellite Town Calabar", "Sundays: 8:30AM, Wednesdays: 6:00PM", "+234 802 268 7149"], ["Southern Region", "Gospel Pillars Campus Felloship University of Nigeria, Nsukka", "Nsukka", "Enugu", "Roar hub, beside faculty of arts lecture theater", "Sundays: 8:30AM, Thursdays: 5:00PM", "+234 815 350 0537, +234 808 749 5890"], ["Southern Region", "Gospel Pillars Campus Fellowship Rivers State University", "Port Harcourt", "Rivers", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship Ignatius Ajuru University of Education", "Port Harcourt", "Rivers", "New Lecture Hall downstairs, Opp Stella Hostel, IAUE Campus", "Sundays: 9:00AM, Thursdays: 6:00PM", "+234 913 297 5942"], ["Southern Region", "Gospel Pillars Campus Fellowship NOVENNA", "Ogume", "Delta", "address", "service", "contact"], ["Southern Region", "Gospel Pillars Campus Fellowship University of Uyo", "Uyo", "Akwa Ibom", "University of Uyo, Town Campus Ikpa Road, Uyo, Akwa Ibom State", "Sundays: 9:00AM, Thursdays: 5:00PM", "+234 814 242 9543"],
  ["Northern Region", "Gospel Pillars Campus Community Church, Minna", "Minna", "Niger", "Close to Hannifa Phase 1, opposite FUTMINNA, off Talba Road, Minna. Niger State", "Sundays: 8:30PM, Thursdays: 5:30PM", "+234 913 160 1110"], ["Northern Region", "Gospel Pillars Campus Fellowship University of Abuja", "Abuja", "FCT", "English Department Classroom opposite Faculty of Arts, Uniabuja", "Sundays: 8:30AM, Thursdays: 6:00PM", "+234 812 391 0465"], ["Northern Region", "Gospel Pillars Campus Fellowship University of Jos", "Jos", "Plateau", "PG classroom 1, physical health and human Kinetics Department, University of Jos, Naraguta", "Sundays: 8:30AM, Wednesdays: 6:00PM", "+234 704 551 4032"]
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
