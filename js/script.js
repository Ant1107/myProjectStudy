
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[prompt("Один из последних фильмов")] = prompt("На сколько оцените его?", '');
personalMovieDB.movies[prompt("Один из последних фильмов")] = prompt("На сколько оцените его?", '');


console.log(personalMovieDB);
