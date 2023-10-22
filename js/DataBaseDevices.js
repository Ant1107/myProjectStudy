class Device {
    constructor(article, nameDevice, comment, totalQuantity, unit) {
        this.article = article;
        this.name = name;
        this.comment = comment;
        this.totalQuantity = totalQuantity;
        this.unit = unit; 
        this.logs = {};
        this.places = new Set();
    };

    add(quantity, place) {
        this.totalQuantity += quantity;
        this.logs[new Date()] = ['add', quantity, place];
        console.table("Запись совершена успешно");
        for (elem in places) {
            if (elem != place) {
                this.places.add(place);
            } 
            else {
                break;
            }
        }    
    };

    remove(quantity, place) {
        this.totalQuantity -= quantity;
        this.logs[new Date()] = ['rem', quantity, place];
        console.table("Запись совершена успешно");    
    };
}

const dataBase = [];
const currentId = '';

let action = +prompt(" Если вы хотите ввести новое устройство, введите        1\n Если вы хотите оприходовать устройство, введите       2\n Если вы хотите списать устройство, введите                  3", '');




switch (action) {

    case 1: 
        dataBase.push(new Device(
        article = prompt("Введите Артикул", ''),
        nameDevice = prompt("Введите полное название", ''),
        unit = prompt("Введите единицы", 'pcs'),
        totalQuantity = +prompt("Введите количество", ''),
        comment = prompt("Введите комментарий", ''),    
    ));
        };

