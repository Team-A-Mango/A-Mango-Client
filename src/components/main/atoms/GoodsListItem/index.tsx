import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as S from './style'
import { authInstance } from '@/api/axios'

interface Props {
  title: string
  imageURL: string
  price: number
  like: number
  id?: number
  type?: 'default' | 'sell' | 'buy'
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
  const success = async (event?: React.MouseEvent) => {
    event?.stopPropagation()
    try {
      await authInstance.patch(`/product/${id}/complete`)
      alert('구매완료 확인 하였습니다.')
    } catch (err) {
      if (err.response.status === 400) {
        alert('이미 구매완료 처리된 상품입니다.')
      } else if (err.response.status === 404) {
        alert('상품을 찾지 못하였습니다')
      } else {
        alert('알 수 없는 오류가 발생하였습니다.')
      }
    }
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
            {type === 'sell' && (
              <S.Button onClick={handleButtonClick}>보관완료</S.Button>
            )}
            {type === 'buy' && <S.Button onClick={success}>구매 완료</S.Button>}
          </S.ButtonContainer>
        </S.TextTitleData>
      </S.ItemContainer>
    </S.ItemWrapper>
  )
}

export default GoodsListItem
