import React from 'react'
import * as S from './style'
import { Logo } from '@/assets/svg'

const SignInLogo = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.Title>회원가입</S.Title>
    </S.Wrapper>
  )
}

export default SignInLogo
