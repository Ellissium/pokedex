import getHeroColors from "../../utils/heroColors";
import classes from "./HeroFeatures.module.css";
import unknownPokemonImage from "../../assets/images/unknownPokemon.png";

const HeroFeatures = ({ heroFeatures }) => {
  // Generates dynamic background and border styles based on the pokemon's specific types
  let heroColors = getHeroColors(heroFeatures);
  const featureStyles = {
    background: heroColors[0],
    borderColor: heroColors[1],
  };
  return (
    <div className={classes.hero__features} style={featureStyles}>
      <div className={classes.features__content}>
        <div className={classes.hero__imageContainer}>
          <img
            className={classes.hero__image}
            alt={heroFeatures.name}
            src={
              heroFeatures.features.sprites.front_default || unknownPokemonImage
            }
          />
        </div>
        <strong className={classes.hero__name}>
          {heroFeatures.name + " #" + heroFeatures.id}
        </strong>
        <div className={classes.features__list}>
          <table className={classes.features__table}>
            <tbody>
              <tr>
                <td>Type</td>
                <td>
                  {heroFeatures.features.types.map((types) => (
                    <div className={classes.hero__type} key={types.slot}>
                      {types.type.name}
                    </div>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{heroFeatures.features.stats[1].base_stat}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{heroFeatures.features.stats[2].base_stat}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{heroFeatures.features.stats[0].base_stat}</td>
              </tr>
              <tr>
                <td>SP Attack</td>
                <td>{heroFeatures.features.stats[3].base_stat}</td>
              </tr>
              <tr>
                <td>SP Defense</td>
                <td>{heroFeatures.features.stats[4].base_stat}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{heroFeatures.features.stats[5].base_stat}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{heroFeatures.features.weight}</td>
              </tr>
              <tr>
                <td>Total moves</td>
                <td>{heroFeatures.features.moves.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeroFeatures;
