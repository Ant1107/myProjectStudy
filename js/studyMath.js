let num;
let answer;
let a;
let b;
let c = Boolean(1);
let countWrongAnswers;
let countAnswers;
const wrongAnswers = {};


while (c) {
    if (answer == 1111) {
        break;
    }
    num = Math.round((Math.random() * 2.5))
    switch (num) {
        case 0:
            a = Math.round(Math.random() * 10);
            b = Math.round(Math.random() * 10);

            answer = +prompt(`${a} + ${b}`);

            if (a + b != answer) {
                alert(`${a + b}  😿`);
                countWrongAnswers++;
                wrongAnswers[String(a) +' + '+ String(b)] = answer;
            } else {
                alert('🥳 🥳 🥳');
                countAnswers++;
            }
            break;
        case 1:
            a = Math.round(Math.random() * 10);
            b = Math.round(Math.random() * 10);
            if (a >= b) {
                answer = +prompt(`${a} - ${b}`);
                if (a - b != answer) {
                    alert(`${a - b}  😿`);
                    countWrongAnswers++;
                    wrongAnswers[String(a) +' - '+ String(b)] = answer;
                }
            } else if (a < b) {
                answer = +prompt(`${b} - ${a}`);
                if (b - a != answer) {
                    alert(`${b - a}  😿`);
                    countWrongAnswers++;
                    wrongAnswers[String(b) +' - '+ String(a)] = answer;
                } else {
                    alert('🥳 🥳 🥳');
                    countAnswers++;
                }
            }
            break;
        case 2:
            a = Math.round(Math.random() * 10);
            b = Math.round((Math.random() * 2) + 1);
            answer = +prompt(`${a} * ${b}`);
            if (a * b != answer) {
                alert(`${a * b}  😿`);
                countWrongAnswers++;
                wrongAnswers[String(a) +' * '+ String(b)] = answer;
            } else {
                alert('🥳 🥳 🥳');
                countAnswers++;
            }
            break;
    }
}

if (countAnswers - countWrongAnswers > 10) {
    alert('Ты победил!🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳 🥳')
} else {
    alert('Ты проиграл 😿 😿 😿 😿 😿 😿 😿 😿 😿 😿 😿 😿 😿 😿 😿')
}
alert(JSON.stringify(wrongAnswers));