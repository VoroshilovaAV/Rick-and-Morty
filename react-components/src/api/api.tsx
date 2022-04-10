const base = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async () => {
  try {
    const response = await fetch(`${base}`);
    const data = response.json();
    console.log(data);
    //(await fetch(`${base}`)).json();
  } catch (err) {
    console.log(err);
  }
};

export const getCharacter = async (id: number) => {
  try {
    (await fetch(`${base}/${id}`)).json();
  } catch (err) {
    console.log(err);
  }
};
