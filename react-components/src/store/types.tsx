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

export type CardsPayloadType = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<CharacterResult>;
  error: string;
};

export type FormCardPayloadType = {
  formCard: Array<FormState>;
};

export type CurrentCardPayloadType = {
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
