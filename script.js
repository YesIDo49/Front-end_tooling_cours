async function fetchData(url) {
    return fetch(url).then((response) => response.json());
}

const promises = [];

async function fetchPokemonDataAndSpecies() {
    const promises = [];
    for (let i = 1; i <= 386; i++) {
        const pokemonDataPromise = fetchData(
            "https://pokeapi.co/api/v2/pokemon/" + i
        );
        const speciesDataPromise = fetchData(
            "https://pokeapi.co/api/v2/pokemon-species/" + i
        );

        promises.push(Promise.all([pokemonDataPromise, speciesDataPromise]));
    }

    return Promise.all(promises);
}

Promise.all(promises)
  .then((results) => {
    results.forEach(([pokemonData, speciesData]) => {
      const pokemon = {
        name: pokemonData.name,
        id: pokemonData.id,
        image: pokemonData.sprites.front_default,
        image_shiny: pokemonData.sprites.front_shiny,
        types: pokemonData.types,
        subname: speciesData.genera[7].genus,
        desc: speciesData.flavor_text_entries[8].flavor_text,
      };
        const loader = document.querySelector(".loader");
        loader.style.display = "none";
      addPokemon(pokemon);
    });
  })
  .catch((error) => {
    console.error("Une erreur s'est produite : ", error);
  });

function addPokemon(pokemon) {
  const containeur = document.querySelector(".pokelist");
  let isShiny = false;

  let imgPokemon = isShiny ? pokemon.image_shiny : pokemon.image;

  const newBox = document.createElement("div");
  newBox.classList.add("box");

  newBox.innerHTML = `
         <div class="box__info">
                        <div class="box__info__left">
                          <img src="${imgPokemon}" alt="${
                            pokemon.name
                          }'s sprite" class="box__left__img">
                          <button class="shiny-btn">
                            <i class="far fa-star"></i>
                          </button>
                        </div>
                
                        <div class="box__info__right">
                          <div class="box__info__right__name">
                            <h3>N°${pokemon.id} ${pokemon.name}</h3>
                          </div>
                          <div class="box__info__right__subname">
                            <h4>The ${pokemon.subname}</h4>
                          </div>
                          <div class="box__info__right__types">
                            <img src="./assets/icons/type_pokemon_${
                              pokemon.types[0].type.name
                            }.png" alt="${
                              pokemon.types[0].type.name
                            } type icon">
                            ${
                              pokemon.types[1]
                                ? `<img src="./assets/icons/type_pokemon_${pokemon.types[1].type.name}.png" alt="${pokemon.types[1].type.name} type icon">`
                                : ""
                            }
                          </div>
                        </div>
                    </div>
                    <div class="box__desc">
                        <p>${pokemon.desc}</p>
                    </div>
    `;

  containeur.appendChild(newBox);

  const shinyButton = newBox.querySelector(".shiny-btn");
  const shinyIcon = shinyButton.querySelector("i");

  shinyButton.addEventListener("click", () => {
    isShiny = !isShiny;
    let imgPokemon = isShiny ? pokemon.image_shiny : pokemon.image;
    isShiny
      ? shinyIcon.classList.remove("far")
      : shinyIcon.classList.remove("fas");
    isShiny ? shinyIcon.classList.add("fas") : shinyIcon.classList.add("far");
    const imgElement = newBox.querySelector(".box__left__img");
    imgElement.src = imgPokemon;
  });
}

module.exports = {
    fetchData,
    fetchPokemonDataAndSpecies,
};