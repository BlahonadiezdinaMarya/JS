//1. Написати функцію, яка очищає рядок від усіх не буквено-цифрових символів.
function cleanText() {
    var input1 = document.getElementById('input1').value;
    var cleanedText = remove(input1);
    document.getElementById('output1').textContent = cleanedText;
}
function remove(text) {
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
}

//2. Напишіть функцію zeros(num, len), яка доповнюється нулями до зазначеної довжини введене числове значення.
function addZeros() {
    var num = parseFloat(document.getElementById('numInput2').value);
    var len = parseInt(document.getElementById('lenInput2').value);
    var result = zeros(num, len);
    document.getElementById('output2').textContent = result;
}

function zeros(num, len) {
    var numStr = Math.abs(num).toString();
    var zerosToAdd = len - numStr.length;
    var result = (num < 0 ? '-' : '') + '0'.repeat(zerosToAdd) + Math.abs(num);
    return result;
}

//3. Напишіть функцію, яка переводить введений рядок у верблюжий регістр (CamelCase).
function convertToCamelCase() {
    var input3 = document.getElementById('input3').value;
    var camelCaseText = toCamelCase(input3);
    document.getElementById('output3').textContent = camelCaseText;
}

function toCamelCase(text) {
    var words = text.split(' ');
    var camelCaseText = words[0];
    for (var i = 1; i < words.length; i++) {
        camelCaseText += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return camelCaseText;
}

//4. Отримати масив, elemи якого є числами фібоначчі. Розмір масиву (кількість elemів) задає користувач. Для визначення (обчислення) elemа створити функцію-рекурсію.
function generateFibonacciArray() {
    var numElem = parseInt(document.getElementById('numInput4').value);
    var fibonacciArray = getFibonacciArray(numElem);
    document.getElementById('output4').textContent = '[' + fibonacciArray.join(', ') + ']';
}

function getFibonacciArray(numElem, currentArr = []) {
    if (numElem <= 0) {
        return currentArr;
    }
    var nextFibonacci = calculateFibonacci(currentArr.length);
    currentArr.push(nextFibonacci);
    return getFibonacciArray(numElem - 1, currentArr);
}

function calculateFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

//5. Створіть масив і відфільтруйте його, видаливши всі негативні та нульові elemи.
function filterArray() {
    var userInput = document.getElementById('arrayInput5').value;
    var inputArray5 = userInput.split(',').map(function (item) {
        return parseInt(item.trim(), 10);
    });
    var filteredArray = inputArray5.filter(function (item) {
        return item > 0;
    });
    document.getElementById('output5').textContent = '[' + filteredArray.join(', ') + ']';
}

//6. Створіть класи Художник (ім'я, прізвище, контактні дані) та Картина (Назва, рік, техніка виконання, розміри). Реалізуйте методи створення об'єктів. Реалізуйте властивість кількість робіт (у художника) та оновлюйте його при додаванні нової роботи. Виведіть інформацію про художника, його роботи та їх кількість. Техніка виконання - акрил, олія, акварель, графіка, інше.
let artists = [];

class Artist {
    constructor(name, surname, contact) {
        this.name = name;
        this.surname = surname;
        this.contact = contact;
        this.paintings = [];
    }

    addPainting(painting) {
        this.paintings.push(painting);
    }

    get numberOfPaintings() {
        return this.paintings.length;
    }

    displayInfo() {
        const artistInfo = `Художник: ${this.name} ${this.surname}, Контакт: ${this.contact}`;
        const paintingsInfo = this.paintings.map(painting => `Назва: ${painting.title}, Рік: ${painting.year}, Техніка: ${painting.technique}, Розміри: ${painting.dimensions}`).join('<br>');
        const totalPaintingsInfo = `Загальна кількість робіт: ${this.numberOfPaintings}`;

        document.getElementById('artist-info').innerHTML = artistInfo + '<br>' + paintingsInfo + '<br>' + totalPaintingsInfo;
    }
}

class Painting {
    constructor(title, year, technique, dimensions) {
        this.title = title;
        this.year = year;
        this.technique = technique;
        this.dimensions = dimensions;
    }
}

function createArtist() {
    const name = document.getElementById('artist-name').value;
    const surname = document.getElementById('artist-surname').value;
    const contact = document.getElementById('artist-contact').value;

    const newArtist = new Artist(name, surname, contact);
    artists.push(newArtist);
    updateArtistList();
    updateSelectedArtistList();
    document.getElementById('artist-info').innerHTML = 'Художник створений: ' + newArtist.name + ' ' + newArtist.surname;
}

function updateArtistList() {
    const artistList = document.getElementById('artist-list');
    artistList.innerHTML = '';
    artists.forEach(artist => {
        const option = document.createElement('option');
        option.value = artists.indexOf(artist);
        option.text = `${artist.name} ${artist.surname}`;
        artistList.add(option);
    });
}

function updateSelectedArtistList() {
    const selectedArtistList = document.getElementById('selected-artist-list');
    selectedArtistList.innerHTML = '';
    artists.forEach(artist => {
        const option = document.createElement('option');
        option.value = artists.indexOf(artist);
        option.text = `${artist.name} ${artist.surname}`;
        selectedArtistList.add(option);
    });
}

function addPainting() {
    const artistIndex = document.getElementById('artist-list').value;
    const selectedArtist = artists[artistIndex];

    const title = document.getElementById('painting-title').value;
    const year = document.getElementById('painting-year').value;
    const technique = document.getElementById('painting-technique').value;
    const dimensions = document.getElementById('painting-dimensions').value;

    const newPainting = new Painting(title, year, technique, dimensions);
    selectedArtist.addPainting(newPainting);
}

function displayArtistInfo() {
    const artistIndex = document.getElementById('selected-artist-list').value;
    const selectedArtist = artists[artistIndex];
    selectedArtist.displayInfo();
}

//7. Створіть кнопку, яка підраховує кількість натискань на неї.
var clickCount = 0;
function countClicks() {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
}

//8. Додайте порядковий номер текстового абзацу на початку при натисканні на кнопки.
var counter = 1;
function addP() {
    var newP = document.createElement('p');
    newP.textContent = 'Абзац ' + counter;
    document.getElementById('addP').appendChild(newP);
    counter++;
}

//9. Дані діви (<div>). По першому натисканні на кожен дів він пофарбується синім фоном, по другому фарбується назад і так далі кожен клік відбувається чергування фону. Зробіть так, щоб було дві функції: одна фарбує у синій колір, інший в зелений наприклад, і вони змінювали один одного через removeEventListener.
function changeColor(event) {
    var div = event.currentTarget;

    if (div.classList.contains('blue')) {
        div.classList.remove('blue');
        div.classList.add('green');
    } else {
        div.classList.remove('green');
        div.classList.add('blue');
    }

    div.removeEventListener('click', changeColor);
    div.addEventListener('click', changeColor);
}
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
div1.addEventListener('click', changeColor);
div2.addEventListener('click', changeColor);

//10. Створити promise кожного типу (number, boolean, string, symbol, null, undefined, об'єкт). Створити асинхронну функцію для їхньої console.log.
function createNumberPromise(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            resolve(number);
        } else {
            reject('Input is not a number');
        }
    });
}

