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
  profileImag: string
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
  account: string
}

interface MyInfo {
  nickname: string
  email: string
  profile: string
  phone: string
}

const GoodsDetailContainer = ({ params }: Props) => {
  const [goodsDetail, setGoodsDetail] = useState<Detail | null>(null)
  const [liked, setLiked] = useState(false)
  const [mine, setMine] = useState(false)
  const [myInfo, setMyInfo] = useState<MyInfo | null>(null)
  const [comment, setComment] = useState('')

  const getGoodsDetail = async () => {
    try {
      const response = await authInstance.get(`/product/${params.id}`)
      setGoodsDetail(response.data)
      setLiked(response.data.check)
    } catch (err) {
      console.error('Error fetching product details:', err)
    }
  }

  // 좋아요 상태 변경
  const handleLikeClick = async () => {
    try {
      const response = await authInstance.patch(`/product/${params.id}/like`)
      if (response.status === 200) {
        setLiked(!liked)
        setGoodsDetail((prev) =>
          prev ? { ...prev, likes: response.data.likes } : null,
        )
      }
    } catch (error) {
      console.error('Error updating like status:', error)
    }
  }

  const fetchMyInfo = async () => {
    try {
      const response = await authInstance.get('/my/info')
      setMyInfo(response.data)
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }

  const addComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (comment.trim() === '') {
      alert('댓글을 작성하지 않으셨습니다.')
      return
    }

    try {
      await authInstance.post(`/inquiry/${params.id}`, {
        content: comment,
      })

      const newComment: Inquiry = {
        content: comment,
        author: myInfo?.nickname || '익명',
        profileImag: myInfo?.profile || TestImg.src,
      }

      setGoodsDetail((prev) =>
        prev ? { ...prev, inquiries: [...prev.inquiries, newComment] } : null,
      )
      setComment('')
    } catch (error) {
      console.error('Error adding comment:', error)
    }
  }

  useEffect(() => {
    getGoodsDetail()
    fetchMyInfo()
  }, [])

  useEffect(() => {
    if (myInfo?.nickname === goodsDetail?.author) {
      setMine(true)
    }
  }, [myInfo, goodsDetail])

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <S.GoodsDataWrapper>
            <S.Img
              width={500}
              height={500}
              src={goodsDetail?.imageUrl || TestImg}
              alt={goodsDetail?.title || '테스트 이미지'}
            />
            <S.DataContainer>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <GoodsDeta
                  title={goodsDetail?.title || '제목'}
                  profileImg={goodsDetail?.profileImg}
                  author={goodsDetail?.author || '작성자'}
                />
                <S.LikeContainer onClick={handleLikeClick}>
                  <Like Liked={liked} />
                  <S.LikeText>{goodsDetail?.likes}</S.LikeText>
                </S.LikeContainer>
              </div>
              <PriceContainer
                price={goodsDetail?.price || 0}
                account={goodsDetail?.account}
                id={params.id}
                mine={mine}
              />
              <S.CommentButton
                onClick={() => document.getElementById('input')?.focus()}
              >
                댓글 쓰기
              </S.CommentButton>
            </S.DataContainer>
          </S.GoodsDataWrapper>
          <S.CommentListWrapper>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <S.CommentTitle>
                <h2>댓글</h2> {`${goodsDetail?.inquiries.length || 0}개`}
              </S.CommentTitle>
              <S.CommentInputWrapper onSubmit={addComment}>
                <S.CommentProfile style={{ borderRight: '1px solid #d5d5d5' }}>
                  <Image
                    src={myInfo?.profile || TestImg}
                    alt='프로필 이미지'
                    width={26}
                    height={26}
                  />
                  <h2>{myInfo?.nickname}</h2>
                </S.CommentProfile>
                <S.CommentInput
                  type='text'
                  placeholder='댓글 작성하기'
                  id='input'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </S.CommentInputWrapper>
            </div>
            <S.CommentList>
              {goodsDetail?.inquiries.map((item, idx) => (
                <S.Comment key={idx}>
                  <S.CommentProfile>
                    <Image
                      src={item.profileImag || TestImg}
                      alt='프로필 이미지'
                      width={26}
                      height={26}
                    />
                    <h2>{item.author}</h2>
                  </S.CommentProfile>
                  <p>{item.content}</p>
                </S.Comment>
              ))}
            </S.CommentList>
          </S.CommentListWrapper>
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default GoodsDetailContainer
