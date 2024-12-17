import React from 'react'
import * as S from './style'
import { Logo } from '@/assets/svg'

const SigninLogo = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.Title>로그인</S.Title>
    </S.Wrapper>
  )
}

export default SigninLogo
