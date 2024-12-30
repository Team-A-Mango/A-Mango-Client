import { useRouter } from 'next/navigation'
import React from 'react'
import Price from '../../atoms/Price'
import * as S from './style'
import { authInstance } from '@/api/axios'

const PriceContainer = ({
  price,
  id,
  mine,
  account,
}: {
  price: number
  id: number
  mine: boolean
  account: string | undefined
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
      <p>계좌: {account}</p>
      <S.PurchaseButton onClick={() => nav.push(`/hand-sign/${id}`)}>
        구매하기
      </S.PurchaseButton>
    </S.Wrappeer>
  )
}

export default PriceContainer
