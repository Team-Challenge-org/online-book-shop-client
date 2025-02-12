export type TCategory = {
  id?: number;
  name?: string;
  ukrName?: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ICategoriesSliceState {
  items: TCategory[];
  status: Status;
  selected: TCategory;
}
