import Image from 'next/image'
import React from 'react'
import * as S from './style'
import TestImg from '@/assets/png/TestImg.png'

const GoodsListItem = () => {
  return (
    <S.ItemWrapper>
      <S.ItemContainer>
        <Image src={TestImg} alt='테스트이미지' />
        <S.TextTitleData>
          <S.Title>뭐뭐뭐뭐뭐 제품 이름</S.Title>
          <S.PriceText>10,000원</S.PriceText>
          <S.SelectText>찜 10</S.SelectText>
        </S.TextTitleData>
      </S.ItemContainer>
    </S.ItemWrapper>
  )
}

export default GoodsListItem
