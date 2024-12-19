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
  const handlingClickEvent = async () => {
    try {
      const response = await authInstance.post(`/product/${id}/buy`, {
        handSign: sign,
      })
      alert(response)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(sign)
  return (
    <S.Wrapper>
      <Header appearance={true} />
      <S.Content>
        <S.Container>
          <Title />
          <HandSIgnContainer setSign={setSign} />
          <Button type='min' text='확인' onClick={() => handlingClickEvent()} />
          <Caution />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default HandSignWrapper
