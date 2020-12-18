import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SearchView from './SearchView'
import { TYPES } from './SearchView'

function SearchCountryPage() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()

  return (
    <SearchView
      type={TYPES.country}
      searchString={searchValue}
      setSearchString={setSearchValue}
      onSearch={() => history.push(`/result/country/${searchValue}`)}
    ></SearchView>
  )
}

export default SearchCountryPage
