// 1. Знайти суму ряду послідовних чисел від lim1 до lim2, наприклад, якщо lim1 = 5, lim2 = 8, то ця сума дорівнює 5 + 6 + 7 + 8.
function Task1(lim1, lim2) {
    if (lim1 > lim2) {
        console.log("lim1 має бути менше або рівне lim2.");
        return;
    }

    let count = lim2 - lim1 + 1;
    let sum = (count / 2) * (lim1 + lim2);

    console.log(`1. Сума ряду чисел від ${lim1} до ${lim2} дорівнює ${sum}`);
}
Task1(5, 8);
// 2. Розв'яжіть задачу, використовуючи цикл for, цикл while та створивши функцію.
function Task2(lim1, lim2) {
    if (lim1 > lim2) {
        console.log("lim1 має бути менше або рівне lim2.");
        return;
    }

    let sum = 0;
    for (let i = lim1; i <= lim2; i++) {
        sum += i;
    }

    console.log(`2. Сума ряду чисел від ${lim1} до ${lim2} дорівнює ${sum}`);
}
Task2(5, 8);
// 3. Реалізувати стрілочну функцію добутку двох чисел.
const mult = (a, b) => a * b;
mult(5, 8);
// 3.1 Створити числовий масив та проініціалізувати його. * Ініціалізація за допомогою випадкових чисел.
let len = 20;
const numArr = Array.from({ length: len }, () => Math.floor(Math.random() * len));
console.log (`3.1 числовий масив: ${numArr}`);
// 3.2 Вивести розмір масиву.
console.log(`3.2 Розмір масиву: ${numArr.length}`);

// 3.3 Вивести елементи з парними індексами.
console.log(`3.3 Елементи з парними індексами: ${numArr.filter((_, index) => index % 2 === 0)}`);

// 3.4 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
console.log(`3.4 Парні елементи: ${numArr.filter((element) => element % 2 === 0)}`);

// 3.5 Вивести індекси нульових елементів (елемент дорівнює нулю).
const zeroElem = numArr.reduce((acc, element, index) => {
    if (element === 0) {
        acc.push(index);
    }
    return acc;
}, []);
console.log(`3.5 Індекси нульових елементів: ${zeroElem}`);

// 3.6 Підрахувати кількість нульових елементів
const zeroCount = numArr.reduce((count, element) => (element === 0 ? count + 1 : count), 0);
console.log(`3.6 Кількість нульових елементів: ${zeroCount}`);

// 4. Створити об'єкт Машина та прописати для нього властивості.
let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    color: "gray",
    isDriving: false,
    currentSpeed: 0,
    maxSpeed: 250,

    start: function() {
        this.isDriving = true;
        console.log("Автомобіль поїхав.");
    },

    stop: function() {
        this.isDriving = false;
        this.currentSpeed = 0;
        console.log("Автомобіль зупинився.");
    },

    increaseSpeed: function(increment) {
        if (this.isDriving) {
            this.currentSpeed += increment;
            if (this.currentSpeed > this.maxSpeed) {
                this.currentSpeed = this.maxSpeed;
                console.log("Досягнута максимальна швидкість.");
            }
            console.log(`Швидкість збільшено до ${this.currentSpeed}`);
        } else {
            console.log("Спочатку потрібно запустити автомобіль.");
        }
    },

    decreaseSpeed: function(decrement) {
        this.currentSpeed -= decrement;
        if (this.currentSpeed < 0) {
            this.currentSpeed = 0;
        }
        console.log(`Швидкість зменшено до ${this.currentSpeed}`);
    }
};
console.log("4. Інформація про машину:");
console.log(car);
car.start();
car.increaseSpeed(75);
car.decreaseSpeed(20);
car.increaseSpeed(200);
car.stop();


//5. Створити функції-конструктори:
//Книга (автор, назва, рік видання, видавництво)
//Електронна версія книги (автор, назва, рік видання, видавництво, формат, електронний номер)
function Book(author, title, year, publisher) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
}

function EBook(author, title, year, publisher, format, electronicNumber) {
    Book.call(this, author, title, year, publisher);
    this.format = format;
    this.electronicNumber = electronicNumber;
}

//5.1 Переробити створення функцій без дубля інформації, реалізувавшипрототипне успадкування.
//5.2 Вивести об'єкти в консоль.
Book.prototype.output = function() {
    console.log('Автор:', this.author);
    console.log('Назва:', this.title);
    console.log('Рік видання:', this.year);
    console.log('Видавництво:', this.publisher);
};

EBook.prototype = Object.create(Book.prototype);
EBook.prototype.output = function() {
    Book.prototype.output.call(this);
    console.log('Формат:', this.format);
    console.log('Електронний номер:', this.electronicNumber);
};
var book1 = new Book('Іван Франко', 'Захар Беркут', 1882, 'Світ');
var book2 = new Book('Тарас Шевченко', 'Кобзар', 1840, 'Основи');

var ebook1 = new EBook('Іван Франко', 'Захар Беркут', 1882, 'Світ', '456789');
var ebook2 = new EBook('Тарас Шевченко', 'Кобзар', 1840, 'Основи', 'EPUB', '987654');

console.log("\n5. Книги:");
console.log("\nКнига 1:");
book1.output();

console.log("\nКнига 2:");
book2.output();

console.log("\nЕлектронна версія книги 1:");
ebook1.output();

console.log("\nЕлектронна версія книги 2:");
ebook2.output();
