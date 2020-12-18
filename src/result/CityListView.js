import { Link } from 'react-router-dom'
import TextButton from '../common/TextButton'
import './CityListView.css'

function CityListView({ countryName, cityNames }) {
  const listItems = cityNames.map((cityName) => {
    return <CityListItem cityName={cityName} key={cityName} />
  })

  return (
    <div className="container">
      <h2 className="subheader">{countryName.toUpperCase()}</h2>
      <ul>{listItems}</ul>
    </div>
  )
}

function CityListItem({ cityName }) {
  return (
    <li className="list-item">
      <Link to={`/result/city/${cityName}`}>
        <TextButton text={cityName} />
      </Link>
    </li>
  )
}

export default CityListView
