class Device {
    constructor(article, name, comment, totalQuantity, unit) {
        this.article = article;
        this.name = name;
        this.comment = comment;
        this.totalQuantity = totalQuantity;
        this.unit = unit; 
        this.logs = [];

    };

    add(quantity, place) {
        this.totalQuantity += quantity;
        this.logs.push([Date, quantity, place]);
        console.log("Запись совершена успешно");    
    };

    remove(quantity, place) {

    };
}

/*this.addQuantity = quantity;
this.storePlace = place;
this.articleDevice = article
const storedPlace = {};

this.remQuantity = quantity;
this.installPlace = place;
const installPlace = {};
*/