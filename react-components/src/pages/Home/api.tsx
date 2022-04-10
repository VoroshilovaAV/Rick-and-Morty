import { CharacterResult, CharactersData } from './interfaces';

const base = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async () => {
  try {
    const response = await fetch(`${base}`);
    const data: CharactersData = await response.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getCharacter = async (id: number) => {
  try {
    const response = await fetch(`${base}/${id}`);
    const data: CharacterResult = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
