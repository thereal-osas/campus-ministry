export type Chapter = {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  serviceTime: string;
  contact: string;
  mapX: number;
  mapY: number;
};

export const chapters: Chapter[] = [
  { id: "unilag", name: "University of Lagos", city: "Lagos", state: "Lagos State", address: "University of Lagos, Akoka, Yaba, Lagos", serviceTime: "Sundays, 4:00 PM", contact: "unilag@gospelpillars.org.gh", mapX: 82, mapY: 430 },
  { id: "ui", name: "University of Ibadan", city: "Ibadan", state: "Oyo State", address: "University of Ibadan, Ibadan, Oyo State", serviceTime: "Sundays, 3:00 PM", contact: "ibadan@gospelpillars.org.gh", mapX: 110, mapY: 382 },
  { id: "abu", name: "University of Abuja", city: "Abuja", state: "FCT", address: "University of Abuja, Gwagwalada, Abuja", serviceTime: "Sundays, 4:00 PM", contact: "abuja@gospelpillars.org.gh", mapX: 304, mapY: 288 },
  { id: "uniben", name: "University of Benin", city: "Benin City", state: "Edo State", address: "University of Benin, Ugbowo Campus, Benin City", serviceTime: "Sundays, 4:00 PM", contact: "uniben@gospelpillars.org.gh", mapX: 203, mapY: 440 },
  { id: "unn", name: "University of Nigeria", city: "Nsukka", state: "Enugu State", address: "University of Nigeria, Nsukka, Enugu State", serviceTime: "Sundays, 3:00 PM", contact: "unn@gospelpillars.org.gh", mapX: 299, mapY: 410 },
  { id: "uniport", name: "University of Port Harcourt", city: "Port Harcourt", state: "Rivers State", address: "University of Port Harcourt, Choba, Rivers State", serviceTime: "Sundays, 4:00 PM", contact: "uniport@gospelpillars.org.gh", mapX: 280, mapY: 567 },
  { id: "abu-zaria", name: "Ahmadu Bello University", city: "Zaria", state: "Kaduna State", address: "Ahmadu Bello University, Samaru, Zaria", serviceTime: "Sundays, 3:00 PM", contact: "abu-zaria@gospelpillars.org.gh", mapX: 350, mapY: 145 },
  { id: "unijos", name: "University of Jos", city: "Jos", state: "Plateau State", address: "University of Jos, Bauchi Road, Jos", serviceTime: "Sundays, 4:00 PM", contact: "unijos@gospelpillars.org.gh", mapX: 380, mapY: 240 },
  { id: "oau", name: "Obafemi Awolowo University", city: "Ile-Ife", state: "Osun State", address: "Obafemi Awolowo University, Ile-Ife, Osun State", serviceTime: "Sundays, 3:00 PM", contact: "oau@gospelpillars.org.gh", mapX: 137, mapY: 400 },
  { id: "lasu", name: "Lagos State University", city: "Ojo", state: "Lagos State", address: "Lagos State University, Ojo, Lagos", serviceTime: "Sundays, 4:00 PM", contact: "lasu@gospelpillars.org.gh", mapX: 65, mapY: 420 },
  { id: "covenant", name: "Covenant University", city: "Ota", state: "Ogun State", address: "Covenant University, Ota, Ogun State", serviceTime: "Sundays, 4:00 PM", contact: "covenant@gospelpillars.org.gh", mapX: 92, mapY: 360 },
  { id: "futa", name: "Federal University of Technology Akure", city: "Akure", state: "Ondo State", address: "Federal University of Technology, Akure, Ondo State", serviceTime: "Sundays, 3:00 PM", contact: "futa@gospelpillars.org.gh", mapX: 180, mapY: 370 },
  { id: "unilorin", name: "University of Ilorin", city: "Ilorin", state: "Kwara State", address: "University of Ilorin, Ilorin, Kwara State", serviceTime: "Sundays, 3:00 PM", contact: "unilorin@gospelpillars.org.gh", mapX: 190, mapY: 270 },
  { id: "unimaid", name: "University of Maiduguri", city: "Maiduguri", state: "Borno State", address: "University of Maiduguri, Maiduguri, Borno State", serviceTime: "Sundays, 3:00 PM", contact: "unimaid@gospelpillars.org.gh", mapX: 610, mapY: 105 },
  { id: "buk", name: "Bayero University Kano", city: "Kano", state: "Kano State", address: "Bayero University, Kano, Kano State", serviceTime: "Sundays, 4:00 PM", contact: "buk@gospelpillars.org.gh", mapX: 490, mapY: 85 },
  { id: "udus", name: "Usmanu Danfodiyo University", city: "Sokoto", state: "Sokoto State", address: "Usmanu Danfodiyo University, Sokoto", serviceTime: "Sundays, 3:00 PM", contact: "udus@gospelpillars.org.gh", mapX: 245, mapY: 65 },
  { id: "kaduna", name: "Kaduna State University", city: "Kaduna", state: "Kaduna State", address: "Kaduna State University, Kaduna", serviceTime: "Sundays, 4:00 PM", contact: "kasu@gospelpillars.org.gh", mapX: 390, mapY: 125 },
  { id: "fudma", name: "Federal University Dutsin-Ma", city: "Dutsin-Ma", state: "Katsina State", address: "Federal University Dutsin-Ma, Katsina State", serviceTime: "Sundays, 3:00 PM", contact: "fudma@gospelpillars.org.gh", mapX: 430, mapY: 48 },
  { id: "futa-yola", name: "Modibbo Adama University", city: "Yola", state: "Adamawa State", address: "Modibbo Adama University, Yola, Adamawa State", serviceTime: "Sundays, 4:00 PM", contact: "yola@gospelpillars.org.gh", mapX: 610, mapY: 210 },
  { id: "unical", name: "University of Calabar", city: "Calabar", state: "Cross River State", address: "University of Calabar, Calabar, Cross River State", serviceTime: "Sundays, 4:00 PM", contact: "unical@gospelpillars.org.gh", mapX: 380, mapY: 530 },
  { id: "akwa-ibom", name: "University of Uyo", city: "Uyo", state: "Akwa Ibom State", address: "University of Uyo, Uyo, Akwa Ibom State", serviceTime: "Sundays, 3:00 PM", contact: "uniuyo@gospelpillars.org.gh", mapX: 330, mapY: 510 },
  { id: "funaab", name: "Federal University of Agriculture Abeokuta", city: "Abeokuta", state: "Ogun State", address: "Federal University of Agriculture, Abeokuta", serviceTime: "Sundays, 4:00 PM", contact: "funaab@gospelpillars.org.gh", mapX: 105, mapY: 345 },
  { id: "eksu", name: "Ekiti State University", city: "Ado-Ekiti", state: "Ekiti State", address: "Ekiti State University, Ado-Ekiti", serviceTime: "Sundays, 3:00 PM", contact: "eksu@gospelpillars.org.gh", mapX: 165, mapY: 330 },
  { id: "nile", name: "Nile University of Nigeria", city: "Abuja", state: "FCT", address: "Nile University, Jabi Airport Road, Abuja", serviceTime: "Sundays, 4:00 PM", contact: "nile@gospelpillars.org.gh", mapX: 318, mapY: 300 },
  { id: "unizik", name: "Nnamdi Azikiwe University", city: "Awka", state: "Anambra State", address: "Nnamdi Azikiwe University, Awka, Anambra State", serviceTime: "Sundays, 3:00 PM", contact: "unizik@gospelpillars.org.gh", mapX: 275, mapY: 430 },
];
