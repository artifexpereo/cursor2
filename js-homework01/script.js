const apple = 15.678;
const peach = 123.965;
const strawberry = 90.2345;

console.log ('Apple:', apple);
console.log ('Peach:', peach);
console.log ('Strawbery:', strawberry)

console.log ('Max value:', Math.max(apple, peach, strawberry));

console.log ('Min value:', Math.min(apple, peach, strawberry));

const sum = apple + peach + strawberry;
console.log('Sum:',sum);

const sumWithoutFractions = Math.trunc(apple) + Math.trunc(peach) + Math.trunc(strawberry);
console.log('Sum without fractions:', sumWithoutFractions);
console.log('Rounded number:', Math.round(sumWithoutFractions/100) * 100);

const rounedNumber = 200;

const isEvenNumber = rounedNumber % 2 === 0;
console.log('Even number:', isEvenNumber);

const price = 200;
const payment = 500;
const remainder = payment - price;
console.log('Remainder:', remainder, 'UAH')

const averageValue = sum/3;
console.log('Average value:', Number(averageValue.toFixed(2)))

const randomNumber = Math.random();
const randomDiscount = (randomNumber * 100) + 1;

console.log('Знижка', randomDiscount.toFixed(0), '%')

const discount = (apple * randomDiscount) / 100


const cost = apple / 2
const profit = (cost - discount)
console.log('Profit:', profit.toFixed(2))