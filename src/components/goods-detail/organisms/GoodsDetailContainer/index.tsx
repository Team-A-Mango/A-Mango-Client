import Image from 'next/image'
import React from 'react'
import GoodsDeta from '../../molecules/GoodsDeta'
import PriceContainer from '../../molecules/PriceContainer'
import * as S from './style'
import TestImg from '@/assets/png/TestImg.png'
import Header from '@/components/Header'

const GoodsDetailContainer = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <S.GoodsDataWrapper>
            <Image src={TestImg} width={280} height={280} alt='테스트이미지' />
            <S.DataContainer>
              <GoodsDeta />
              <PriceContainer />
            </S.DataContainer>
          </S.GoodsDataWrapper>
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default GoodsDetailContainer
