const { fetchPokemonDataAndSpecies } = require('../script.js');

test('The pokedex is not empty', async () => {
  const results = await fetchPokemonDataAndSpecies();

  expect(results).not.toHaveLength(0);
}, 15000);
