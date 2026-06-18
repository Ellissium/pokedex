import axios from "axios";

// Tracks the current pagination position for loading subsequent chunks of pokemon data
let offset = 0;

export default async function fetchHeroes(callback, toggleLoading) {
  try {
    const heroesList = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=12&offset=" + offset,
    );
    // Advances the offset forward by the limit amount for the next API call
    offset += 12;
    
    const detailPromises = heroesList.data.results.map(
      async (currentPokemon) => {
        // Extracts the unique ID directly from the resource URL string to avoid extra API hits
        const urlParts = currentPokemon.url.split("/");
        const realId = Number(urlParts[urlParts.length - 2]);
        currentPokemon.id = realId;

        const herostats = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + currentPokemon.id,
        );
        currentPokemon.features = herostats.data;

        return currentPokemon;
      },
    );
    // Executes all detail fetch requests concurrently for better performance
    const detailResults = await Promise.all(detailPromises);

    callback(detailResults);
  } catch (error) {
    console.log("Failed to fetch data from the server!", error);
  } finally {
    if (toggleLoading) {
      toggleLoading(false);
    }
  }
}
