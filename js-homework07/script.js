const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(country, salary) {
    this.country = country
    this.salary = salary
    return this.country.tax * this.salary
}

function getMiddleTaxes(country) {
    this.country = country
    console.log("country:", this.country)
    return this.country.tax * this.country.middleSalary
}

function getTotalTaxes(country) {
    this.country = country
    return this.country.tax * this.country.middleSalary * this.country.vacancies
}

const getMySalary = (country) => {
    const salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
    const taxes = country.tax * salary
    const profit = salary - taxes
    console.log(`{ 'salary: ${salary}', 'taxes:${taxes}', 'profit:${profit}'}`)
}
setInterval(() => getMySalary(country), 10000)