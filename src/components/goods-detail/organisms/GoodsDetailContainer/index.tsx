import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import GoodsDeta from '../../molecules/GoodsDeta'
import PriceContainer from '../../molecules/PriceContainer'
import * as S from './style'
import { authInstance } from '@/api/axios'
import TestImg from '@/assets/png/TestImg.png'
import Header from '@/components/Header'
import BeforeLike from '@/assets/svg/BeforeLike'
import AfterLike from '@/assets/svg/AfterLike'

interface Props {
  params: { id: number }
}

interface Inquiry {
  content: string
  author: string
  profileImg: string
}

interface Detail {
  productId: number
  title: string
  description: string
  price: number
  author: string
  imageUrl: string
  profileImg: string
  inquiries: Inquiry[]
}

const GoodsDetailContainer = ({ params }: Props) => {
  const [goodsDetail, setGoodsDetail] = useState<Detail | null>(null)
  const [liked, setLiked] = useState(false)

  const getGoodsDetail = async () => {
    try {
      const goods = await authInstance.get(`/product/${params.id}`)
      setGoodsDetail(goods.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLikeClick = async () => {
    setLiked((prev) => !prev)

    try {
      const response = await authInstance.patch(`/product/${params.id}/like`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        console.log('Successfully updated like status.')
      } else {
        console.error('Failed to update like status.', response)
      }
    } catch (error) {
      console.error('Error while updating like status:', error)
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <GoodsDeta
                  title={goodsDetail?.title || '제목'}
                  profileImg={goodsDetail?.profileImg}
                  author={goodsDetail?.author || '김진원'}
                />
                <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
                  {liked ? <AfterLike /> : <BeforeLike />}
                </div>
              </div>
              <PriceContainer price={goodsDetail?.price || 0} id={params.id} />
            </S.DataContainer>
          </S.GoodsDataWrapper>
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default GoodsDetailContainer
