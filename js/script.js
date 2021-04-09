"use strict";

// Типы данных JS
// ! ПРОСТЫЕ ТИПЫ
// 1) Числа 1,2,3
// 2) Строки 'string'.'name'
// 3) Логический тип (boolean) true/false
// 4) null
// 5) undefined
// 6) Symbol
// 7) Bigint

// ! ОБЪЕКТЫ
// 1) Массивы[]
// 2) Функции function
// 3) Объекты Даты
// 4) Регулярные выражения
// 5) Ошибки


// *  Функции  *

// FUNCTION DECLARATION
function foo(){
  код
};
// Создается до начала выполнения скрипта, можно вызвать перед объявлением 

// FUNCTION EXPRESSION
let foo = function(){
  код
};
// Создается только тогда, когда доходит поток кода, можно вызвать только после объявления.

// СТРЕЛОЧНЫЕ ФУНКЦИИ
() => 
// Не имеет своего контекста (this)

// ! ПЕРЕМЕННЫЕ 
var
let
const

// ! УСЛОВИЯ
if(условие){
  действие
} else { другое действие
}

switch(условие) {
  case'проверка':
  действие;
  break;
  case'проверка':
  действие;
  break;
  default:
    действие;
  break;
}

// ! ЦИКЛЫ
while (условие) {
  код, тело цикла
};

do {
тело цикла
} while (условие);

for(начало; условие; шаг){
  тело цикла, 
  действия
}

// * Директива continue продолжает цикл, пропуская шаг
for (let i = -1; i < 8; i++){
  if (i === 6){
      continue;
  }
  console.log(i);
};

// ! ОБЪЕКТЫ - ассоциативные массивы (ключ + значение)

let obj = new Object();
let obj = {};
 
// Свойства объектов:
// * Изменение ключа
let obj = {
  name: 'John'
};
obj.name = 'John';

// Методы объектов (действия, функции)
let obj = {
  sayName: function(){
    alert('John')
  }
};


// !  Массивы и псевдомассивы  
let arr = ['1', {}, [], 25]
arr[0] == '1';
arr[2] == [];

const array = [1, 27, 31, 16, 8];
console.log(array);

// 1) Методы
// a) Удаление последнего элемента из массива
array.pop();
console.log(array);

// b) Добавление элемента в конец массива
array.push(10);
console.log(array);

// c) Удаление и добавление элементов в начало массива
// ! Почти не используется
// * array.shift(10);
// * array.unshift();

// d) Провращает строку в массив
array.split(' , '); - // * , аргумент является разделителем

// e) Превращает массив в строку
array.join(' , '); - // * , аргумент является разделителем

// f) Удаление элемента
delete array[2]; - // * аргумент показывает номер индекса, который следует удалить

// e) Сортировка массива
// ! Сортирует массив как строки!
array.sort(); - // * сортирует а алфавитном порядке

// g) Сортировка массива с числами
// ! Для сортировки массива с числами нужна функция
array.sort(compareNum);
console.log(array);

function compareNum(a, b) {
  return a - b;
}

// ~ Перебор массива
// * a) Циклом
// ! .length - состоит из последнего индекса массива + 1
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// * b) Конструкция перебора - for of 
// ! for of - работает с массивоподобными сущностями(массив, строка, псевдомасивы, map, set)
// ! Можно перебрать все элементы со страницы
for (let value of array){
  console.log(value);
}
// * c) forEach() - гибкий перебор массива
// ! Метод forEach применяется всегда, когда не нужно break и continue
// ! Называть переменные можно как угодно!
// ? Синтаксис аргументов
// ? Первый аргумент - Элемент перебора массива (1, 2, 3, 6, 10)
// ? Второй аругмент - Порядковый номер элемента массива (0, 1, 2, n)
// ? Третий аргумент - Ссылка на массив перебоа array
array.forEach(function (item, i, arr){
  console.log(`Порядковый номер - ${i}: Элемента ${item} внутри массива => ${arr}`);
});

// * Оператор spread(...) клонирование массива
const oldArray = ['a', 'b'];
const newArray = ['c', 'd'];
const copyArray = [...oldArray, ...newArray]
 
console.log(copyArray)

// ~ Псевдомассивы
// ! При работе с элементами со страницы мы получаем псевдомассивы
// ! У псевдомассивов нет методов
// ! Псевдомассив - это структура, которая хранит данные по порядку


// * Динамическая типизация 
// ! Все, что приходит от пользователя - тип данных - строка 
// Преобразование в строку
console.log(typeof(String(4))); // команда string
console.log(typeof(5 + '')); // - конкатенация(сложение строк или сложение строки с числом)
 
// Преобразование в число

console.log(typeof(Number('bdb'))); // команда number
console.log(typeof(+ '5')); // унарный плюс
console.log(typeof(parseInt('45px', 10))); 10 - десятичная система
let answ = +prompt('Hello', ''); 

