let lastname = prompt("Введите вашу Фамилию:");

let firstname = prompt("Введите ваше Имя:");

let patronymic = prompt("Введите ваше Отчество:");

let fio = lastname + " " + firstname + " " + patronymic+ " ";

let age = prompt("Введите ваш возраст в годах:");

let gender = confirm("Ваш пол: Женский(ОК) \ Мужской(ОТМЕНА):");

let agedays = age * 365;

let age5 = +age + 5;

let choice = gender? "женский" : "мужской";

let pensionage = gender ? 55 : 65;

let pension = age >= pensionage ? "да" : "нет";


alert(
  "Ваше ФИО: " + fio +'\n'+
    "Ваш возраст в годах: " +age + '\n'+
    "Ваш возраст в днях: " + agedays + '\n'+
    "Через 5 лет вам будет: " + age5 +'\n' +
    "Ваш пол: " + choice + '\n' +
    "Вы на пенсии: " + pension);