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

//Способ 1

for (let i = 0; i < personalMovieDB.count;) {
    filmName = prompt("Один из последних просмотренных фильмов", '');
    if (filmName == '' || filmName == null || filmName.length > 50) {
        continue;
    } else {
        filmRating = prompt("На сколько оцените его?", '');
        if (filmRating == '' || filmRating == null || filmRating .length > 50) {
            continue;
        } 
    personalMovieDB.movies[filmName] = filmRating;
    i++;
    };
};

//Способ 2

// let i = 0;
// while (i < personalMovieDB.count) {
//     filmName = prompt("Один из последних просмотренных фильмов", '');
//     if (filmName === '' || filmName === null || filmName.length > 50) {
//         continue;
//     } else {
//         filmRating = prompt("На сколько оцените его?", '');
//         personalMovieDB.movies[filmName] = filmRating;
//     };
//     i++;
// }

//Способ 3

// let i = 0;
// do {
//     filmName = prompt("Один из последних просмотренных фильмов", '');
//     if (filmName === '' || filmName === null || filmName.length > 50) {
//         continue;
//     } else {
//         filmRating = prompt("На сколько оцените его?", '');
//         personalMovieDB.movies[filmName] = filmRating;
//     };
//     i++;
// }
// while (i < personalMovieDB.count);


if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
};


