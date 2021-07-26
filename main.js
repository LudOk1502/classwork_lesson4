/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)*/
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

/*створити пустий масив, наповнити його 10 об'єктами Client*/
let clients = [
        new Client(22, 'Vova', 'Sokil', 'vova123@gmail.com', '0996655774', ['milk', 'butter', 'yogurt']),
        new Client(15, 'Ira', 'Olexa', 'ira@gmail.com', '0988765437', ['candy Raffaello', 'candy Roschen', 'candy AVK', 'candy Svitoch']),
        new Client(7, 'Max', 'Papasch', 'max12@gmail.com', '0988123337', ['beer', 'candy', 'chips']),
        new Client(35, 'Anna', 'Klos', 'ann333@gmail.com', '0677765437', ['banana', 'orange', 'wine', 'cheese', 'chocolate']),
        new Client(10, 'Oleg', 'Kuba', 'kkkkol@gmail.com', '0985555437', ['candy Raffaello', 'coffee', 'milk']),
        new Client(6, 'Tania', 'Sereda', 'tanias@gmail.com', '0996634521', ['ice cream', 'candy Roschen', 'banana']),
        new Client(18, 'Ihor', 'Andruhiv', 'anda@gmail.com', '0980003837', ['yogurt', 'orange', 'candy Svitoch']),
        new Client(29, 'Inna', 'Olijnyk', 'inna2007@gmail.com', '0976565437', ['coffee', 'ice cream', 'candy AVK']),
        new Client(12, 'Ruslan', 'Sydor', 'rul999@gmail.com', '0988700002', ['beer', 'chips']),
        new
        Client(9, 'Yulia', 'Pavlin', '1409yyyy@gmail.com', '0969834567', ['orange'])
    ]
;
/*Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
let sort = clients.sort(function (c1, c2) {
    return c1.order.length - c2.order.length;
})
console.log(sort);

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    -- info () - яка виводить всю інформацію про автомобіль
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/
function Car(model, maker, year, maxSpeed, engine, newSpeed, newValue) {
    increaseMaxSpeed(newSpeed);
    changeYear(newValue);
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    drive();
    info();

    function drive() {
        return console.log('Їдемо зі швидкістю ' + maxSpeed + ' км на годину');
    }

    function info() {
        return console.log('Model - ' + model + ', maker - ' + maker + ', year - ' + year + ', max speed - ' + maxSpeed + ', engine' + engine)
    }

    function increaseMaxSpeed(newSpeed = 0) {
        return maxSpeed += newSpeed;
    }


    function changeYear(newValue) {
        if (newValue > 0) {
            year = newValue;
        }
    }


    this.adddriver = function addDriver(driver) {
        this.driver = driver;
    }
}

let driver = {name: 'Vlad', age: 28}

let car1 = new Car('GLE-Class', 'Mercedes-Benz', 2020, 245, 1.9, 50, 0)
let car2 = new Car('Touareg', 'Volkswagen', 2020, 286, 3.1, 0, 2021)
console.log(car1);
car1.adddriver(driver);
console.log(car2);

/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    -- info () - яка виводить всю інформацію про автомобіль
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
*/
class Car2 {
    constructor(model2, maker2, year2, maxSpeed2, engine2) {
        this.model2 = model2;
        this.maker2 = maker2;
        this.year2 = year2;
        this.maxSpeed2 = maxSpeed2;
        this.engine2 = engine2;
    }

    drive2() {
        console.log('Їдемо зі швидкістю ' + this.maxSpeed2 + ' км на годину');
    }

    info2() {
        console.log(this);
    }

    increaseMaxSpeed2(newSpeed2 = 0) {
        this.maxSpeed2 += newSpeed2;
    }

    changeYear2(newValue2) {
        this.year2 = newValue2;
    }

    addDriver2(driver2) {
        this.drive2 = driver2;

    }
}

let car21 = new Car2('718 Cayman T', 'Porsche', 2020, 340, 3.0);
console.log(car21);
car21.drive2();
car21.info2();
car21.increaseMaxSpeed2(50);
car21.info2();
car21.changeYear2(2021);
car21.info2();
car21.addDriver2({name: 'Taras', age: 27});
car21.info2();

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let Cinderella_array = [
    new Cinderella('Alissa', 19, 38),
    new Cinderella('Sofia', 20, 37),
    new Cinderella('Peppa', 34, 42),
    new Cinderella('Elza', 25, 39),
    new Cinderella('Anna', 23, 38),
    new Cinderella('Popelyushka', 19, 36),
    new Cinderella('Liya', 22, 37),
    new Cinderella('Karolina', 20, 39),
    new Cinderella('Rozali', 27, 39),
    new Cinderella('Вyuymovochka', 19, 33)
];
console.log(Cinderella_array);

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Charles', 25, 36);
console.log(prince);
for (let princess of Cinderella_array) {
    if (princess.foot_size === prince.shoe) {
        console.log(princess);
    }
}
let princess = Cinderella_array.find(function (x) {
    return x.foot_size === prince.shoe;
});
console.log(princess);