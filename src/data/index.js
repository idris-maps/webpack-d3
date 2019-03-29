const data = require('./data.json')

const getYearIndex = year =>
  data.years.reduce((r, y, i) =>
    y === year ? i : r, null)

exports.getDataByYear = year => {
  if (!data.years.includes(year)) {
    throw new Error(`There is no data for year ${year}`)
  }
  const yearIndex = getYearIndex(year)
  return data.countries.map(country => ({
    ...country,
    gdpCapita: country.gdpCapita[yearIndex],
    pop: country.pop[yearIndex],
    lifeExpect: country.lifeExpect[yearIndex],
  }))
}