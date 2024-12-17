import React from 'react'
import * as S from './style'
import { Logo } from '@/assets/svg'

const SignupLogo = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.Title>회원가입</S.Title>
    </S.Wrapper>
  )
}

export default SignupLogo