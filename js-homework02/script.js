let firstNumber = +prompt('Введіть ціле число більше за 0');

while (!Number.isInteger(firstNumber) || firstNumber <= 0) {
    firstNumber = +prompt('Введене число неправильне')
}

let secondNumber = +prompt('Введіть ціле число більше за попереднє');

while (!Number.isInteger(secondNumber) || secondNumber <= firstNumber) {
    secondNumber = +prompt('Введене число неправильне')
}

const skip = confirm ('Чи бажаєте пропустити парні числа?');

let summ = 0;

if (skip) {
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 2 !== 0) {
            summ += i
        }
    }
}
else {
    for (let i = firstNumber; i <= secondNumber; i++) {
            summ += i
    }
}


document.writeln('Summ is: ' +summ);