// Преобразование в boolean
false - 0, '', null, undefined, NaN
// 1)
let switcher = null;
if(switcher) {
  console.log('Working...');
} // Условие не выполняется, потому что null
switcher = 1;
if (switcher) {
  console.log('Working...');
} // Условие выполняется
// 2)
console.log(typeof(Boolean('4')));
// 3)
console.log(typeof(!!'44'));

// Получение элементов со страницы
// document - работает только внутри браузера

const box = document.getElementById('box');
console.log(box);
// получает один элемент со страницы по id

const btns = document.getElementsByTagName('button');
console.log(btns); 
// в переменную - HTMLCollection [массивоподобный элемент] 

const btns = document.getElementsByTagName('button')[1]; // обращение к элементу
console.log(btns); 
 
const btns = document.getElementsByTagName('button'); 
console.log(btns[1]); // обращение к элементу
// ! даже если элемент один на странице, то все равно выводится массив
// ! стилизовать массив нельзя и надо обращаться к отдельному элементу, даже если он один на странице

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');// точка обязательна
console.log(hearts);
// псевдомассив с методом forEach

hearts.forEach(item => {
  console.log(item);
})
// call-back function

const oneHeart = document.querySelector('.heart');// точка обязательна 
console.log(oneHeart); 
// позволяет получить только один элемент со страницы по селектору (первый по порядку)


// ! События и их обработчики
click	- onClick
dblclick - onDblClick
mouseup - onMouseUp
// 1)
const btn = document.querySelector('button');
btn.onclick = () => {
  alert('click');
}
// 2)
btn.addEventListener('click', () => {
  alert('click');
});
// call-back функция - выполняется срого за другими
// можно назначать несколько действий на одно событие

btn.addEventListener('mouseenter', (e) => {
  console.log(e.target);
  e.target.remove();
});

// * or *

const deleteElement = (e) => {
  console.log(e.target);
};
btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);
// сначала обработчик назначается а потом сразу же удаляется, на странице не должно ничего поменяться
// объект события передается как аргумент в call-back функцию: e - event; можно передавать аргументы но первым всегда будет объект события


let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  i++;
  if (i == 1) {
    btn.removeEventListener('click', deleteElement);
  }
};
btn.addEventListener('click', deleteElement);

// ! Всплытие событий
// - когда обработчик событий сначала срабатывает на самом вложенном элементе
// затем на родительском(если он у него есть) и выше поднимаясь по иерархии

// ! Отмена стандартного поведения браузера
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
event.preventDefault();

console.log(event.target);
});
// Отмена перехода по ссылке, в консоль выводится target event

// ! Один и тот же обработчик событий для нескольких элементов
// 1) Перебрать псевдомассив и на каждый элемент навесить обработчик 
const btns = document.querySelector('button');
btns.forEach(btn => {
btn.addEventListener('click', deleteElement);
});

// * Мобильные события
touchstart
touchmove
touchend
touchenter //  наскальзивание на элемент с событием
touchleave // прохождение мимо элемента с событием 
touchcancel // точка соприкосновения больше не рег. на поверхности (за пределы браузера)

touches
targetTouches
changedTouches
 
window.addEventListener('DOMContentLoaded')

// ! ClassList
classList.length; // количество классов у элемента
classList.item(0); // позволяет получить класс, кот располагаетс я под опеределенным индексом
classList.add(''); // добавляет определенный класс
classList.remove(''); // удаляет класс
classList.toggle(''); // если класс есть на элементе - то он будет удален, если не было класса - добавлен
classList.contains(''); //

const btns = document.querySelectorAll('button');
console.log(btns[0].classList.length);
console.log(btns[0].classList.item(1));
console.log(btns[0].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('red')) {
  console.log('red');
};

btns[0].addEventListener('click', () => {
if (!btns[1].classList.contains('red')) {
  btns[1].classList.add('red');
} else {
  btns[1].classList.remove('red');
}
});

// or

btns[0].addEventListener('click', () => {
 btns[1].classList.toggle('red');
  });

className // устарело, содержит классы в качестве одной строки 

// ! setInterval, setTimeout
// * setInterval - позволяет вызвать функцию один раз, через интервал времени
// * setTimeout - позволяет вызывать функцию регулярно, повторяя вызов через интервал времени 
let timer = setTimeout(func, [delay], [arg1], [arg2], ...n);
// func - функция
// delay - задержка в миллисекундах
// arg1, arg2 - аргументы, передаваемые в функцию

//  1)
function sayHi() {
  alert('Hello');
}
setTimeout(sayHi, 1000); // функция без аргументов

// 2)
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, 'Привет', 'Джон'); // Привет, Джон
// функция с аргументами

// !! Функцию можно передавать, но не запускать 
// ! setTimeout(sayHi(), 1000) - так нельзя

// * Отмена через clearTimeout
let timerId = setTimeout();
clearTimeout(timerId);

const timerId = setTimeout(logger, 2000);
function logger () {
  console.log('text');
}

