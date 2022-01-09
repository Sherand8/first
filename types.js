// Типы данных

// Примитивные типы данных

// 1. Boolean
const isAdult = true // истина, правда
const isNotAdult = false // неправда
// console.log(isAdult)
// console.log(isNotAdult)

// if (isAdult) {
//   console.log('Взрослый человек')
// } else {
//   console.log('Не взрослый')
// }

// if (isNotAdult) {
//   console.log('Не взрослый')
// }

// 2. Number - числа ±(253-1) -9 007 199 254 740 991
let num0 = 55 // let можем переназначать
const num = 55 // const не можем переназначать
// num = 45 // ошибка
// console.log(num)

// 3. String - строки
const str0 = "Строка 0"
const str1 = 'Строка 1'
const str2 = `Строка 2 ${str0} ${str1}` // в шаблонные строки вставлять переменные
const str3 = 'Строка 2 ' + str0 + ' ' + str1 // идентичный способ конкатенации строк
// console.log(str2)

// 4. Undefined - пустота, признак ошибки, неинициализированная перменная
let und

// возвращается из функций, которые ничего не возвращают
function fn() {}

let result = fn()
// console.log(result)

// 5. Null - пустота, которую используют програмисты
const nl = null
// console.log(nl)

// Непримитивные типы данных, структуры данных

// 6. Array - массив, коллекция данных, ключи - числа (индексы с 0), значение - всё что угодно
//index индексы 0  1  2  3  4  5
const arrNum = [0, 1, 2, 3, 4, 5]

// [0: 'Руслан', 1: ' Андрей', 2: 'Димон']
// index индексы    0         1        2
const arrStr = ['Руслан', 'Андрей', 'Димон']
const ruslan = arrStr[0]
const andrey = arrStr[1]
const dimon = arrStr[2]

const friends = `${ruslan}, ${andrey}, ${dimon} - друзья` 

// Руслан, Андрей, Димон - друзья
// console.log(friends)

// можем хранить перменные
const arrVar = [ruslan, andrey, dimon]
// console.log(arrVar)
// console.log(arrStr)

// 7. Объект - коллекция данных ключ - значение
const rerson = {
  firstName: 'Сергей',
  age: 43
}

const name = rerson.firstName
// алтернативный способ достать значение из объекта
// const name = rerson['firstName']
const age = rerson.age
// console.log(name, age)


// typeof - оператор, чтобы понимать какой тип данных
console.log(typeof true) // boolean
console.log(typeof 216541) // number
console.log(typeof 'строка') // string
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof function fn() {}) // function

let name1 = "Ilya";

alert( `hello ${1}` ); // ? hello 1

alert( `hello ${"name1"}` ); //=> hello name1
alert( `hello name1` ); //=> hello name1

alert( `hello ${name1}` ); // ? hello Ilya
//test comm