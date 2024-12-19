'use client'

import { useEffect, useState } from 'react'
import * as S from './style'
import { authInstance } from '@/api/axios'
import Filter from '@/components/Filter'
import Header from '@/components/Header'
import GoodsListItem from '@/components/main/atoms/GoodsListItem'
import Profile from '@/components/Profile'

interface Goods {
  productId: number
  title: string
  imageUrl: string
  price: number
  like: number
}

const Mypage = () => {
  const [purchaseGoods, setPurchaseGoods] = useState<Goods[] | null>([])
  const [sellingGoods, setSellingGoods] = useState<Goods[] | null>([])
  const [likeGoods, setLikeGoods] = useState<Goods[] | null>([])

  const getMyGoods = async () => {
    try {
      const goods = await authInstance.get('/my')
      setPurchaseGoods(goods.data.purchase)
      setSellingGoods(goods.data.sale)
      setLikeGoods(goods.data.likes)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMyGoods()
  }, [])

  return (
    <>
      <Header />
      <S.Wrapper>
        <Profile />
        <S.ListWrapper>
          <S.List>
            <S.Title>
              <h2>구매한 상품</h2>
              <Filter />
            </S.Title>
            <S.GoodsList>
              {purchaseGoods?.map((info) => (
                <GoodsListItem
                  title={info.title}
                  imageURL={info.imageUrl}
                  price={info.price}
                  like={info.like}
                  key={info.productId}
                />
              ))}
            </S.GoodsList>
          </S.List>
          <S.List>
            <S.Title>
              <h2>판매 상품</h2>
              <Filter />
            </S.Title>
            <S.GoodsList>
              {sellingGoods?.map((info) => (
                <GoodsListItem
                  title={info.title}
                  imageURL={info.imageUrl}
                  price={info.price}
                  like={info.like}
                  key={info.productId}
                />
              ))}
            </S.GoodsList>
          </S.List>
          <S.List>
            <S.Title>
              <h2>찜한 상품</h2>
              <Filter />
            </S.Title>
            <S.GoodsList>
              {likeGoods?.map((info) => (
                <GoodsListItem
                  title={info.title}
                  imageURL={info.imageUrl}
                  price={info.price}
                  like={info.like}
                  key={info.productId}
                  id={info.productId}
                />
              ))}
            </S.GoodsList>
          </S.List>
        </S.ListWrapper>
      </S.Wrapper>
    </>
  )
}

export default Mypage
