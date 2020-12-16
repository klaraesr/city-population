import Container from 'react-bootstrap/Container'
import Banner from '../common/Banner'
import SearchOptions from './SearchOptions'

function StartPage() {
  return (
    <Container>
      <Banner></Banner>
      <SearchOptions />
    </Container>
  )
}

export default StartPage
