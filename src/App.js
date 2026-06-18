import React, { useEffect, useState, useMemo } from "react";
import fetchHeroes from "./API/fetchHeroes";
import getSortedHeroes from "./utils/getSortedHeroes";
import HeroesList from "./components/HeroesList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MySelect from "./components/UI/select/MySelect";
import HeroFeatures from "./components/heroFeatures/HeroFeatures";
import classes from "./styles/App.module.css";
import "./styles/index.css";
import options from "./constants/constants";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [heroesFeatures, setHeroesFeatures] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [isHeroesLoading, setIsHeroesLoading] = useState(false);

  // Fetches the next chunk of data and appends it to the existing heroes list
  const loadMoreHeroes = () => {
    if (isHeroesLoading) return;

    setIsHeroesLoading(true);
    fetchHeroes((newHeroes) => {
      setHeroes((prev) => [...prev, ...newHeroes]);
    }, setIsHeroesLoading);
  };

  useEffect(() => {
    loadMoreHeroes();
  }, []);

  // Memoizes the sorting operation to avoid expensive calculations on every re-render
  const sortedHeroes = useMemo(() => {
    return getSortedHeroes(heroes, selectedSort);
  }, [heroes, selectedSort]);

  // Updates the state to display full features of the clicked hero card
  const heroInfo = (hero) => {
    setHeroesFeatures([hero]);
  };

  const sortHeroes = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className={classes.App}>
      <h1 className={classes.heroes__header}>
        <strong className={classes.heroes__logo}>Pokedex</strong>
      </h1>
      <MySelect
        value={selectedSort}
        onChange={sortHeroes}
        defaultValue=" - Filter by type - "
        options={options}
      />
      <div className={classes.heroes}>
        <div className={classes.heroes__container}>
          <div className={classes.heroes__table}>
            {isHeroesLoading && (
              <div className={classes.heroes__overlay}>
                <Loader />
              </div>
            )}
            <div className={classes.heroes__monitor}>
              {sortedHeroes.length !== 0 ? (
                <HeroesList heroInfo={heroInfo} heroes={sortedHeroes} />
              ) : !isHeroesLoading ? (
                <div className={classes.report}>No such pokemon!</div>
              ) : null}
            </div>
          </div>
          <div className={classes.heroes__button}>
            <MyButton onClick={loadMoreHeroes} disabled={isHeroesLoading}>
              <strong>{isHeroesLoading ? "Loading..." : "Load More"}</strong>
            </MyButton>
          </div>
        </div>
        <div className={classes.heroes__features}>
          {heroesFeatures.length !== 0 ? (
            heroesFeatures.map((heroFeatures) => (
              <HeroFeatures heroFeatures={heroFeatures} key={heroFeatures.id} />
            ))
          ) : (
            <div className={classes.report}>
              Choose a pokemon to see full features!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
