import { Link } from 'react-router-dom'
import TextButton from '../common/TextButton'
import './SearchOptions.css'

function SearchOptions() {
  return (
    <div className="optionsContainer">
      <Link to="/search/city">
        <TextButton text="SEARCH BY CITY"></TextButton>
      </Link>
      <Link to="/search/country">
        <TextButton text="SEARCH BY COUNTRY"></TextButton>
      </Link>
    </div>
  )
}

export default SearchOptions
