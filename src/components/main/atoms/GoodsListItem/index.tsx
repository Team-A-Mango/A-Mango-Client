import Image from 'next/image'
import React from 'react'
import * as S from './style'

interface Props {
  title: string
  imageURL: string
  price: number
  like: number
}

const GoodsListItem = ({ title, imageURL, price, like }: Props) => {
  return (
    <S.ItemWrapper>
      <S.ItemContainer>
        <Image src={imageURL} alt={title} width={100} height={100} />
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
