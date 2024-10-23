import React from 'react'
import SignupLogo from '../../molecules/SigniupLogo'
import SignupForm from '../../molecules/SignupForm'
import * as S from './style'
import Button from '@/components/common/Button'

const SignupItem = () => {
  return (
    <S.Wrapper>
      <SignupLogo />
      <SignupForm />
      <S.ButtonContainer>
        <Button text='확인' />
      </S.ButtonContainer>
    </S.Wrapper>
  )
}

export default SignupItem
