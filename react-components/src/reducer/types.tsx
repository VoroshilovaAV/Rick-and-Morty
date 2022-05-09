import { CharacterResult } from '../pages/Home/interfaces';

export type GlobalStateType = {
  searchValue: string;
  statusValue: string;
  genderValue: string;
  speciesValue: string;
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<CharacterResult>;
  error: string;
};

type searchValueType = {
  type: 'SAVE_VALUE';
  payload: {
    searchValue: string;
  };
};

type StatusFilterType = {
  type: 'SAVE_VALUE';
  payload: {
    statusValue: string;
  };
};

type GenderFilterType = {
  type: 'SAVE_VALUE';
  payload: {
    genderValue: string;
  };
};

type SpeciesFilterType = {
  type: 'SAVE_VALUE';
  payload: {
    speciesValue: string;
  };
};

type CardsType = {
  type: 'SAVE_VALUE';
  payload: {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Array<CharacterResult>;
    error: string;
  };
};

export type ActionsType =
  | searchValueType
  | StatusFilterType
  | GenderFilterType
  | SpeciesFilterType
  | CardsType;