// РекурсивныйsetTimeout гарантирует фиксированную задержку

 // ! Дата
const now =new Date();
console.log(now);

// Получение компонентов даты
getFullYear();
const year = new Date();
console.log(year.getFullYear());

getMonth();
getDate();
getMinutes();
getDay(); // номер дня недели
getHours();
getUTCHours(); 

// Установление даты
setHours();
setMonth();
setMinutes();
const date = new Date();
console.log(date.setHours(18));
 
// !!! Конекст вызова this 

// * 1) Обычная функция: this = window, но если use strict = undefined
'use strict';
function showThis() {
  console.log(this);
}

showThis();

// * 2) Контекст у методов объекта - сам объект 

const obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(this);
  }
}; 
obj.sum();
 // { a: 20, b: 15, sum: [Function: sum] }

// 3) Вызов функции не относится к методу( простая функция, которая запускается
// внутри метода объекта).Контекст вызова был потерян.
const obj = {
  a: 20,
  b: 15,
  sum: function() {
    function shout() {
       console.log(this);
    }
    shout();
  }
}; 
obj.sum();
 
// 4)  this в конструкторах и классах - это новый экземпляр объекта
// 5)  Ручная привязка this: call, apply, bind 


const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log(this);
}); 
// Контекстом вызова будет сам элемент, на котором произошло событие == event.target
// ! только при классическом вызове функции

// 6) Стрелочные функции не имеют своего контекста вызова, они берут его у своего родителя

const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this);    
    };
    say();
  } 
};
obj.sayNumber();
 
//  методы у объектов, с контекстом внутри, ссылаются на сам объект 
// ! стрелочные функции будут ссылаться на родителя. если родитель 
//  ! является методом, то будут ссылаться на объект

const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
    this.style.backgroundColor = 'red';
});
// работать не будет, контект вызова теряется - будет undefined
// будет работать через event.target

const btn = document.querySelector('button');
    btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});



// TASKS
const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
  
    while (personalMoviesDB.count == "" || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
      personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => { 
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов", ""),
        b = prompt("На сколько оцените его?", "");
  
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMoviesDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMoviesDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB = (hidden) => {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  }
};



function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMoviesDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

rememberMyFilms();


detectPersonalLevel();

console.log(personalMoviesDB);

// let i = 0;
//  do {
//   const a = prompt("Один из последних просмотренных фильмов", ""),
//     b = prompt("На сколько оцените его?", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMoviesDB.movies[a] = b;
//     console.log("done");
//     i++;
//   } else {
//     console.log("error");
//     i--;
//   }
// } while (i < 2);

// let num = 50;
// do {
//   console.lo g(num);
//   num++;
// } while (num < 55);

// personalMoviesDB.count < 10
//   ? alert("Просмотрено довольно мало фильмов")
//   : personalMoviesDB.count > 10 && personalMoviesDB.count < 10
//   ? alert("Вы классический зритель")
//   : personalMoviesDB.count > 30
//   ? alert("Вы киноман")
//   : alert("Произошла ошибка");

// let num = 50;
// while (num <= 52){
//     console.log(num);
//     num++;
// }



// const logg = 'pisun';
// console.log(logg.substr(0, 4));

// const fill = 12.55946529;
// console.log(Math.round(fill));

// const test = 'pisun';
// console.log(test.length);

// function learnJS(lang, callback){
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// learnJS('JavaScript', function(){
//   console.log('Я прошел этот урок');
// })

// function learnJS(lang, lesson, easy){
//   console.log(`Я учу: ${lang}`);
//   lesson();
//   easy();
// }

// function learn(){
//   console.log('Я прошел этот урок');
// }

// function learnEasy(){
//   console.log('Это легко!');
// }

// learnJS('JavaScript', learn, learnEasy);

let options = {
  name: "Yura",
  age: 22,
  status: "married",
  lover: "Masha",
  work: {
    first: function () {
      console.log("1");
    },
    second: "55",
  },
};

let { second } = options.work;
console.log(second);
console.log(Object.keys(options).length);
options.work.first();

let arr = ["apple", "pineapple", "cucumber", "fire"];
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
for (let value of arr){
  console.log(value)
}

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

let user = ["name", "surname", "age", "status"];
// user.forEach(function(data, i, user){
//   console.log(`${i} ${data} ${user}`);
// })

// user.push("test");
// console.log(user);

// const str = prompt("сколько?", "65");
// const number = str.split(", ");
// console.log(number);

let user = {
  name: 'John',
  age: 30,
};
let clone = {
  surname: 'Baby',
}

Object.assign(clone, user);
// for (let key in user){
//   clone[key] = user[key];
// }

clone.name = 'Ray'
 console.log(clone)
 console.log(user)




const soldier = {
  health: 400,
  armor: 100,
  sayHello: function(){
    console.log('Hello');
  }
};

const john = {
  health: 100,
};

Object.setPrototypeOf(john, soldier);
console.log(john)





