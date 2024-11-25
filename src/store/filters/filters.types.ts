export type InitialStateType = {
  availability: string[];
  typesOfBook: string[];
  languages: string[];
  authors: string[];
  publishingHouse: string[];
  typesOfCover: string[];
  prices: {
    min: string;
    max: string;
  };
};

export type PayloadActionTypes = {
  type: string;
  name: string;
};
