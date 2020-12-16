import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Banner.css'

function Banner() {
  return (
    <Row className="bannerRow">
      <Col>
        <h1 className="bannerText">CityPop</h1>
      </Col>
    </Row>
  )
}

export default Banner