function createBooleanPromise(booleanValue) {
    return new Promise((resolve, reject) => {
        if (typeof booleanValue === 'boolean') {
            resolve(booleanValue);
        } else {
            reject('Input is not a boolean');
        }
    });
}

function createStringPromise(str) {
    return new Promise((resolve, reject) => {
        if (typeof str === 'string') {
            resolve(str);
        } else {
            reject('Input is not a string');
        }
    });
}

function createSymbolPromise(symbol) {
    return new Promise((resolve, reject) => {
        if (typeof symbol === 'symbol') {
            resolve(symbol);
        } else {
            reject('Input is not a symbol');
        }
    });
}

function createNullPromise(nullValue) {
    return new Promise((resolve, reject) => {
        if (nullValue === null) {
            resolve(nullValue);
        } else {
            reject('Input is not null');
        }
    });
}

function createUndefinedPromise(undefinedValue) {
    return new Promise((resolve, reject) => {
        if (typeof undefinedValue === 'undefined') {
            resolve(undefinedValue);
        } else {
            reject('Input is not undefined');
        }
    });
}

function createObjectPromise(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj === 'object' && obj !== null) {
            resolve(obj);
        } else {
            reject('Input is not an object');
        }
    });
}

async function asyncFunction() {
    try {
        const numberResult = await createNumberPromise(42);
        console.log('Number Promise Result:', numberResult);

        const booleanResult = await createBooleanPromise(true);
        console.log('Boolean Promise Result:', booleanResult);

        const stringResult = await createStringPromise('Hello, world!');
        console.log('String Promise Result:', stringResult);

        const symbolResult = await createSymbolPromise(Symbol('mySymbol'));
        console.log('Symbol Promise Result:', symbolResult);

        const nullResult = await createNullPromise(null);
        console.log('Null Promise Result:', nullResult);

        const undefinedResult = await createUndefinedPromise(undefined);
        console.log('Undefined Promise Result:', undefinedResult);

        const objectResult = await createObjectPromise({ key: 'value' });
        console.log('Object Promise Result:', objectResult);
    } catch (error) {
        console.error('Error:', error);
    }
}
asyncFunction();