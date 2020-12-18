import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCity } from '../api'
import ClipLoader from 'react-spinners/ClipLoader'
import PopulationView from './PopulationView'

// const API_USERNAME = process.env.REACT_APP_API_USERNAME

// const getCityData = async (query) => {
//   return fetch(
//     `http://api.geonames.org/search?name=${query}&fuzzy=0.8&featureClass=P&maxRows=1&orderBy=relevance&style=long&type=json&username=${API_USERNAME}`
//   ).then((res) => {
//     if (res.ok) {
//       return res.json()
//     }
//     throw res
//   })
// }

function PopulationPage() {
  const [loading, setLoading] = useState(true)
  const [cityName, setCityName] = useState('')
  const [population, setPopulation] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const { query } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        // const cityData = await getCityData(query)

        // if (cityData.status) {
        //   throw Error(cityData.status.message)
        // }
        // if (cityData.totalResultsCount === 0) {
        //   throw Error(`No city named "${query}" found.`)
        // }

        const cityData = await getCity(query)

        setCityName(cityData.geonames[0].toponymName)
        setPopulation(cityData.geonames[0].population)
        setLoading(false)
      } catch (e) {
        setErrorMsg(e.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [query])

  return loading ? (
    <ClipLoader size={100} color={'#cdcdcd'} />
  ) : errorMsg ? (
    <div>{`Something went wrong: ${errorMsg}`}</div>
  ) : (
    <PopulationView cityName={cityName} population={population} />
  )
}

export default PopulationPage
