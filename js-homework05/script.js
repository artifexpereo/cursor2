function getRandomArray(length, min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return arr
}

function getModa(...numbers) {
    const obj = {}
    numbers.map((item) => {
        if (!obj[item]) {
            obj[item] = numbers.filter((number) => number === item).length
        }
        else {
            return 
        }
    }) 
    
    const maxValue = Math.max(...Object.values(obj))
    const moda = []
    Object.keys(obj).map((item) => {
        if (obj[item] === maxValue) {
            moda.push(item)
        }
        else {
            return
        }
    })
    console.log("Мода", moda) 
}

function getAverage(...numbers) {
    let sum = 0
    numbers.map((item) => {
        sum = sum + item 
    })

    return sum/numbers.length
}


const countPositiveNumbers = (...numbers) => {
    let positiveNumbers = 0
    numbers.map((item) => {
        if (item > 0) {
            positiveNumbers += 1 
        } else {
            return
        }
    })
    return positiveNumbers
}

const getDivideByFive = (...numbers) => {
    const dividedNumbers = []
    numbers.map((item) => {
        if ((item % 5) === 0) {
            dividedNumbers.push(item)
        } 
    })
    return dividedNumbers 
}

const filterEvenNumbers = (...numbers) => {
    const oddNumbers = []
    const evenNumbers = []
    numbers.map((item) => {
        if ((item % 2) === 0) {
            evenNumbers.push(item)
        } else {
            oddNumbers.push(item)
        }
    })
    console.log("Парні числа:", evenNumbers) 
    console.log("Неарні числа:", oddNumbers) 
}
