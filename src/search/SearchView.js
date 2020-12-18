import { Form, Image } from 'react-bootstrap'
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
      <Form className="form" onSubmit={onSearch}>
        <Form.Control
          type="text"
          size="lg"
          placeholder={`Enter a ${type}`}
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <div className="search-button" type="submit">
          <Image
            src={icon}
            alt="Search"
            onClick={onSearch}
            roundedCircle
          ></Image>
        </div>
      </Form>
    </div>
  )
}

export default SearchView
