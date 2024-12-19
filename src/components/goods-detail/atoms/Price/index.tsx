import React from 'react'
import * as S from './style'

const Price = ({ price }: { price: number }) => {
  return <S.Price>{price}원</S.Price>
}

export default Price
