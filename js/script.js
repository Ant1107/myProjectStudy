let numberOfFilms;

const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms() {

    let filmName;
    let filmRating;

    for (let i = 0; i < personalMovieDB.count;) {
        filmName = prompt("Один из последних просмотренных фильмов", '');
        if (filmName == '' || filmName == null || filmName.length > 50) {
            continue;
        } else {
            filmRating = prompt("На сколько оцените его?", '');
            if (filmRating == '' || filmRating == null || filmRating.length > 50) {
                continue;
            }
            personalMovieDB.movies[filmName] = filmRating;
            i++;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB() {
    personalMovieDB.privat || console.log(personalMovieDB);
}

function writeYourGenres() {
    let i = 1;
    while (i < 4) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i++}`, ''));
    }

}

start();
rememberMyFilms();
detectPersonalLevel();
showMyDB();
writeYourGenres();