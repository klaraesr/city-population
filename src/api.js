const API_USERNAME = process.env.REACT_APP_API_USERNAME
const baseUrl = `http://api.geonames.org/search?style=long&type=json&username=${API_USERNAME}`
const cityFeatureCodes = `featureCode=PPLC&featureCode=PPLA`

export const getCity = async (query) => {
  const url = `${baseUrl}&name=${query}&${cityFeatureCodes}&orderby=relevance&maxRows=1`
  return fetch(url).then(processResponse)
}

export const getCitiesByCountry = async (query, numberOfCities) => {
  const countryFeatureCodes = `featureCode=${[
    'PCL',
    'PCLD',
    'PCLF',
    'PCLH',
    'PCLI',
    'PCLIX',
    'PCLS',
  ].join('&featureCode=')}`

  // Get country code for queried country
  const countryQueryUrl = `${baseUrl}&name=${query}&${countryFeatureCodes}&orderby=relevance&maxRows=1&fuzzy=0.8`
  const countryRes = await fetch(countryQueryUrl).then(processResponse)
  const countryCode = countryRes.geonames[0].countryCode

  // Fetch cities based on country code
  const citiesQueryUrl = `${baseUrl}&q=${query}&country=${countryCode}&${cityFeatureCodes}&orderby=population&maxRows=${numberOfCities}`
  const cityRes = await fetch(citiesQueryUrl).then(processResponse)
  return cityRes
}

const processResponse = async (res) => {
  console.log(res)
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
