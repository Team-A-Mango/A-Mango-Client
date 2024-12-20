import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import * as S from './style'

interface Props {
  title: string
  imageURL: string
  price: number
  like: number
  id?: number
}

const GoodsListItem = ({ title, imageURL, price, like, id }: Props) => {
  const nav = useRouter()
  const routing = () => {
    if (id) nav.push(`/goods-detail/${id}`)
  }
  return (
    <S.ItemWrapper onClick={routing}>
      <S.ItemContainer>
        <Image src={imageURL} alt={title} width={200} height={200} />
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
