import React from 'react'
import * as S from './style'
import SearchIcon from '@/assets/svg/SearchIcon'
const SearchBar = () => {
  return (
    <S.SearchBar>
      <S.Search placeholder='찾고 싶은 상품을 입력하세요' />
      <SearchIcon />
    </S.SearchBar>
  )
}

export default SearchBar
