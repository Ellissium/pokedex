import React, { useEffect, useRef } from "react";
import HeroItem from "./HeroItem";
import classes from "../styles/App.module.css";

const HeroesList = ({ heroes, heroInfo }) => {
  const listRef = useRef(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!heroes || heroes.length === 0) return;

    // Skips the auto-scroll effect on the initial data chunk loading
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    // Smoothly scrolls the parent container down when subsequent data chunks arrive
    if (listRef.current) {
      const monitor = listRef.current.parentElement;

      if (monitor) {
        monitor.scrollTo({
          top: monitor.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [heroes]);

  return (
    <div ref={listRef} className={classes.heroes__list}>
      {heroes.map((hero) => (
        <HeroItem heroInfo={heroInfo} hero={hero} key={hero.id} />
      ))}
    </div>
  );
};

export default HeroesList;
