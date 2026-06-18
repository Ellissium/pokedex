export default function getSortedHeroes(heroes, selectedSort) {
  if (selectedSort === "") {
    return heroes;
  } else {
    let hasProp = false;
    let sortedHeroes = [];
    
    // Iterates through heroes to filter them by the selected type
    heroes.forEach((element) => {
      // Checks if at least one type in the nested array matches the selected filter
      hasProp = element.features.types.some((element) => {
        if (element.type.name === selectedSort) {
          return true;
        }
        return false;
      });
      if (hasProp) sortedHeroes.push(element);
    });
    return sortedHeroes;
  }
}
