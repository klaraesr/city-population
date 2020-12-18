import { Link } from 'react-router-dom'
import TextButton from '../common/TextButton'
import './CityListView.css'

function CityListView({ countryName, cities }) {
  const listItems = cities.map((cityName) => {
    return <CityListItem cityName={cityName} />
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
    <li className="list-item" key={cityName}>
      <Link to={`/details/${cityName}`}>
        <TextButton text={cityName} />
      </Link>
    </li>
  )
}

export default CityListView
