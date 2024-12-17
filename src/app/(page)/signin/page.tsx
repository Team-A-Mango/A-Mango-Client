'use client'

import * as S from './style'
import SigninItem from '@/components/Signin/organisms/SigninItem'

const Signin = () => {
  return (
    <S.Wrapper>
      <S.FormContainer>
        <SigninItem />
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default Signin
