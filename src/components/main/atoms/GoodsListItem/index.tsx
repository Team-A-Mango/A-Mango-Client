import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import * as S from './style'

interface Props {
  title: string
  imageURL: string
  price: number
  like: number
  id: number
}

const GoodsListItem = ({ title, imageURL, price, like, id }: Props) => {
  const nav = useRouter()
  return (
    <S.ItemWrapper onClick={() => nav.push(`/goods-detail/${id}`)}>
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
