import { Link } from 'react-router-dom'
import TextButton from '../common/TextButton'
import './SearchOptions.css'

function SearchOptions() {
  return (
    <div className="optionsContainer">
      {/* <div className="option-left"> */}
      <Link to="/search/city">
        <TextButton text="Search by City"></TextButton>
      </Link>
      {/* </div> */}
      {/* <div className="option-right"> */}
      <Link to="/search/country">
        <TextButton text="Search by Country"></TextButton>
      </Link>
      {/* </div> */}
    </div>
  )
}

export default SearchOptions
