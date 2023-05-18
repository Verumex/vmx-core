const cardWidth = 200;

export interface Member {
  name: string;
  css: string;
  cardWidth: number;
}

export const team: Member[] = [
  {
    name: "Chris",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    cardWidth,
  },
  {
    name: "François",
    css: "linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)",
    cardWidth,
  },
  {
    name: "Jan",
    css: "linear-gradient(135deg, #ed6fbb 0%, #ff9378 100%)",
    cardWidth,
  },
  {
    name: "Mihai",
    css: "linear-gradient(135deg, #b3e5fc 0%, #4fc3f7 100%)",
    cardWidth,
  },
  {
    name: "Noey",
    css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    cardWidth,
  },
  {
    name: "Oo",
    css: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    cardWidth,
  },
  {
    name: "Pin",
    css: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
    cardWidth,
  },
];
