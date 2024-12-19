import Image from 'next/image'
import React from 'react'
import * as S from './style'

interface Props {
  title: string
  imgURL: string
  price: number
  like: number
}

const GoodsListItem = ({ title, imgURL, price, like }: Props) => {
  return (
    <S.ItemWrapper>
      <S.ItemContainer>
        <Image src={imgURL} alt={title} />
        <S.TextTitleData>
          <S.Title>{title}</S.Title>
          <S.PriceText>{price}원</S.PriceText>
          <S.SelectText>찜 {like}</S.SelectText>
        </S.TextTitleData>
      </S.ItemContainer>
    </S.ItemWrapper>
  )
}

export default GoodsListItem
