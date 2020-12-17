import { Form, Image } from 'react-bootstrap'
import Banner from '../common/Banner'
import icon from './icons/magnifyingGlass.svg'
import './SearchView.css'

export const TYPES = {
  city: 'city',
  country: 'country',
}

function SearchView({ type, searchString, setSearchString, onSearch }) {
  return (
    <div className="container">
      <h2 className="subheader">{`Search by ${type}`.toUpperCase()}</h2>
      <Form className="form">
        <Form.Control
          type="text"
          size="lg"
          placeholder={`Enter a ${type}`}
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </Form>
      <div className="search-button">
        <Image src={icon} alt="Search" onClick={onSearch} roundedCircle></Image>
      </div>
    </div>
  )
}

export default SearchView
