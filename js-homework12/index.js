let film2 = {}
let personFromFilm2 = []
let defaultPlanetPage = 1
let pagePlanet = []

const imageObj = {
  'https://swapi.dev/api/people/1/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFufra68sry4eNWTnlcIg3udSygEy4i1xLw&usqp=CAU',
  'https://swapi.dev/api/people/2/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bPCKozA_WR3HS_81YE6A7j43PDrXxVcElg&usqp=CAU',
  'https://swapi.dev/api/people/3/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Uumlui3_6oxu4sr-PZpAvn9q2pxre1-Kyg&usqp=CAU',
  'https://swapi.dev/api/people/4/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NtiNz1MATZlruZVsvz8UWlcBPnoYMdZ2Uw&usqp=CAU',
  'https://swapi.dev/api/people/5/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInEv3KmnphsA_iOTNComZpE6mnnnLfWZamQ&usqp=CAU',
  'https://swapi.dev/api/people/10/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnMZXUuFrQY2Ez6gUQCnt3XrSrk2F3dphBQ&usqp=CAU',
  'https://swapi.dev/api/people/13/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdUO8UXB8jKkGzol-XmqP8b2ZdfJGG_QgtA&usqp=CAU',
  'https://swapi.dev/api/people/14/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrQ6BmDuXADFXiwpFsgOfxHyASN69rv6ajw&usqp=CAU',
  'https://swapi.dev/api/people/18/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFiONBnS92GEXEKRa5nraHpOYxq47f3AKmQ&usqp=CAU',
  'https://swapi.dev/api/people/20/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuettzIhs7-qBLK1rarHZZbG1mwtaUzv3Awg&usqp=CAU',
  'https://swapi.dev/api/people/21/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MYv6IkiqMhh-1H0svMavLrtLRS4A9Ol6cQ&usqp=CAU',
  'https://swapi.dev/api/people/22/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMwxX-4iJOzKhblc5dDQTu90ssfQJ_S56wQ&usqp=CAU',
  'https://swapi.dev/api/people/23/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZWzIJ--O33wyBbKITLL5JlAMyTluq_XO3g&usqp=CAU',
  'https://swapi.dev/api/people/24/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqLS06EjB2Q6nx9rXaPG1nKGAHE5Mt3UTng&usqp=CAU',
  'https://swapi.dev/api/people/25/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaadRoFhEJQMKRPp0xHpTbAVriH2Qel_cfg&usqp=CAU',
  'https://swapi.dev/api/people/26/': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIa1FAFLJIDyim3Hxhe5ssf4kyBk5p2BNNzg&usqp=CAU',
}

const httpGET = async (url) => {
  const resp = await fetch(url, {
    method: 'GET',
  })

  return resp.json()
}

const getFilm2 = async () => {
  film2 = await httpGET('https://swapi.dev/api/films/2')

  await Promise.all(film2.characters?.map(async (item) => {
    const person = await httpGET(item)
    personFromFilm2.push(person)

    return Promise.all([person])
  }))

  personFromFilm2.map((person) => {
    const div = document.createElement("div")
    const divContainer = document.createElement("div")
    const image = document.createElement("img")
    const divName = document.createElement("div")
    const divYear = document.createElement("div")
    const divGender = document.createElement("div")
    div.classList.add('flex')

    divName.classList.add('name')
    divYear.classList.add('year')
    divGender.classList.add('gender')

    divName.innerText = `Name: ${person.name}`
    divYear.innerText = `Birthday: ${person.birth_year}`
    divGender.innerText = `Gender: ${person.gender}`

    image.style.width = '140px'
    image.style.height = '140px'
    image.style.objectFit = 'cover'
    image.style.borderRadius = '8px'
    image.style.marginRight = '10px'
    console.log('imageObj', imageObj)
    console.log('person.url', person.url)
    image.src = imageObj[person.url] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFufra68sry4eNWTnlcIg3udSygEy4i1xLw&usqp=CAU'

    div.appendChild(image)
    div.appendChild(divContainer)
    divContainer.appendChild(divName)
    divContainer.appendChild(divYear)
    divContainer.appendChild(divGender)

    document.getElementById('info').appendChild(div)
  })

  console.log('personFromFilm2', personFromFilm2)
}

const getFirstPageOfPlanet = async () => {
  defaultPlanetPage = 1

  const resp = await httpGET('https://swapi.dev/api/planets?page=1')

  pagePlanet = resp.results

  const planet = document.getElementById('planet')
  planet.innerHTML = ''

  pagePlanet.map((planet) => {
    const div = document.createElement("div")

    div.innerText = planet.name

    document.getElementById('planet').appendChild(div)
  })
}

const getNextPageOfPlanet = async () => {
  defaultPlanetPage = defaultPlanetPage + 1

  const planet = document.getElementById('planet')
  planet.innerHTML = ''

  const resp = await httpGET(`https://swapi.dev/api/planets?page=${defaultPlanetPage}`)

  pagePlanet = resp.results

  pagePlanet.map((planet) => {
    const div = document.createElement("div")

    div.innerText = planet.name

    document.getElementById('planet').appendChild(div)
  })
}
