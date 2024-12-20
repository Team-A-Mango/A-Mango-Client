import { useRouter } from 'next/navigation'
import React from 'react'
import Price from '../../atoms/Price'
import * as S from './style'
import { authInstance } from '@/api/axios'
import Button from '@/components/common/Button'

const PriceContainer = ({
  price,
  id,
  mine,
}: {
  price: number
  id: number
  mine: boolean
}) => {
  const nav = useRouter()
  const deletePost = async () => {
    try {
      await authInstance.delete(`/product/${id}`)
      alert('성공적으로 상품이 삭제되었습니다.')
      nav.push('/')
    } catch (error) {
      console.error('Error while deleting a post:', error)
    }
  }
  return (
    <S.Wrappeer>
      <S.Title>
        <S.PriceText>가격</S.PriceText>
        {mine && <S.DeleteButton onClick={deletePost}>삭제</S.DeleteButton>}
      </S.Title>
      <Price price={price} />
      <Button text='구매하기' onClick={() => nav.push(`/hand-sign/${id}`)} />
    </S.Wrappeer>
  )
}

export default PriceContainer
