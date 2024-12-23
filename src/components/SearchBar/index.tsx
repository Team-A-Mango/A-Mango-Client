import { useRouter } from 'next/navigation'
import React from 'react'
import * as S from './style'
import { baseInstance } from '@/api/axios'
import SearchIcon from '@/assets/svg/SearchIcon'
import { useSearch } from '@/utils/SearchContext'

interface SearchBarProps {
  searchData: string
  setSearchData: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ searchData, setSearchData }) => {
  const { setSearchResults } = useSearch()
  const router = useRouter()

  const ChageSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }

  const handleSearch = () => {
    if (searchData === '') return

    baseInstance
      .get('/product/search', {
        params: {
          keyword: searchData,
        },
      })
      .then((response) => {
        setSearchResults(response.data)
        router.push('/search-results')
      })
      .catch((error) => {
        console.error('Search error:', error)
      })
  }

  return (
    <S.SearchBar>
      <S.Search
        placeholder='찾고 싶은 상품을 입력하세요'
        value={searchData}
        onChange={ChageSearchInput}
      />
      <label onClick={handleSearch}>
        <SearchIcon />
      </label>
    </S.SearchBar>
  )
}

export default SearchBar
