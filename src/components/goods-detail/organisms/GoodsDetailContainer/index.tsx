import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import GoodsDeta from '../../molecules/GoodsDeta'
import PriceContainer from '../../molecules/PriceContainer'
import * as S from './style'
import { authInstance } from '@/api/axios'
import TestImg from '@/assets/png/TestImg.png'
import { Like } from '@/assets/svg'
import Header from '@/components/Header'

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
  likes: number
  check: boolean
}

const GoodsDetailContainer = ({ params }: Props) => {
  const [goodsDetail, setGoodsDetail] = useState<Detail | null>(null)
  const [liked, setLiked] = useState(false)
  const [mine, setMine] = useState<boolean>(false)
  const [nick, setNick] = useState<string>('')
  const getGoodsDetail = async () => {
    try {
      const goods = await authInstance.get(`/product/${params.id}`)
      setGoodsDetail(goods.data)
      setLiked(goods.data.check)
    } catch (err) {
      console.log(err)
    }
  }
  const handleLikeClick = async () => {
    try {
      const response = await authInstance.patch(`/product/${params.id}/like`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        console.log('Successfully updated like status.')
        setLiked(!response.data.check)

        const updatedLikes = response.data.likes
        setGoodsDetail((prev) =>
          prev
            ? {
                ...prev,
                likes: updatedLikes,
              }
            : null,
        )

        setLiked((prev) => !prev)
      } else {
        console.error('Failed to update like status.', response)
      }
    } catch (error) {
      console.error('Error while updating like status:', error)
    }
  }

  const isMine = async () => {
    try {
      const myNickname = await (
        await authInstance.get('/my/info')
      ).data.nickname
      setNick(myNickname)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGoodsDetail()
    isMine()
  }, [])

  useEffect(() => {
    if (nick === goodsDetail?.author) setMine(true)
  })

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
                <S.LikeContainer onClick={handleLikeClick}>
                  <Like Liked={liked} />
                  <S.LikeText>찜 {goodsDetail?.likes}</S.LikeText>
                </S.LikeContainer>
              </div>
              <PriceContainer
                price={goodsDetail?.price || 0}
                id={params.id}
                mine={mine}
              />
            </S.DataContainer>
          </S.GoodsDataWrapper>
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default GoodsDetailContainer
