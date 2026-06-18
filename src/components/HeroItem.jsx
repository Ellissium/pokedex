import React from "react";
import getHeroColors from "../utils/heroColors";
import classes from "./heroFeatures/HeroFeatures.module.css";
import unknownPokemonImage from "../assets/images/unknownPokemon.png";

const HeroItem = ({ hero, heroInfo }) => {
  let indexOfColor = 0;
  let heroColors = getHeroColors(hero);
  const featureStyles = {
    background: heroColors[0],
    borderColor: heroColors[1],
  };
  
  // Triggers the parent callback to pass the selected pokemon's details upward
  const onHeroClick = (e) => {
    heroInfo(hero);
  };
  
  return (
    <div
      className={classes.hero__features + " " + classes.hero__animation}
      onClick={onHeroClick}
      style={featureStyles}
    >
      <div className={classes.hero__content}>
        <div className={classes.hero__imageContainer}>
          <img
            className={classes.hero__image}
            alt={hero.name}
            src={hero.features.sprites.front_default || unknownPokemonImage}
          />
        </div>
        <strong className={classes.hero__name}>
          {hero.name + " #" + hero.id}
        </strong>
        <div className={classes.hero__types}>
          {hero.features.types.map((types) => (
            <div
              className={classes.hero__type + " " + classes.hero__list__type}
              key={types.slot}
              // Applies specific type colors sequentially from the generated array
              style={{ background: heroColors[indexOfColor++] }}
            >
              {types.type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
