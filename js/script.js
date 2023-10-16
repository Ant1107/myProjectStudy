"use strict";

let test = alert(Hello);
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "number");

if (typeof +numberOfFilms == Number && +numberOfFilms <= 0) {
    var personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
} else {
    numberOfFilms = prompt("Вы ввели не корректное значение, введите число:");
}

personalMovieDB.movies.prompt("Один из просмотренных ранее фильмов") = prompt("Оцените");
