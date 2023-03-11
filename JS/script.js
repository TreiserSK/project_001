'use strict'

let numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);



let lastMovie = prompt('Один из последний просмотренных фильмов?', ''),
    movieRate = prompt('Насколько вы его оцените?', '');

let lastMovie2 = prompt('Один из последний просмотренных фильмов?', ''),
    movieRate2 = prompt('Насколько вы его оцените?', '')


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.movies[lastMovie] = movieRate;
personalMovieDB.movies[lastMovie2] = movieRate2;

console.log (personalMovieDB);