import { FormState } from '../pages/Forms/Forms';
import { CharacterResult, CurrentCard } from '../pages/Home/interfaces';

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
  formCard: Array<FormState>;
  results: Array<CharacterResult>;
  error: string;
  id: number;
  currentPage: number;
  currentCard: CurrentCard;
};

type searchValueType = {
  type: 'SAVE_SEARCH';
  payload: {
    searchValue: string;
  };
};

type StatusFilterType = {
  type: 'SAVE_STATUS';
  payload: {
    statusValue: string;
  };
};

type GenderFilterType = {
  type: 'SAVE_GENDER';
  payload: {
    genderValue: string;
  };
};

type SpeciesFilterType = {
  type: 'SAVE_SPECIES';
  payload: {
    speciesValue: string;
  };
};

type CardsType = {
  type: 'SAVE_CARDS';
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

type FormCardType = {
  type: 'SAVE_FORM_CARDS';
  payload: {
    formCard: Array<FormState>;
  };
};

type IdType = {
  type: 'SAVE_ID';
  payload: {
    id: number;
  };
};

type CurrentPageType = {
  type: 'SAVE_CURRENT_PAGE';
  payload: {
    currentPage: number;
  };
};

type CurrentCardType = {
  type: 'SAVE_CURRENT_CARD';
  payload: {
    currentCard: {
      id: number;
      created: string;
      image: string;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
    };
  };
};

export type ActionsType =
  | searchValueType
  | StatusFilterType
  | GenderFilterType
  | SpeciesFilterType
  | FormCardType
  | CardsType
  | IdType
  | CurrentPageType
  | CurrentCardType;
