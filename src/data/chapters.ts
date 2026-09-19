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
  ["Central Region", "GPC Ugbowo"], ["Central Region", "GPCF Uniben"], ["Central Region", "GPCF IUO"], ["Central Region", "GPCF AAU"], ["Central Region", "GPCF Auchi"],
  ["Western Region", "GPC Ibadan"], ["Western Region", "GPCC Ilorin"], ["Western Region", "GPCF UI"], ["Western Region", "GPCF OAU"], ["Western Region", "GPC Abeokuta"], ["Western Region", "GPC Akure"], ["Western Region", "GPCF TPI"],
  ["Lagos Region", "GPC Yaba"], ["Lagos Region", "GPCF UNILAG"], ["Lagos Region", "GPCF LASU"], ["Lagos Region", "GPCF YCT"],
  ["Southern Region", "GPCC Abraka"], ["Southern Region", "GPCF DELSU"], ["Southern Region", "GPCF UNIPORT"], ["Southern Region", "GPCF FUTO"], ["Southern Region", "GPCF UNICAL"], ["Southern Region", "GPCF UNN"], ["Southern Region", "GPCF RSU"], ["Southern Region", "GPCF IAUE"], ["Southern Region", "GPCF NOVENNA"], ["Southern Region", "GPCF UNIUYO"],
  ["Northern Region", "GPCF FUTMINNA"], ["Northern Region", "GPCF UNIABUJA"], ["Northern Region", "GPCF UNIJOS"],
] as const;

export const chapters: Chapter[] = chapterNames.map(([region, name], index) => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  region,
  city: placeholder,
  state: placeholder,
  address: placeholder,
  serviceTime: placeholder,
  contact: contactPlaceholder,
  mapX: 80 + (index % 8) * 85,
  mapY: 70 + Math.floor(index / 8) * 125,
}));
