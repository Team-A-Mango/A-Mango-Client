import React from 'react'
import * as S from './style'
import { Hamburger, LogoSmall, Person, Plus, Shopping } from '@/assets/svg'
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
      <S.BottomBox>
        <S.NavWrapper>
          <S.Nav>
            <Hamburger />
            카테고리
          </S.Nav>
          <S.Nav>최근 본상품</S.Nav>
          <S.Nav>찜한 상품</S.Nav>
        </S.NavWrapper>
      </S.BottomBox>
    </S.Container>
  )
}

export default Header
