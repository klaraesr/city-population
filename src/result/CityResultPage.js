import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCity } from '../api'
import ClipLoader from 'react-spinners/ClipLoader'
import PopulationView from './PopulationView'

function PopulationPage() {
  const [loading, setLoading] = useState(true)
  const [cityName, setCityName] = useState('')
  const [population, setPopulation] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const { query } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const cityData = await getCity(query)

        setCityName(cityData.geonames[0].name)
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
