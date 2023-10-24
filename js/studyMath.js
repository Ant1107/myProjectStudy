let num;
let otvet;
let a;
let b;
let c = Boolean(1)

while (c) {

    num = Math.round((Math.random() * 2.5))
    switch (num) {
        case 0:
            a = Math.round(Math.random() * 10);
            b = Math.round(Math.random() * 10);

            otvet = +prompt(`${a} + ${b}`);

            if (a + b != otvet) {
                alert(`${a + b}  😿`);
            } else {
                alert('🥳 🥳 🥳');
            }
            break;
        case 1:
            a = Math.round(Math.random() * 10);
            b = Math.round(Math.random() * 10);
            if (a >= b) {
                otvet = +prompt(`${a} - ${b}`);
                if (a - b != otvet) {
                    alert(`${a - b}  😿`);
                }
            } else if (a < b) {
                otvet = +prompt(`${b} - ${a}`);
                if (b - a != otvet) {
                    alert(`${b - a}  😿`);
                } else {
                    alert('🥳 🥳 🥳');
                }
            }
            break;
        case 2:
            a = Math.round(Math.random() * 10);
            b = Math.round((Math.random() * 2) + 1);
            otvet = +prompt(`${a} * ${b}`);
            if (a * b != otvet) {
                alert(`${a * b}  😿`);
            } else {
                alert('🥳 🥳 🥳');
            }
            break;
    }
}