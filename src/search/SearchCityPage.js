import { useState } from 'react'
import SearchView from './SearchView'
import { TYPES } from './SearchView'

function SearchCityPage() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
  }
  
  return (
    <SearchView type={TYPES.city}
                searchString={searchValue}
                setSearchString={setSearchValue}
                onSearch={handleSearch}></SearchView>
  )
}

export default SearchCityPage