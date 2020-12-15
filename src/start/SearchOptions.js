import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import TextButton from '../common/TextButton'
import './SearchOptions.css'

function SearchOptions() {
  return (
    <div className='optionsContainer'>
      {/* <Col>
        <TextButton></TextButton>
      </Col>
      <Col>
        <TextButton></TextButton>
      </Col> */}
        <TextButton text='Search by City'></TextButton>
        <TextButton text='Search by Country'></TextButton>
        
    </div>
  )
}

export default SearchOptions