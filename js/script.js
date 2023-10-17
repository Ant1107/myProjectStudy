const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName;
let filmRating;

for (let i = 0; i < personalMovieDB.count; i++) {
    filmName = prompt("Один из последних просмотренных фильмов", '');
    filmRating = prompt("На сколько оцените его?", '');
    if (filmName === '' || filmName === null || filmName.length > 50) {
        continue;
    } else {
        personalMovieDB.movies[filmName] = filmRating;
    };
};

if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
    alert("Выклассический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
};

