export default function getHeroColors(heroFeatures) {
  let heroBackgroundColor = "gray";
  let heroBorderColor = "black";
  let heroTypes = [];
  let heroColors = [];

  heroFeatures.features.types.forEach((element) => {
    heroTypes.push(element.type.name);
  });

  // Sets the main background color based on the pokemon's primary type
  switch (heroTypes[0]) {
    case "normal":
      heroBackgroundColor = "#FFDCC4";
      break;
    case "fighting":
      heroBackgroundColor = "#FFC4C4";
      break;
    case "flying":
      heroBackgroundColor = "#97C4BE";
      break;
    case "poison":
      heroBackgroundColor = "#BE9EF6";
      break;
    case "ground":
      heroBackgroundColor = "#8B765F";
      break;
    case "rock":
      heroBackgroundColor = "#7A8182";
      break;
    case "bug":
      heroBackgroundColor = "#FFE9A8";
      break;
    case "ghost":
      heroBackgroundColor = "#D9D9E0";
      break;
    case "steel":
      heroBackgroundColor = "#5E7B80";
      break;
    case "fire":
      heroBackgroundColor = "#FFB79A";
      break;
    case "water":
      heroBackgroundColor = "#9AD1F5";
      break;
    case "grass":
      heroBackgroundColor = "#ACDFAC";
      break;
    case "electric":
      heroBackgroundColor = "#FFF28F";
      break;
    case "psychic":
      heroBackgroundColor = "#B2A2CD";
      break;
    case "ice":
      heroBackgroundColor = "#E3F2FB";
      break;
    case "dragon":
      heroBackgroundColor = "#72ADA0";
      break;
    case "dark":
      heroBackgroundColor = "#8484BA";
      break;
    case "fairy":
      heroBackgroundColor = "#E0ACC9";
      break;
    case "unknown":
      heroBackgroundColor = "#D6D8DD";
      break;
    case "shadow":
      heroBackgroundColor = "#36425D";
      break;
    default:
      heroBackgroundColor = "#D6D8DD";
      break;
  }

  // Sets the card border color based on the pokemon's secondary type (if available)
  switch (heroTypes[1]) {
    case "normal":
      heroBorderColor = "#FFDCC4";
      break;
    case "fighting":
      heroBorderColor = "#FFC4C4";
      break;
    case "flying":
      heroBorderColor = "#97C4BE";
      break;
    case "poison":
      heroBorderColor = "#BE9EF6";
      break;
    case "ground":
      heroBorderColor = "#8B765F";
      break;
    case "rock":
      heroBorderColor = "#7A8182";
      break;
    case "bug":
      heroBorderColor = "#FFE9A8";
      break;
    case "ghost":
      heroBorderColor = "#D9D9E0";
      break;
    case "steel":
      heroBorderColor = "#5E7B80";
      break;
    case "fire":
      heroBorderColor = "#FFB79A";
      break;
    case "water":
      heroBorderColor = "#9AD1F5";
      break;
    case "grass":
      heroBorderColor = "#ACDFAC";
      break;
    case "electric":
      heroBorderColor = "#FFF28F";
      break;
    case "psychic":
      heroBorderColor = "#B2A2CD";
      break;
    case "ice":
      heroBorderColor = "#E3F2FB";
      break;
    case "dragon":
      heroBorderColor = "#72ADA0";
      break;
    case "dark":
      heroBorderColor = "#8484BA";
      break;
    case "fairy":
      heroBorderColor = "#E0ACC9";
      break;
    case "unknown":
      heroBorderColor = "#D6D8DD";
      break;
    case "shadow":
      heroBorderColor = "#36425D";
      break;
    default:
      heroBorderColor = "#D6D8DD";
      break;
  }

  heroColors.push(heroBackgroundColor);
  heroColors.push(heroBorderColor);

  return heroColors;
}
