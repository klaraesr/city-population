import Banner from './common/Banner'
import Container from 'react-bootstrap/Container'
import StartPage from './start/StartPage'
import SearchCountryPage from './search/SearchCountryPage'
import SearchCityPage from './search/SearchCityPage'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
