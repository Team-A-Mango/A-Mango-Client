'use client'

import React from 'react'
import * as S from './style'
import SignInItem from '@/components/Signin/organisms/SignInItem'

const Signin = () => {
  return (
    <S.Wrapper>
      <S.FormContainer>
        <SignInItem />
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default Signin
