import React, { useEffect, useState } from 'react'
import GoodsListItem from '../../atoms/GoodsListItem'
import * as S from './style'
import { authInstance } from '@/api/axios'

interface data {
  productId: number
  title: string
  imagesUrl: string
  price: number
  like: number
}

const GoodsList = () => {
  const [goodsList, setGoodsList] = useState<data[] | null>()

  const getGoodsList = async () => {
    try {
      const goods = await authInstance.get('/product')
      setGoodsList(goods.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getGoodsList()
  })
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderText>추천하는 상품 </S.HeaderText>
      </S.HeaderWrapper>
      <S.GoodsListContainer>
        {goodsList?.map((goods) => (
          <GoodsListItem
            key={goods.productId}
            title={goods.title}
            imgURL={goods.imagesUrl}
            price={goods.price}
            like={goods.price}
          />
        ))}
      </S.GoodsListContainer>
    </S.Wrapper>
  )
}

export default GoodsList
