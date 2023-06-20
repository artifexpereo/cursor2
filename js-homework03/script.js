// Найбільша цифра в числі

function getMaxDigit(number) {
    const arrayOfDigits = number.toString().split('')
    return Math.max.apply(null, arrayOfDigits)
}

// Ступінь числа

function pow(number, smallNumber) {
    let a = number
    for (let i = 1; i < smallNumber; i++) {
        a = a * number
    }
    if (smallNumber === 0) {
        return 1 
    }
    return a
}

// Форматування ім'я

function capitalize(name) {
    const [firstLetter, ...rest] = name.split('')
    const formattedName = `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}` 
    return formattedName
}

// Податок

function percent(number) {
    const summ = (number * 19.5) / 100
    return number - summ
}

// Випадкове число в діапазоні

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
} 

// Кількість використання певної букви в слові

function countLetter(letter, word) {
    const array = word.split('')
    const filteredArray = array.filter((item) => item===letter)
    return filteredArray.length
}

console.log('Функція №1 getMaxDigit(245789):', getMaxDigit(245789)) 
console.log('Функція №2 pow(5,7):', pow(5,7))
console.log('Функція №3 capitalize(пАвлО):', capitalize('пАвлО'))
console.log('Функція №4 percent(57):', percent(57))
console.log('Функція №5 getRandomNumber(1,60):', getRandomNumber(1,60))
console.log('Функція №6 countLetter("s","Mississippi"):', countLetter("s","Mississippi"))