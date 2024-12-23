import Image from 'next/image'
import React from 'react'
import GoodsList from '../../molecules/GoodsList'
import * as S from './style'
import Banner from '@/assets/png/Banner.png'
import Footer from '@/components/common/footer'
import Header from '@/components/Header'

const SearchResultsWrapper = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <GoodsList />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default SearchResultsWrapper
