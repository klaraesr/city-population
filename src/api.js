const API_USERNAME = process.env.REACT_APP_API_USERNAME
const createUrl = (query, numberOfResults, orderby) =>
  `http://api.geonames.org/search?q=${query}&featureCode=PPLC&featureCode=PPLA` +
  `&maxRows=${numberOfResults}&orderby=${orderby}&style=long&type=json&username=${API_USERNAME}`

export const getCity = async (query) => {
  const url = createUrl(query, 1, 'relevance')
  return fetch(url).then((res) => processResponse(res))
}

export const getCitiesByCountry = async (query, numberOfCities) => {
  const url = createUrl(query, numberOfCities, 'population')
  return fetch(url).then((res) => processResponse(res))
}

const processResponse = async (res) => {
  if (res.ok) {
    const jsonResult = await res.json()
    if (jsonResult.status) {
      throw Error(jsonResult.status.message)
    }
    if (jsonResult.totalResultsCount === 0) {
      throw Error(`No results found.`)
    }
    return jsonResult
  }
  throw res
}
