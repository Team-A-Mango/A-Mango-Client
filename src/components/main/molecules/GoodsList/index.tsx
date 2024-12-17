import React from 'react'
import GoodsListItem from '../../atoms/GoodsListItem'
import * as S from './style'

const GoodsList = () => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderText>추천하는 상품 </S.HeaderText>
      </S.HeaderWrapper>
      <S.GoodsListContainer>
        <GoodsListItem />
        <GoodsListItem />
        <GoodsListItem />
      </S.GoodsListContainer>
    </S.Wrapper>
  )
}

export default GoodsList
