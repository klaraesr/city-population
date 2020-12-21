import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Banner from './common/Banner'
import CityResultPage from './result/CityResultPage'
import Container from 'react-bootstrap/Container'
import CountryResultPage from './result/CountryResultPage'
import StartPage from './start/StartPage'
import SearchCityPage from './search/SearchCityPage'
import SearchCountryPage from './search/SearchCountryPage'

function App() {
  return (
    <Container>
      <Banner />
      <BrowserRouter>
        <Switch>
          <Route path="/search/city">
            <SearchCityPage />
          </Route>
          <Route path="/search/country">
            <SearchCountryPage />
          </Route>
          <Route path="/result/city/:query">
            <CityResultPage />
          </Route>
          <Route path="/result/country/:query">
            <CountryResultPage />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
