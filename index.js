// const myVariable = 5 // константа
// let myVariable2 = 5 // переменная

// var myVariable3 = 12 // устаревший синтаксис объявления переменных


// let papa = 76; // цифры, числа, number
// let mama = 45;
// let sestra = 34;
// let iam = 27;
// let symma = papa + mama + sestra + iam;
// let kolichestvo = 4;
// let sreda = symma/kolichestvo;

// const string0 = 'Средний возраст: ' // строки 1 вариант
// const string1 = "Средний возраст: " // строки 2 вариант

// console.log(string)

// // console.log(sreda)

// const number0 = 1; // нечётные
// const number1 = 2; // чётные
// const number2 = 3; // нечётные
// const number3 = 4; // чётные
// const number4 = 5; // нечётные
// const number5 = 6; // чётные

/**
 * Возрастные категории
 * 0 - 12 ребёнок
 * 13-18 подросток
 * 18-50 взрослый
 * 50-100 пожилой
 */
// const age0 = -102;
// const age1 = 12;
// const age2 = 44;
// const age3 = 24;
// const age4 = 90;
// const age5 = 7;
// const age6 = 19;


// const category = detectAge(age5)
// const category = detectAge(age1)
// const category = detectAge(age3)
// const category = detectAge(age5)
// const category = detectAge(age5)
// console.log(category)

// function detectAge(age) {
//     if (age < 0) {
//         return 'nikto'
//     } else if (age <= 12) {
//         return 'ребенок'
//     } else if (age <= 18) {
//         return 'подросток'
//     } else if (age <= 50) {
//         return 'взрослый'
//     } else if (age <= 100) {
//         return 'пожилой'
//     } else {
//         return  'alian'
//     }
// }

// входные данные (input, arguments) => Функция (чёрный ящик) => выходные данные (output)
// function sum(a, b) {
// 	return a * b
// }

// const result = sum(10,12);
// console.log(result)


// const result = number5 % 2;

// if (result > 0) {
//   console.log('нечётное число')
// } else {
//   console.log('чётное число')
// }

/** 
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */


// console.log(even_or_odd(-8))

// let answer;
// console.log(answer) // undefuned
// console.log(sum(1,2)) // 3

// answer = answer + 4
// answer += 4
//    answer--

function sum(num0, num1) {
    const result = num0 + num1
    return result
}

// const num = 5

// console.log(sum(num, num)) // 10

function and(num0, num1) {
    if (num0 === undefined) {
        return 'не передали 1 аргумент'
    }
    if (num1 === undefined) {
        return 'не передали 2 аргумент'
    }

    return (num0 * num1) - (num0 / num0)
}

// const num0 = 5;
// const num1 = 10;

// const result = and(num0, num1);
// NaN - not a number
// console.log(and());
// console.log(and(num0));
// console.log(and(num0, num1));
// console.log('1' == 1); // true
// console.log('1' === 1); // false


// alert("andrey")
// console.log("andrey")

/**
 * Создайте функцию, которая принимает целое число в качестве аргумента и 
 * возвращает "Even" для четных чисел или 
 * "Odd" для нечетных чисел.
 * 1 Odd
 * 2 Even
 * 3 Odd
 * 4 Even
 */
function even_or_odd(number) {
    if (number >= 0) {
        return pox(number)
    } else {
        const pozNumber = number * -1
        return pox(pozNumber)
    }
}

function pox(number) {
    const numb = number % 2
    if (numb <= 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// console.log(even_or_odd(-667))

function sum(numb1, numb2) {
    return numb1 + numb2
}

function sub(numb1, numb2) {
    return numb1 - numb2
}
function mult(numb1, numb2) {
    return numb1 * numb2
}

function div(numb1, numb2) {
    return numb1 / numb2
}

/**
 * Найти остаток от деления на 2
 */
function rem(numb1) {
    return numb1 % 3
}

const number1 = 44
const number2 = 2
const result1 = sum(number1, number2) // 44 + 2 = 46
const result2 = sub(result1, number1) // 46 - 44 = 2
const result3 = mult(result2, number2) // 2 * 2 = 4
const result4 = div(result3, number1) // 4 / 44 = 0.09
const result5 = rem(number1)

// console.log(result4)

/**
 * Склеивание строк
 */
function text(str1, str2) {
    return str2 + ' ' + str1
}

const str1 = "Имя"
const str2 = "Фамилия"
const result6 = text(str1, str2) // => 'Фамилия Имя'
console.log(result6)

