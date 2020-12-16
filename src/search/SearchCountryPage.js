import { useState } from 'react'
import SearchView from './SearchView'
import { TYPES } from './SearchView'

function SearchCountryPage() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
  }
  
  return (
    <SearchView type={TYPES.country}
                searchString={searchValue}
                setSearchString={setSearchValue}
                onSearch={handleSearch}></SearchView>
  )
}

export default SearchCountryPage