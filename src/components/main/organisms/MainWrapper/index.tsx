import Image from 'next/image'
import React from 'react'
import GoodsList from '../../molecules/GoodsList'
import * as S from './style'
import Banner from '@/assets/png/Banner.png'
import Footer from '@/components/common/footer'
import Header from '@/components/Header'

const MainWrapper = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <Image src={Banner} alt='베너 사진' />
          <GoodsList />
        </S.Container>
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}

export default MainWrapper
