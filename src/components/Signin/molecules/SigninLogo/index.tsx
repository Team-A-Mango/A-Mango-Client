import React from 'react'
import * as S from './style'
import { LogoBig } from '@/assets/svg'

const SigninLogo = () => {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <LogoBig />
      </S.LogoContainer>
      <S.Title>로그인</S.Title>
    </S.Wrapper>
  )
}

export default SigninLogo
