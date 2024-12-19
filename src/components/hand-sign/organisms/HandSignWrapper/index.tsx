import React from 'react'
import Caution from '../../atoms/Caution'
import Title from '../../atoms/Title'
import HandSIgnContainer from '../../molecules/HandSIgnContainer'
import * as S from './style'
import Button from '@/components/common/Button'
import Header from '@/components/Header'

const HandSignWrapper = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <Title />
          <HandSIgnContainer />
          <Button type='min' text='선택하지 않고, 얼굴 인식' />
          <Caution />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default HandSignWrapper
