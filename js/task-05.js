const countryName = prompt("Введите страну доставки");

const CHINA = "Китай";
const CHILE = "Чили";
const AUSTRALIA = "Австралия";        
const INDIA = "Индия";
const JAMAICA = "Ямайка";

let price;
let country;

country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();


    switch (country) {
        case CHINA:
            price = 100;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case CHILE:
            price = 250;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case AUSTRALIA:
            price = 170;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case INDIA:
            price = 80;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case JAMAICA:
            price = 120;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        default: alert("В вашей стране доставка не доступна");
    }

