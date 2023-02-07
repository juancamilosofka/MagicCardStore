

export type ForeignName = {
  name: string;
  text: string;
  type: string;
  flavor: string;
  imageUrl: string;
  language: string;
  multiverseid: string;
}

export type  Legality ={
  format: string;
  legality: string;
}

export type Card = {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  flavor: string;
  artist: string;
  number: string;
  power: string;
  toughness: string;
  layout: string;
  multiverseid: string;
  imageUrl: string;
  foreignNames: ForeignName[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: Legality[];
  id: string;
}

export type MagicCard = {
  cards: Card[];
}

