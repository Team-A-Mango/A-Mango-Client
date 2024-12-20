import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import * as S from './style'
import { authInstance } from '@/api/axios'

interface Props {
  title: string
  imageURL: string
  price: number
  like: number
  id?: number
  type?: 'default' | 'mypage'
}

const GoodsListItem = ({
  title,
  imageURL,
  price,
  like,
  id,
  type = 'default',
}: Props) => {
  const nav = useRouter()
  const routing = () => {
    if (id) nav.push(`/goods-detail/${id}`)
  }

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    authInstance.patch(`/product/${id}/stock`)
  }
  return (
    <S.ItemWrapper onClick={routing}>
      <S.ItemContainer>
        <Image src={imageURL} alt={title} width={200} height={200} />
        <S.TextTitleData>
          <S.Title>{title}</S.Title>
          <S.PriceText>{price}원</S.PriceText>
          <S.ButtonContainer>
            <S.SelectText>찜 {like}</S.SelectText>
            {type === 'mypage' && (
              <S.Button onClick={handleButtonClick}>보관완료</S.Button>
            )}
          </S.ButtonContainer>
        </S.TextTitleData>
      </S.ItemContainer>
    </S.ItemWrapper>
  )
}

export default GoodsListItem
