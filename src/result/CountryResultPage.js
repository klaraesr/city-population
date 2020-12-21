import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCitiesByCountry } from '../api'
import ClipLoader from 'react-spinners/ClipLoader'
import CityListView from './CityListView'

const LIST_LENGTH = 3 // number of cities shown in list

function CountryResultPage() {
  const [loading, setLoading] = useState(true)
  const [countryName, setCountryName] = useState('')
  const [cityNames, setCityNames] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const { query } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const cityData = await getCitiesByCountry(query, LIST_LENGTH)

        setCityNames(cityData.geonames.map((city) => city.name))
        setCountryName(cityData.geonames[0].countryName)

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
    <CityListView countryName={countryName} cityNames={cityNames} />
  )
}

export default CountryResultPage
