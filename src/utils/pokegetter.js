export const pokeGetter = async (url = 'https://pokeapi.co/api/v2/pokemon/?limit=20') => {
  const responseObject = await fetch(url)
    .then(response => response.json())
    .then(async data => {
      const { next, results } = data;
      const nextUrl = next;
      const pokemon = await Promise.all(results.map(async ({ name, url }) => {
        let image = await spriteGetter(url);
        return { image, name }
      })).then(data => data);
      return {
        nextUrl,
        pokemon
      };
    });
  return responseObject;
};

const spriteGetter = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.sprites.front_default;
    });
};