'use client'

import * as S from './style'
import SignupItem from '@/components/Signup/organisms/SignupItem'

const Signup = () => {
  return (
    <S.Wrapper>
      <S.FormContainer>
        <SignupItem />
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default Signup
