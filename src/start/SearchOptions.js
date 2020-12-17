import { Link } from 'react-router-dom'
import TextButton from '../common/TextButton'
import './SearchOptions.css'

function SearchOptions() {
  return (
    <div className="optionsContainer">
      <Link to="/search/city">
        <TextButton text="Search by City"></TextButton>
      </Link>
      <Link to="/search/country">
        <TextButton text="Search by Country"></TextButton>
      </Link>
    </div>
  )
}

export default SearchOptions
