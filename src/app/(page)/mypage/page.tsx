'use client'

import * as S from './style'
import { RightArrow } from '@/assets/svg'
import Filter from '@/components/Filter'
import Header from '@/components/Header'
import GoodsListItem from '@/components/main/atoms/GoodsListItem'
import Profile from '@/components/Profile'

const Mypage = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <Profile />
        <S.List>
          <S.Title>
            <h2>구매한 상품</h2>
            <Filter />
          </S.Title>
          <S.GoodsList>
            <GoodsListItem />
            <GoodsListItem />
            <GoodsListItem />
            <GoodsListItem />
            <GoodsListItem />
            <S.Arrow>
              <RightArrow />
            </S.Arrow>
          </S.GoodsList>
        </S.List>
        <S.List>
          <S.Title>
            <h2>판매 상품</h2>
            <Filter />
          </S.Title>
          <S.GoodsList>
            <GoodsListItem />
            <GoodsListItem />
            <GoodsListItem />
            <GoodsListItem />
            <GoodsListItem />
            <S.Arrow>
              <RightArrow />
            </S.Arrow>
          </S.GoodsList>
        </S.List>
      </S.Wrapper>
    </>
  )
}

export default Mypage
