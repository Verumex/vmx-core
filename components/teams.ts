import shuffle from "lodash/shuffle";

export interface MemberCardDetails {
  name: string;
  css: string;
}

const colors = [
  "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  "linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)",
  "linear-gradient(135deg, #ed6fbb 0%, #ff9378 100%)",
  "linear-gradient(135deg, #b3e5fc 0%, #4fc3f7 100%)",
  "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
  "linear-gradient(135deg, #FFB5A7 0%, #FCD5CE 100%)",
  "linear-gradient(135deg, #FDCB92 0%, #D1FDFF 100%)",
];

export type Team = "amw" | "core" | "dmw" | "fmw";
type TeamDetails = {
  name: string;
  members: string[];
};

export const teams: Record<Team, TeamDetails> = {
  amw: {
    name: "Asset Management Workstream",
    members: ["Adriana", "Alin", "Andreea", "Andrei", "Ciprian", "Cristian", "Vignesh"],
  },
  core: {
    name: "Core",
    members: ["Chris", "François", "Jan", "Mihai", "Noey", "Oo", "Pin"],
  },
  dmw: {
    name: "Data Management Workstream",
    members: ["Andreea", "Costel", "Cristian", "Mihai A"],
  },
  fmw: {
    name: "Financial Management Workstream",
    members: ["Andreea", "Mihai A", "Mihai D", "Mihai G", "Raluca"],
  },
};

export const memberCardDetails = (members: string[]): MemberCardDetails[] => {
  const randomizedColors = shuffle(colors);

  return members.map((member, index) => ({
    name: member,
    css: randomizedColors[index],
  }));
};
