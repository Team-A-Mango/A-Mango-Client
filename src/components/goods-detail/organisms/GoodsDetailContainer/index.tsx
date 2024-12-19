import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import GoodsDeta from '../../molecules/GoodsDeta'
import PriceContainer from '../../molecules/PriceContainer'
import * as S from './style'
import { authInstance } from '@/api/axios'
import TestImg from '@/assets/png/TestImg.png'
import Header from '@/components/Header'

interface Props {
  params: { id: number }
}

interface Detail {
  productId: number
  title: string
  description: string
  price: number
  author: string
  imageUrl: string
  profileImg: string
  inquriries: [
    {
      content: string
      author: string
      profileImg: string
    },
  ]
}

const GoodsDetailContainer = ({ params }: Props) => {
  const [goodsDetail, setGoodsDetail] = useState<Detail | null>()
  const getGoodsDetail = async () => {
    try {
      const goods = await authInstance.get(`/product/${params.id}`)
      setGoodsDetail(goods.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getGoodsDetail()
  }, [])
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <S.GoodsDataWrapper>
            <Image
              src={goodsDetail?.imageUrl || TestImg}
              width={280}
              height={280}
              alt={goodsDetail?.title || '테스트 이미지'}
            />
            <S.DataContainer>
              <GoodsDeta
                title={goodsDetail?.title || '제목'}
                profileImg={goodsDetail?.profileImg}
                author={goodsDetail?.author || '김진원'}
              />
              <PriceContainer price={goodsDetail?.price || 0} id={params.id} />
            </S.DataContainer>
          </S.GoodsDataWrapper>
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default GoodsDetailContainer
