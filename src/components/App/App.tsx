import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import FilmCard from "../FilmCard/film-card";
import {getRandomInteger} from "../../utils/common";
import {generateFilm} from "../../mock/film";


const FILM_COUNT_PER_STEP = 5;
const FILMS_EXTRA_COUNT = 2;
const GENERATE_FILMS_COUNT_MIN = 15;
const GENERATE_FILMS_COUNT_MAX = 20;


const generateFilmsData = () => {
 /*   const count = getRandomInteger(GENERATE_FILMS_COUNT_MIN, GENERATE_FILMS_COUNT_MAX);*/

    return generateFilm()
};

const filmsData = generateFilmsData();

console.log({filmsData});

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FilmCard filmadata={filmsData}></FilmCard>
      </header>
    </div>
  );
}

export default App;
