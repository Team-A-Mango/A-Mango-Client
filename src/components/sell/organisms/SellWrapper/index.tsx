import React from 'react'
import Logo from '../../atoms/Logo'
import SellForm from '../../molecules/SellForm'
import * as S from './style'
import Button from '@/components/common/Button'
import Header from '@/components/Header'

const SellWrapper = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.Container>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
          <SellForm />
          <Button text='상품 올리기' />
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default SellWrapper
