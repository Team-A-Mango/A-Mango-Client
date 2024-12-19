import React from 'react'
import Price from '../../atoms/Price'
import * as S from './style'
import Button from '@/components/common/Button'

const PriceContainer = ({ price }: { price: number }) => {
  return (
    <S.Wrappeer>
      <S.PriceText>가격</S.PriceText>
      <Price price={price} />
      <Button text='구매하기' />
    </S.Wrappeer>
  )
}

export default PriceContainer
