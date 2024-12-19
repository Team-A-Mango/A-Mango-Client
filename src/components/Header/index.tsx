import React from 'react'
import * as S from './style'
import { LogoSmall, Person, Plus, Shopping } from '@/assets/svg'
import SearchBar from '@/components/SearchBar'
const Header = () => {
  return (
    <S.Container>
      <S.TopBox>
        <LogoSmall />
        <SearchBar />
        <S.ButtonWrapper>
          <S.Button>
            <Plus /> 판매하기
          </S.Button>
          <S.Button>
            <Shopping /> 장바구니
          </S.Button>
          <S.Button>
            <Person />
            김진원
          </S.Button>
        </S.ButtonWrapper>
      </S.TopBox>
    </S.Container>
  )
}

export default Header
