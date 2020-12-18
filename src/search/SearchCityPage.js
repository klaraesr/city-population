import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SearchView from './SearchView'
import { TYPES } from './SearchView'

function SearchCityPage() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()

  return (
    <SearchView
      type={TYPES.city}
      searchString={searchValue}
      setSearchString={setSearchValue}
      onSearch={() => history.push(`/result/city/${searchValue}`)}
    ></SearchView>
  )
}

export default SearchCityPage
