import React from 'react'
import SigninForm from '../../molecules/SigninForm'
import SigninLogo from '../../molecules/SigninLogo'
import * as S from './style'
import Button from '@/components/common/Button'

const SigninItem = () => {
  return (
    <S.Wrapper>
      <SigninLogo />
      <SigninForm />
      <S.ButtonContainer>
        <Button text='확인' />
        <S.RouteLink href='signup'>회원가입하기</S.RouteLink>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}

export default SigninItem
