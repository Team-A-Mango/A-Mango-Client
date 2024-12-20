import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Caution from '../../atoms/Caution'
import Title from '../../atoms/Title'
import HandSIgnContainer from '../../molecules/HandSIgnContainer'
import * as S from './style'
import { authInstance } from '@/api/axios'
import Button from '@/components/common/Button'
import Header from '@/components/Header'

const HandSignWrapper = ({ id }: { id: number }) => {
  const [sign, setSign] = useState<string | null>(null)
  const [pending, setPending] = useState<boolean>(false)
  const nav = useRouter()
  const handlingClickEvent = async () => {
    try {
      setPending(true)
      await authInstance.post(`/product/${id}/buy`, {
        handSign: sign,
      })
      alert('선택완료')
      nav.push('/')
      setPending(false)
    } catch (err) {
      alert('이미 구매된 상품입니다')
      nav.push('/')
    }
  }
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <Title />
          <HandSIgnContainer setSign={setSign} />
          <Button
            type='min'
            text='확인'
            onClick={() => handlingClickEvent()}
            disabled={pending}
          />
          <Caution />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default HandSignWrapper
